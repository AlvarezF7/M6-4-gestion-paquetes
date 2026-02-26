// Importaciones
const express = require('express');
const dayjs = require('dayjs');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

// Obtener fecha y hora actual formateada
const fechaActual = dayjs().format('DD/MM/YYYY HH:mm:ss');

// Mensajes en consola con colores
console.log(chalk.green('Bienvenido a mi servidor con Node y Express'));
console.log(chalk.yellow(`Fecha y hora actual: ${fechaActual}`));
console.log(chalk.blue(`Uno extra para probar mas colores`));

// Ruta 
app.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido </h1>
        <p>Fecha y hora actual: ${fechaActual}</p>
    `);
});

// Inicia servidor
app.listen(PORT, () => {
    console.log(chalk.green(` Server corriendo en http://localhost:${PORT}`));
});