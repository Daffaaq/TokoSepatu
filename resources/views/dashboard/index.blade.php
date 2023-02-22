@extends('layouts.master')
@section('dashboard')
<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="{{asset('assets/dist/img/AdminLTELogo.png')}}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">TokoSepatu.Com</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
            <img src="{{asset('assets/dist/img/avatar.jpg')}}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ Auth::user()->name }}<!-- Alexander Pierce --></a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
            <a href="{{ route('dashboard.index') }}" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
          </li>


          <li class="nav-item">
            <a href="{{ route('product.index')}}" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Product
                <span class="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{ route('pelanggan.index') }}" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Pelanggan
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Transaksi
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>

          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" style="margin-left: 250px;">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="row mb-2">
            <div class="col-sm-6"></div>
            <!-- /.col -->
            <div class="col-sm-12">
                <!-- small box -->
                <div class="small-box bg-warning">
                    <div class="inner">
                        <h3>SELAMAT DATANG ADMIN</h3>
                        <p>{{ Auth::user()->email }}</p>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
            <!-- /.content-header -->
        </div>
    </div>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
@endsection