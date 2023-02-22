@extends('layouts.master')
@section('product')
<div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-gleft mt-2">
            <h2>JURUSAN TEKNOLOGI INFORMASI-POLITEKNIK NEGERI MALANG</h2>
        </div>
        <div class="float-right my-2">
            <a class="btn btn-success" href="{{ route('product.create') }}"> Input Produk</a>
        </div>
        <!-- Search-->
        <div class="float-left my-2">
            <form action="{{ route('product.index') }}">
                <div class="input-group mb-2">
                    <input type="text" class="form-control" name="search" value="{{ request('search')}}">
                    <button class="btn btn-success" type="submit">Search</button>
                </div>
            </form>
        </div>
    </div>
</div>
@if ($message = Session::get('success'))
<div class="alert alert-success">
    <p>{{ $message }}</p>
</div>
@endif
@if ($message = Session::get('error'))
<div class="alert alert-error">
    <p>{{ $message }}</p>
</div>
@endif


<table class="table table-bordered" style="background-color:white">
    <tr>
        <th>Brand</th>
        <th>Warna</th>
        <th>Harga</th>
        <th>Ukuran</th>

        <th width="auto">Action</th>
    </tr>
    @foreach ($data as $data)
    <tr>

        <td>{{ $data[0]->brand }}</td>
        <td>{{ $data[0]->warna }}</td>
        <td>{{ $data[0]->harga }}</td>
        <td>{{ $data[0]->ukuran ? $data[0]->ukuran->ukuran_sepatu : ''}}</td>
        <td>
            <form action="{{ route('product.destroy',['data'=>$data[0]->id_sepatu]) }}" method="POST">

                <a class="btn btn-info" href="{{ route('product.show',$data[0]->id_sepatu) }}">Show</a>
                <a class="btn btn-primary" href="">Edit</a>
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-danger">Delete</button>

            </form>
        </td>
    </tr>
    @endforeach
</table>

@endsection