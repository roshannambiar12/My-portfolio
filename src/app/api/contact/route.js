// File: app/api/contact/route.js

import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db'; // Ensure this path is correct

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Name, email, and message are required.' }, { status: 400 });
    }

    const querySql = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
    const values = [name, email, phone, message];
    const dbResponse = await query({ query: querySql, values: values });

    return NextResponse.json({ message: 'Contact added successfully!', id: dbResponse.insertId }, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}