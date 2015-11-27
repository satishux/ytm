<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>API Test</title>
</head>
<body>
    <h1>API Test</h1>
    <a href="{{ route('social.login', ['google']) }}" >Login using google</a>



    <div>
        <ul>
            @foreach($results as $result)
                <li>
                    <img src="{{ $result['snippet']['thumbnails']['default']['url'] }}" alt="">
                    <span>{{ $result['snippet']['title'] }}</span>
                </li>
            @endforeach
        </ul>
    </div>
    <script src="/js/jquery.min.js"></script>
</body>
</html>