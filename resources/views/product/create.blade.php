@extends('layouts.master')

@section('content')

<!-- <div class="container mt-5">

    <div class="row justify-content-center align-items-center">
        <div class="card" style="width: 24rem;">
            <div class="card-header">
                Tambah Sepatu
            </div>
            <div class="card-body">
                @if ($errors->any())
                <div class="alert alert-danger">
                    <strong>Whoops!</strong> There were some problems with your input.<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
                <form method="post" action="{{ route('sepatu.store') }}" id="myForm">
                    @csrf
                    <div class="form-group">
                        <label for="Id">Id</label>
                        <input type="text" name="Id" class="form-control" id="Id" aria-describedby="Id">
                    </div>
                    <div class="form-group">
                        <label for="Brand">Brand</label>
                        <input type="Brand" name="Brand" class="form-control" id="Brand" aria-describedby="Brand">
                    </div>
                    <div class="form-group">
                        <label for="Ukuran">Ukuran</label>
                        <select name="Ukuran" class="form-control">
                            @foreach($ukuran as $ukr)
                            <option value="{{$ukr->id}}">{{$ukr->ukuran_sepatu}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="Harga">Harga</label>
                        <input type="Harga" name="Harga" class="form-control" id="Harga" aria-describedby="Harga">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div> -->
@endsection
