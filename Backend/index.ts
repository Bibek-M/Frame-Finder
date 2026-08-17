import express, { Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import { findMovie } from "./identifyMovie";

const PORT = process.env.PORT || 3000;
const app = express();

// Enable CORS for frontend cross-origin requests
app.use(cors());
app.use(express.json());

// Store uploaded files in memory RAM (as a Buffer)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
});

// Health check endpoint
app.get("/", (_req: Request, res: Response) => {
  res.send("🎬 Express Movie Finder Backend is running!");
});

// Identify endpoint
app.post(
  "/api/identify",
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image file uploaded." });
      }

      console.log(
        `Received file: ${req.file.originalname} (${(
          req.file.size / 1024
        ).toFixed(2)} KB)`
      );

      // Call Gemini handler in FindMovies.ts
      const result = await findMovie(req.file.buffer, req.file.mimetype);

      console.log("Result:", result.title);
      return res.json(result);
    } catch (error: any) {
      console.error("Error processing request:", error);
      return res.status(500).json({
        error: error.message || "An error occurred while analyzing the image.",
      });
    }
  }
);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
});
