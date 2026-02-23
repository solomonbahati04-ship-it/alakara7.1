import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { studentId, subject, score } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO marks (student_id, subject, score) VALUES ($1, $2, $3) RETURNING *",
      [studentId, subject, score]
    );
    res.status(200).json({ success: true, mark: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
