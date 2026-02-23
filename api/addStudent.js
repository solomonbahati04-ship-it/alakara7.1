import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, className } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO students (name, class) VALUES ($1, $2) RETURNING *",
      [name, className]
    );
    res.status(200).json({ success: true, student: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
