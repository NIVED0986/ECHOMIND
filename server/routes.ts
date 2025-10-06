import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function registerRoutes(app: Express): Promise<Server> {
  // Chatbot endpoint using Groq (free AI alternative)
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, conversationHistory = [] } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Build messages array with conversation context
      const messages = [
        {
          role: "system" as const,
          content: "You are a supportive and empathetic AI wellness companion. Your role is to provide emotional support, encouragement, and helpful guidance for mental wellness. Be warm, understanding, and thoughtful in your responses. Keep responses concise but meaningful."
        },
        ...conversationHistory,
        {
          role: "user" as const,
          content: message
        }
      ];

      const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      });

      const reply = completion.choices[0].message.content;

      res.json({ reply });
    } catch (error: any) {
      console.error("Groq API error:", error);
      res.status(500).json({ error: "Failed to get response from AI" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
