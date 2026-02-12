import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const INDEXNOW_KEY = "7f35747ac78f14946badb1b8247b1059";
const SITE_URL = "https://runningrabbitsik.com";

async function submitIndexNow() {
  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://searchadvisor.naver.com/indexnow",
  ];

  const body = {
    host: "runningrabbitsik.com",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: [SITE_URL + "/"],
  };

  const results = [];
  for (const engine of engines) {
    try {
      const res = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      results.push({ engine, status: res.status });
    } catch (e: any) {
      results.push({ engine, error: e.message });
    }
  }
  return results;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/indexnow", async (_req, res) => {
    const results = await submitIndexNow();
    res.json({ success: true, results });
  });

  submitIndexNow()
    .then((results) => console.log("IndexNow submitted:", JSON.stringify(results)))
    .catch((err) => console.error("IndexNow error:", err.message));

  return httpServer;
}
