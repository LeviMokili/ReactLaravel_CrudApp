<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    //

    public function index(){
        $student = Student::all();
        return response()->json([
            'status'=>200,
            'messages'=>$student
           ]);

    }
    public function store(Request $request){

       $student = new Student();
       $student->name = $request->input('name');
       $student->course = $request->input('course');
       $student->email = $request->input('email');
       $student->phone = $request->input('phone');

       $student->save();

       return response()->json([
        'status'=>200,
        'messages'=>'student is being added to the database'
       ]);
    }


   
}
