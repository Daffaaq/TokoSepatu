@extends('layouts.master)

@section('content')
<!-- 
<div class="container mt-5">

    <div class="row justify-content-center align-items-center">
        <div class="card" style="width: 24rem;">
            <div class="card-header">
                Edit Sepatu
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
                <form method="post" action="{{ route('sepatu.update', $Sepatu->id) }}" id="myForm">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="id">id</label>
                        <input type="text" name="id" class="form-control" id="id" value="{{ $Sepatu->id }}" aria-describedby="id">
                    </div>
                    <div class="form-group">
                        <label for="Brand">Brand</label>
                        <input type="text" name="Brand" class="form-control" id="Brand" value="{{ $Sepatu->brand }}" aria-describedby="Brand">
                    </div>
                    <div class="form-group">
                        <label for="Ukuran">Ukuran</label>
                        <select name="Ukuran" class="form-control">
                            <option value="{{$ukr->id}}" {{ $sepatu->ukuran_id == $ukr->id ? 'selected' : '' }}>{{$ukr->ukuran_sepatu}}</option>
                        @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="Harga">Harga</label>
                        <input type="Harga" name="Harga" class="form-control" id="Harga" value="{{ $Sepatu->harga }}" aria-describedby="Harga">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div> -->
@endsection