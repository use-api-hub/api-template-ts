const API_KEYS = new Set(["test_token"]);

export const validateApiKey = (req: any, res: any, next: any) => {
  const apiKey = req.header("x-api-key");

  if (!apiKey) {
    return res.status(401).json({
      error: "API key is missing in the request headers",
    });
  }

  if (!API_KEYS.has(apiKey)) {
    return res.status(403).json({
      error: "Invalid API key",
    });
  }

  next();
};
