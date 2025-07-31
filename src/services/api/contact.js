import { query } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    try {
      const querySql = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
      const values = [name, email, phone, message];
      
      const data = await query({ query: querySql, values: values });

      res.status(201).json({ message: 'Contact added successfully!', id: data.insertId });
    } catch (error) {
      res.status(500).json({ message: `Error adding contact: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}