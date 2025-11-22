import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let personas = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@example.com', edad: 30 },
    { id: 2, nombre: 'María', apellido: 'García', email: 'maria.garcia@example.com', edad: 28 },
    { id: 3, nombre: 'Carlos', apellido: 'López', email: 'carlos.lopez@example.com', edad: 35 },
    { id: 4, nombre: 'Ana', apellido: 'Martínez', email: 'ana.martinez@example.com', edad: 26 }
];

let nextId = 5;

// GET - Obtener todas las personas
app.get('/api/personas', (req, res) => {
    res.json(personas);
});

// GET - Obtener persona por ID
app.get('/api/personas/:id', (req, res) => {
    const persona = personas.find(p => p.id === parseInt(req.params.id));
    if (!persona) {
        return res.status(404).json({ mensaje: `Persona con ID ${req.params.id} no encontrada` });
    }
    res.json(persona);
});

// POST - Crear nueva persona
app.post('/api/personas', (req, res) => {
    const { nombre, apellido, email, edad } = req.body;

    // Validación
    if (!nombre || !apellido || !email || !edad) {
        return res.status(400).json({ 
            mensaje: 'Faltan campos requeridos: nombre, apellido, email, edad' 
        });
    }

    const nuevaPersona = {
        id: nextId++,
        nombre,
        apellido,
        email,
        edad: parseInt(edad)
    };

    personas.push(nuevaPersona);
    res.status(201).json(nuevaPersona);
});

// PUT - Actualizar persona
app.put('/api/personas/:id', (req, res) => {
    const persona = personas.find(p => p.id === parseInt(req.params.id));
    if (!persona) {
        return res.status(404).json({ mensaje: `Persona con ID ${req.params.id} no encontrada` });
    }

    const { nombre, apellido, email, edad } = req.body;

    if (nombre) persona.nombre = nombre;
    if (apellido) persona.apellido = apellido;
    if (email) persona.email = email;
    if (edad) persona.edad = parseInt(edad);

    res.json(persona);
});

// DELETE - Eliminar persona
app.delete('/api/personas/:id', (req, res) => {
    const index = personas.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ mensaje: `Persona con ID ${req.params.id} no encontrada` });
    }

    const personaEliminada = personas.splice(index, 1);
    res.json({ mensaje: 'Persona eliminada', persona: personaEliminada[0] });
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Manejo de ruta no encontrada
app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ API de Personas ejecutándose en puerto ${PORT}`);
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log(`📚 Endpoints:`);
    console.log(`   GET    /api/personas`);
    console.log(`   GET    /api/personas/:id`);
    console.log(`   POST   /api/personas`);
    console.log(`   PUT    /api/personas/:id`);
    console.log(`   DELETE /api/personas/:id`);
    console.log(`   GET    /health`);
});
