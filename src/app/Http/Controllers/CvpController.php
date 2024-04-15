<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CvpController extends Controller
{
    public function index(Request $request){
        return view("input", []);
    }
}