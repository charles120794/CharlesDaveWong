<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request = $request->validate([
            'email' => 'required|email|unique:contacts,email',
            'name' => 'required',
            'message' => 'required'
        ]);

        Contact::create($request);

        foreach (['wongcharlesdave@gmail.com', 'glengapasen03@gmail.com'] as $recipient) {
            Mail::to($recipient)->send(new ContactMail);
        }

        return back()->with([
            'message' => "We’ve received your message. Our team will contact you at the earliest convenience."
        ]);
    }
}
