const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [
  { id: 1, name: 'Comprar víveres', description: 'Ir al supermercado' },
  { id: 2, name: 'Hacer ejercicio', description: 'Ir al gimnasio' },
];

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP usando Express!');
});

app.get('/task', (req, res) => {
  res.json(tasks);
});

app.post('/task', (req, res) => {
  const { name, description } = req.body;
  const newTask = { id: tasks.length + 1, name, description };
  tasks.push(newTask);
  res.json(newTask);
});

app.get('/image/:username', (req, res) => {
  const username = req.params.username;
  if (username === 'ronny') {
    res.sendFile(__dirname + '/img/nike.webp');
  } else {
    res.send('Página no encontrada');
  }
});

app.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
});

