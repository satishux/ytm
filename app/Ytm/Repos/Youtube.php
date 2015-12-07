<?php

namespace App\Ytm\Repos;

use Google_Client;
use Google_Service_YouTube;


/**
 * Class GapiRepo
 * @package App\Ytm\Repos
 */
class Youtube {

    /**
     * @var Google_Client
     */
    protected $client;

    /**
     * @var Google_Service_YouTube
     */
    protected $youtube;


    protected $searchString;

    /**
     * GapiRepo constructor.
     */
    public function __construct ()
    {

        $this->client = new Google_Client();
        $this->client->setDeveloperKey( getenv( "GOOGLE_API_KEY" ) );
        $this->client->setClientId( getenv( "GOOGLE_CLIENT_ID" ) );
        $this->client->setClientSecret( getenv( "GOOGLE_CLIENT_SECRET" ) );
        $this->client->setAccessToken( session( "g_token" ) );

        $this->youtube = new Google_Service_YouTube( $this->client );


        $this->searchString = [
            'q' => "",
            'maxResults' => 5,
            'type' => 'video',
            'order' => 'relevance'
        ];

    }


    public function search ( $query )
    {
        $this->searchString['q'] = $query;
        return $this;
    }

    public function maxResults ( $limit )
    {
        $limit = ($limit > 50) ? 50 : $limit;
        $this->searchString['maxResults'] = $limit;

        return $this;
    }


    public function type ( $type )
    {
        $this->searchString['type'] = $type;

        return $this;
    }

    public function orderBy ( $order )
    {
        $this->searchString['order'] = $order;
        return $this;
    }

    public function get ()
    {
       try
        {

            $searchResponse = $this->youtube->search->listSearch( 'id,snippet', $this->searchString);

            $results = [ ];
            foreach ( $searchResponse->getItems() as $searchResult )
            {
                $results[] = $this->createVideoObject( $searchResult );
            }

            return $results;


        }
        catch ( \Google_Service_Exception $e )
        {

            return false;
        }
    }


    /**
     * @param       $commentText
     * @param array $videoIds
     *
     * @return string
     */
    public function commentVideos ( $commentText, Array $videoIds )
    {
        $result = [ ];

        foreach ( $videoIds as $videoId )
        {
            if ( $this->comment( $videoId, $commentText ) )
            {
                $result[ $videoId ] = 'success';
            } else
            {
                $result[ $videoId ] = 'failed';
            }
        }

        return json_encode( $result );
    }

    /**
     * @param      $videoId
     * @param      $commentText
     * @param null $channelId
     *
     * @return bool
     */
    public function comment ( $videoId, $commentText, $channelId = null )
    {
        try
        {
            /*
             *  $commentText = 'This is great';
             *  $channelId = "UC8p8tbo9-FNLIrvmGnPzVUQ";
             *  $videoId = "sKFCCRVO-fc";
             */


            $commentSnippet = new \Google_Service_YouTube_CommentSnippet();
            $commentSnippet->setTextOriginal( $commentText );

            $topLevelComment = new \Google_Service_YouTube_Comment();
            $topLevelComment->setSnippet( $commentSnippet );

            $commentThreadSnippet = new \Google_Service_YouTube_CommentThreadSnippet();
            $commentThreadSnippet->setTopLevelComment( $topLevelComment );
            $commentThreadSnippet->setVideoId( $videoId );
//            $commentThreadSnippet->setChannelId($CHANNEL_ID);

            $commentThread = new \Google_Service_YouTube_CommentThread();
            $commentThread->setSnippet( $commentThreadSnippet );

            $videoCommentInsertResponse = $this->youtube->commentThreads->insert( 'snippet', $commentThread );

            if ( $videoCommentInsertResponse )
            {
                return true;
            }

            return false;
        }
        catch ( \Google_Service_Exception $e )
        {
            return false;
        }
        catch ( \Google_Exception $e )
        {
            return false;
        }
    }

    /**
     * @param $searchResult
     *
     * @return \stdClass
     */
    private function createVideoObject ( $searchResult )
    {
        $obj = new \stdClass;

        $obj->videoId = $searchResult['id']['videoId'];
        $obj->kind = $searchResult['id']['kind'];

        $obj->publishedAt = $searchResult['snippet']['publishedAt'];
        $obj->channelId = $searchResult['snippet']['channelId'];
        $obj->title = $searchResult['snippet']['title'];
        $obj->description = $searchResult['snippet']['description'];
        $obj->thumbnailDefault = $searchResult['snippet']['thumbnails']['default']['url'];
        $obj->thumbnailMedium = $searchResult['snippet']['thumbnails']['medium']['url'];
        $obj->thumbnailHigh = $searchResult['snippet']['thumbnails']['high']['url'];
        $obj->channelTitle = $searchResult['snippet']['channelTitle'];
        $obj->liveBroadcastContent = $searchResult['snippet']['liveBroadcastContent'];

        return $obj;
    }


}