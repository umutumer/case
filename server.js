const http = require("https");
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const mongoose = require('mongoose');
const User = require('./models/User.model.js')
const bcrypt = require('bcrypt');

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
app.get('/api/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/users/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Şifreyi manuel olarak hashle
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      username,
      email,
      password: hashedPassword // Hashlenmiş şifreyi kaydet
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

app.post('/api/users/login', async (req, res) => {
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

app.put('/api/users/:id/flights', async (req, res) => {
  const userId = req.params.id;
  const newFlight = req.body;

  if (!newFlight) {
      return res.status(400).json({ message: "New flight data is required" });
  }

  try {
      const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $push: { myFlights: newFlight } },
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
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
//Projeyi çalıştırdığınızda kendi mongodb bağlantınızı ekleyebilirsiniz.
mongoose.connect('')
  .then(() => {
    console.log('Connected to DataBase!');
  })
  .catch((error) =>{
    console.log("Connection failed:",error);
    
  });
