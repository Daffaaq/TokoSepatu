<?php

namespace App\Http\Controllers;

use App\Models\Sepatu;
use App\Models\Ukuran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SepatuController extends Controller
{
   // public function halamanProduct()
   // {
   //    $sepatu = Sepatu::with('ukuran')->get();
   //    return view('product.index', ['sepatu' => $sepatu]);
   // }
   public function index()
   {
      $data['data'] = Sepatu::with('ukuran')->get();
      // dd($data);
      $data['data'] = Sepatu::orderBy('id_sepatu', 'asc')->get();
      return view('product.index', ['data' => $data]);
   }
   public function create()
   {

      $ukuran = Ukuran::all();
      return view('sepatu.create', ['ukuran' => $ukuran]);
   }
   public function store(Request $request)
   {
      //melakukan validasi data
      $request->validate([
         'id_sepatu' => 'required',
         'brand' => 'required',
         'ukuran_id' => 'required',
         'harga' => 'required',
      ]);
      $sepatu = new Sepatu;
      $sepatu->id_sepatu = $request->get('id_sepatu');
      $sepatu->brand = $request->get('brand');
      $sepatu->harga = $request->get('harga');
      $sepatu->save();

      $ukuran = new Ukuran;
      $ukuran->id_ukuran = $request->get('id_ukuran');

      //fungsi eloquent untuk menambah data
      $sepatu->ukuran()->associate($ukuran);
      $sepatu->save();

      //jika data berhasil ditambahkan, akan kembali ke halaman utama
      return redirect()->route('sepatu.index')
         ->with('success', 'Sepatu Berhasil Ditambahkan');
   }
   public function show($id)
   {
      //menampilkan detail data dengan menemukan/berdasarkan id Sepatu
      // $sepatu = Sepatu::leftJoin('ukuran', 'ukuran.id', 'sepatu.ukuran_id')->where('id', $id)->get();
      $sepatu = DB::table('sepatu')->leftJoin('ukuran', 'ukuran.id', 'sepatu.ukuran_id')->where('id_sepatu', $id)->get();
      dd($sepatu);
      // return view('product.detail', ['sepatu' => $sepatu]);
   }
   public function edit($id)
   {
      //menampilkan detail data dengan menemukan berdasarkan id Sepatu untuk diedit
      $sepatu = Sepatu::with('ukuran')->where('id', $id)->first();
      $ukuran = Ukuran::all();
      return view('sepatu.edit', compact('sepatu', 'ukuran'));
   }
   public function update(Request $request, $id)
   {
      //melakukan validasi data
      $request->validate([
         'Id' => 'required',
         'Brand' => 'required',
         'Ukuran' => 'required',
         'Harga' => 'required',
      ]);

      $sepatu = Sepatu::with('ukuran')->where('id', $id)->first;
      $sepatu->id = $request->get('Id');
      $sepatu->brand = $request->get('Brand');
      $sepatu->harga = $request->get('Harga');
      $sepatu->save();

      $ukuran = new Ukuran;
      $ukuran->id = $request->get('Ukuran');
      //fungsi eloquent untuk mengupdate data inputan kita
      $sepatu->ukuran()->associate($ukuran);
      $sepatu->save();

      //jika data berhasil diupdate, akan kembali ke halaman utama
      return redirect()->route('sepatu.index')
         ->with('success', 'Sepatu Berhasil Diupdate');
   }
   public function destroy($id)
   {
      //fungsi eloquent untuk menghapus data
      Sepatu::where('id', $id)->delete();
      return redirect()->route('sepatu.index')
         ->with('success', 'Sepatu Berhasil Dihapus');
   }
};
