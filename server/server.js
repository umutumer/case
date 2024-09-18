const http = require("https");
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/api/flights", (req, res) => {
  const options = {
    method: "GET",
    hostname: "api.schiphol.nl",
    port: null,
    path: "/public-flights/flights",
    headers: {
      "resourceversion": "v4",
      "app_id": "6e2faff2",
      "app_key": "cc1514d0bae89121073d79f98fe82f2b"
    }
  };

  const request = http.request(options, (response) => {
    let chunks = [];

    response.on("data", (chunk) => {
      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks);
      res.json(JSON.parse(body.toString()));
    });
  });

  request.on("error", (e) => {
    res.status(500).json({ error: e.message });
  });

  request.end();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
