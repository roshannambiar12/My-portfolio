// pages/api/contact.js
import { query } from '../../lib/db';

export default async function handler(req, res) {
  // --- ADD THIS LINE ---
  console.log("--- API ROUTE WAS HIT ---"); 

  if (req.method === 'POST') {
    // --- AND ADD THIS LINE ---
    console.log("--- RECEIVED POST REQUEST WITH BODY: ---", req.body);

    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    try {
      console.log("--- ATTEMPTING TO QUERY DATABASE ---"); // <-- Bonus log
      const querySql = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
      const values = [name, email, phone, message];
      
      const data = await query({ query: querySql, values: values });

      console.log("--- DATABASE QUERY SUCCESSFUL ---"); // <-- Bonus log
      res.status(201).json({ message: 'Contact added successfully!', id: data.insertId });
    } catch (error) {
      // THIS WILL SHOW THE ACTUAL DATABASE ERROR IN YOUR TERMINAL
      console.error("--- DATABASE ERROR: ---", error); 
      res.status(500).json({ message: `Error adding contact: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}