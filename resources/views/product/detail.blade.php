@extends('layouts.master')

@section('detail')
<div class="container mt-5">
    <div class="row justify-content-center align-items-center">
        <div class="card" style="width: 24rem;">
            <div class="card-header">
                Detail Sepatu
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Id: {{$sepatu->id}} </b></li>
                    <li class="list-group-item"><b>Brand: {{$sepatu->brand}}</b></li>
                    <li class="list-group-item"><b>Ukuran: {{$sepatu->ukuran_id}}</b></li>
                    <li class="list-group-item"><b>Harga: {{$sepatu->harga}}</b></li>
                </ul>
            </div>
            <a class="btn btn-success mt-3" href="{{ route('sepatu.index') }}">Kembali</a>
        </div>
    </div>
</div>
@endsection