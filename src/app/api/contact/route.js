// File: app/api/contact/route.js

import { NextResponse } from 'next/server';
// This path goes up three levels from app/api/contact to the root, then into lib
import { query } from '../../../lib/db'; 

export async function POST(request) {
  try {
    // 1. Get data from the request
    const { name, email, phone, message } = await request.json();

    // 2. Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Name, email, and message are required.' }, { status: 400 });
    }

    // 3. Prepare and execute the database query
    const querySql = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
    const values = [name, email, phone, message];
    const data = await query({ query: querySql, values: values });

    // 4. Return a success response
    return NextResponse.json({ message: 'Contact added successfully!', id: data.insertId }, { status: 201 });

  } catch (error) {
    // 5. Handle any errors
    console.error("--- API ROUTE ERROR: ---", error);
    return NextResponse.json({ message: "An internal server error occurred." }, { status: 500 });
  }
}