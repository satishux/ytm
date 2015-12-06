@extends('master')

@section('content')

    <div class="account-pages"></div>
    <div class="clearfix"></div>

    <div class="wrapper-page">
        <div class=" card-box">
            <div class="panel-heading">
                @if(session('g_email'))
                    <h3 class="text-center"> We will be creating <strong class="text-custom">YTM</strong> account from following credentials</h3>
                @else
                    <h3 class="text-center"> Sign Up to <strong class="text-custom">YTM</strong> </h3>
                @endif
            </div>

            <div class="panel-body">

                {!!  Form::open(['route' => ['user.create'], 'method' => 'post', 'class' => 'form-horizontal m-t-20' ]) !!}
                    @if(session('g_name') && session('g_email'))
                        <input type="hidden" name="use_session" value="true">
                    @endif
                    <div class="form-group ">
                        <div class="col-xs-12">
                            <input class="form-control"
                                   type="email"
                                   name="email"
                                   placeholder="Email"
                                   @if( session('g_email')) value="{{ session('g_email') }}" disabled @endif>
                        </div>
                    </div>

                    <div class="form-group ">
                        <div class="col-xs-12">
                            <input class="form-control"
                                   type="text"
                                   name="name"
                                   placeholder="Username" @if( session('g_name')) value="{{ session('g_name') }}" disabled @endif>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control" type="password" name="password" placeholder="Password">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="checkbox checkbox-primary">
                                <input id="checkbox-signup" type="checkbox" checked="checked">
                                <label for="checkbox-signup">I accept <a href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group text-center m-t-40">
                        <div class="col-xs-12">
                            <button class="btn btn-pink btn-block text-uppercase waves-effect waves-light" type="submit">
                                @if( session('g_email'))
                                    Proceed
                                @else
                                    Register
                                @endif
                            </button>
                        </div>
                    </div>

                    <div class="form-group m-t-20 m-b-0">
                        <div class="col-sm-12 text-center">
                            <h4><b>Sign Up with</b></h4>
                        </div>
                    </div>

                    <div class="form-group m-b-0 text-center">
                        <div class="col-sm-12">
                            <button type="button" class="btn btn-googleplus waves-effect waves-light m-t-20">
                                <i class="fa fa-google-plus m-r-5"></i> Google+
                            </button>
                        </div>
                    </div>


                {!! Form::close() !!}

            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 text-center">
                <p>
                    Already have account?<a href="page-login.html" class="text-primary m-l-5"><b>Sign In</b></a>
                </p>
            </div>
        </div>
    </div>

@stop


