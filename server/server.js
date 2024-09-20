const http = require("https");
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const mongoose = require('mongoose');
const User = require('./models/User.model.js')
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
app.get('/api/users', async (req,res) =>{
  try {
    const users = await User.find({});
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})
app.post('/api/users/register', async (req,res) =>{
  try {
   const user = await User.create(req.body);
   res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
  }
  try {
      const user = await User.findOne({ username });
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      // Şifreyi karşılaştırma
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid password" });
      }
      res.status(200).json({ userId: user._id });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Login failed" });
  }
});
app.put('/users/:id/flights', async (req, res) => {
  const userId = req.params.id;
  const newFlight = req.body.flight;

  if (!newFlight) {
      return res.status(400).json({ message: "New flight data is required" });
  }

  try {
      const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $push: { myFlights: newFlight } }, // $push operatörü diziyi günceller
          { new: true }
      );

      if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(updatedUser);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating user flights" });
  }
});
app.put('/users/:id/flights/remove', async (req, res) => {
  const userId = req.params.id;
  const flightToRemove = req.body.flight;

  if (!flightToRemove) {
      return res.status(400).json({ message: "Flight data to remove is required" });
  }

  try {
      const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $pull: { myFlights: flightToRemove } }, // $pull operatörü ile veriyi diziden çıkarıyoruz
          { new: true }
      );

      if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(updatedUser);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error removing flight from user" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

mongoose.connect('mongodb+srv://utumer:K9gyZ75HmPdwWci8@case.9wfmv.mongodb.net/?retryWrites=true&w=majority&appName=case')
  .then(() => {
    console.log('Connected to DataBase!');
  })
  .catch((error) =>{
    console.log("Connection failed:",error);
    
  });
