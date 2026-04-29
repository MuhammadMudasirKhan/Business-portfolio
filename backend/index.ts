import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import pool from "./db";

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Aventus Backend is running with Supabase!");
});

// Test DB
app.get("/test-db", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Database is working!",
      time: result.rows[0],
    });
  } catch (err: unknown) {
    console.error(err);
    res.status(500).send("Database query failed");
  }
});

// Contact route
app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, company, message } = req.body as {
    name: string;
    email: string;
    company: string;
    message: string;
  };

  if (!name || !email || !company || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const query =
      "INSERT INTO contacts (name, email, company, message) VALUES ($1, $2, $3, $4) RETURNING *";

    const values = [name, email, company, message];

    await pool.query(query, values);

    res.json({ success: true, message: "Message saved successfully!" });
  } catch (err: unknown) {
    console.error("Database Error:", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
export default pool;