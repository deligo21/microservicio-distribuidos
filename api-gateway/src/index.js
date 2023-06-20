// Importa los módulos necesarios
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/login', async (req, res) => {
    try {
      const response = await axios.get('http://localhost:3001/login');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error al comunicarse con el microservicio de inicio de sesión' });
    }
  });

// Ruta para el inicio de sesión
app.post('/login', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3001/login', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al comunicarse con el microservicio de inicio de sesión' });
  }
});

// Rutas para el CRUD de inventarios
app.get('/inventario', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3002/inventario');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al comunicarse con el microservicio de inventario' });
  }
});

app.post('/inventario', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3002/inventario', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al comunicarse con el microservicio de inventario' });
  }
});

// Puerto en el que escucha el API Gateway
const port = 3000;
app.listen(port, () => {
  console.log(`API Gateway escuchando en el puerto ${port}`);
});
