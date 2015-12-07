{{-- Video Search Filters : Search Video Page --}}

<div class="portlet">
    <div class="portlet-heading bg-inverse">
        <h3 class="portlet-title">
            Filter Search
        </h3>

        <div class="portlet-widgets">
            <a href="javascript:;" data-toggle="reload"><i class="ti-reload"></i></a>
            <span class="divider"></span>
            <a data-toggle="collapse" data-parent="#accordion1" href="#bg-inverse"><i class="ti-minus"></i></a>
            <span class="divider"></span>
            <a href="#" data-toggle="remove"><i class="ti-close"></i></a>
        </div>
        <div class="clearfix"></div>
    </div>


    <div id="bg-inverse" class="panel-collapse collapse in">
        <div class="portlet-body">
            <div class="row">

                <div class="col-md-4">
                    <h4 class="m-t-0 header-title"><b>Sort By</b></h4>
                    @foreach(['Relevance' => 'relevance', 'Rating' => 'rating', 'Date' =>  'date', 'Title' => 'title', 'Viewcount' => 'viewCount'] as $key=>$value)
                        <div class="radio radio-primary">
                            <input type="radio" name="sort-results-by" id="sort-results-by-{{ $value }}"
                                   value="{{ $value }}" ng-model="search.searchData.order" >
                            <label for="sort-results-by-{{ $value }}">
                                {{ $key }}
                            </label>
                        </div>
                    @endforeach
                </div>

                <div class="col-md-4">
                    <h4 class="m-t-0 header-title"><b>Type</b></h4>
                    @foreach(['Video' => 'video', 'Channel' => 'channel', 'Playlist' =>  'palylist'] as $key=>$value)
                        <div class="radio radio-primary">
                            <input type="radio" name="result-type" id="result-type-{{ $value }}" value="{{ $value }}"
                                   ng-model="search.searchData.type">
                            <label for="result-type-{{ $value }}">
                                {{ $key }}
                            </label>
                        </div>
                    @endforeach
                </div>

                <div class="col-md-4">
                    <h4 class="m-t-0 header-title"><b>Type</b></h4>
                    @foreach(['10' => '10', '20' => '20', '30' => '30', '40' => '40', '50' =>  '50'] as $key=>$value)
                        <div class="radio radio-primary">
                            <input type="radio" name="result-count" id="result-count-{{ $value }}" value="{{ $value }}"
                                   ng-model="search.searchData.count">
                            <label for="result-count-{{ $value }}">
                                {{ $key }}
                            </label>
                        </div>
                    @endforeach
                </div>

            </div>
        </div>
    </div>

</div>
