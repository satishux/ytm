<!doctype html>
<html ng-app="ytm">
<head>
    <title>Youtube Marketing</title>

    <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/css/waves.css" rel="stylesheet" type="text/css">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Youtube Commenting Software">
    <meta name="author" content="Devartisans">

    <link rel="shortcut icon" href="/images/favicon_1.ico">


    @yield('styles-top')
    <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="/css/core.css" rel="stylesheet" type="text/css" />
    <link href="/css/components.css" rel="stylesheet" type="text/css" />
    <link href="/css/icons.css" rel="stylesheet" type="text/css" />
    <link href="/css/pages.css" rel="stylesheet" type="text/css" />
    <link href="/css/responsive.css" rel="stylesheet" type="text/css" />
    <link href="/css/waves.css" rel="stylesheet" type="text/css">
    @yield('styles-bottom')

    <!-- HTML5 Shiv and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    <script src="/js/modernizr.min.js"></script>

</head>
<body>
<div id="wrapper">
    @yield('content')

</div>


<script>
    var resizefunc = [];
</script>
    <!-- jQuery  -->
<script src="/js/jquery.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/detect.js"></script>
<script src="/js/fastclick.js"></script>
<script src="/js/jquery.slimscroll.js"></script>
<script src="/js/jquery.blockUI.js"></script>
<script src="/js/waves.js"></script>
<script src="/js/wow.js"></script>
<script src="/js/jquery.nicescroll.js"></script>


<script src="/js/angular.js"></script>
<script src="/js/theme.core.js"></script>

@yield('scripts-top')
<script src="/js/app.js"></script>
@yield('scripts-bottom')
<script>
    (function() {
        Waves.attach('.btn', 'waves-light');
        Waves.init();
    })();
</script>
</body>
</html>
