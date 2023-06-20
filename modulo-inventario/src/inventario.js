// Importa los módulos necesarios
import express from 'express';
const app = express();

// Rutas para el CRUD de inventarios
app.get('/inventario', (req, res) => {
  // Lógica para obtener la lista de inventarios
  // ...
  res.json({ inventarios: [] });
});

app.post('/inventario', (req, res) => {
  // Lógica para crear un nuevo inventario
  // ...
  res.json({ message: 'Inventario creado exitosamente' });
});

// Puerto en el que escucha el microservicio de inventario
const port = 3002;
app.listen(port, () => {
  console.log(`Microservicio de inventario escuchando en el puerto ${port}`);
});
