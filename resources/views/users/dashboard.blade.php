@extends('master')

@section('content')
    @include('layouts.top-bar')
    @include('layouts.left-sidebar')
    @yield('page')
@stop