import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import monsterRoutes from "./routes/monsterRoutes";
import { DOMAIN, SITE_PORT } from "./lib/constants";
import swaggerDocument from "./swagger.json";
import { validateApiKey } from "./middleware/apiKeyAuth";
import { readFileSync } from "fs";
import { join } from "path";

const app = express();
const PORT = process.env.PORT || SITE_PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Swagger JSON endpoint
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocument);
});

// README endpoint
app.get("/readme", (req, res) => {
  try {
    const readmePath = join(__dirname, "..", "README.md");
    const readmeContent = readFileSync(readmePath, "utf-8");
    res.setHeader("Content-Type", "text/markdown");
    res.send(readmeContent);
  } catch (error) {
    console.error("Error serving README:", error);
    res.status(500).send("Error loading documentation");
  }
});

// Protect API routes with API key
app.use("/api", validateApiKey);

// Routes
app.use("/api/monsters", monsterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger documentation available at ${DOMAIN}/api-docs`);
  console.log(`README documentation available at ${DOMAIN}/readme`);
});
