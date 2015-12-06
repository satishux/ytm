@extends('master')

@section('content')
    <!-- resources/views/auth/login.blade.php -->


<div class="account-pages"></div>
<div class="clearfix"></div>

<div class="wrapper-page">
    <div class="card-box">
        <div class="panel-heading">
                <h3 class="text-center"> Sign In to <strong class="text-custom">YTM</strong></h3>
        </div>

        <div class="panel-body">
            <form class="form-horizontal m-t-20" action="/auth/login" method="post">
                {!! csrf_field() !!}

                <div class="form-group ">
                    <div class="col-xs-12">
                        <input class="form-control" type="email" name="email" required="" placeholder="email" value="{{ old('email') }}">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-xs-12">
                        <input class="form-control" type="password" name="password" required="" placeholder="Password">
                    </div>
                </div>

                <div class="form-group ">
                    <div class="col-xs-12">
                        <div class="checkbox checkbox-primary">
                            <input id="remember" name="remember" type="checkbox">
                            <label for="remember"> Remember me </label>
                        </div>

                    </div>
                </div>

                <div class="form-group text-center m-t-40">
                    <div class="col-xs-12">
                        <button class="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit">
                            Log In
                        </button>
                    </div>
                </div>

                <div class="form-group m-t-20 m-b-0">
                    <div class="col-sm-12">
                        <a href="page-recoverpw.html" class="text-dark"><i class="fa fa-lock m-r-5"></i> Forgot your password?</a>
                    </div>
                </div>

                <div class="form-group m-t-20 m-b-0">
                    <div class="col-sm-12 text-center">
                        <h4><b>Sign in with</b></h4>
                    </div>
                </div>

                <div class="form-group m-b-0 text-center">
                    <div class="col-sm-12">
                        <a href="/auth/login/google" type="button" class="btn btn-googleplus waves-effect waves-light m-t-20">
                            <i class="fa fa-google-plus m-r-5"></i> Google+
                        </a>
                    </div>
                </div>
            </form>

        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 text-center">
            <p>
                Don't have an account? <a href="page-register.html" class="text-primary m-l-5"><b>Sign Up</b></a>
            </p>
        </div>
    </div>

</div>

@stop