const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Importerer rutehåndterere
const productsRouter = require('./routes/products');

// Konfigurerer miljøvariabler fra .env-filen
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);


// Lager en ny Express-app
const app = express();

// Konfigurerer Express-appen
app.use(express.json());
app.use(cors());

// Kobler til MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB:', error));

// Bruker rutehåndterere
app.use('/api/products', productsRouter);

// Starter serveren
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
