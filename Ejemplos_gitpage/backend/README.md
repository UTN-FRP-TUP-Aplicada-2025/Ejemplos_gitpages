# 🚀 Backend API - Node.js + Express

Backend CRUD para gestión de personas con Express.js.

## 📋 Estructura

```
backend/
├── server.js        # Servidor principal
├── package.json     # Dependencias
└── README.md        # Este archivo
```

## 🛠️ Instalación Local

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar servidor
npm start

# El servidor estará en: http://localhost:3000
```

## 📡 Endpoints

### GET /api/personas
Obtener todas las personas.

```bash
curl http://localhost:3000/api/personas
```

**Respuesta:**
```json
[
  {
    "id": 1,
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan.perez@example.com",
    "edad": 30
  }
]
```

### GET /api/personas/:id
Obtener una persona por ID.

```bash
curl http://localhost:3000/api/personas/1
```

### POST /api/personas
Crear una nueva persona.

```bash
curl -X POST http://localhost:3000/api/personas \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Pedro",
    "apellido": "González",
    "email": "pedro@example.com",
    "edad": 32
  }'
```

### PUT /api/personas/:id
Actualizar una persona.

```bash
curl -X PUT http://localhost:3000/api/personas/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Carlos",
    "edad": 31
  }'
```

### DELETE /api/personas/:id
Eliminar una persona.

```bash
curl -X DELETE http://localhost:3000/api/personas/1
```

### GET /health
Health check.

```bash
curl http://localhost:3000/health
```

## 🔧 Variables de Entorno

Crea un archivo `.env`:

```
PORT=3000
NODE_ENV=development
```

## 📦 Dependencias

- **express**: Framework web
- **cors**: Middleware CORS

## 🚀 Despliegue

### Vercel

```bash
npm install -g vercel
vercel
```

### Render

1. Conectar repositorio en https://render.com
2. Root Directory: `backend`
3. Build Command: `npm install`
4. Start Command: `npm start`

### Railway

```bash
npm install -g @railway/cli
railway login
railway up
```

## 🧪 Testing

Prueba los endpoints con:

```bash
# Crear persona
curl -X POST http://localhost:3000/api/personas \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","apellido":"User","email":"test@example.com","edad":25}'

# Obtener todas
curl http://localhost:3000/api/personas

# Obtener por ID
curl http://localhost:3000/api/personas/1

# Actualizar
curl -X PUT http://localhost:3000/api/personas/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"TestActualizado"}'

# Eliminar
curl -X DELETE http://localhost:3000/api/personas/1
```

## 📝 Notas

- Los datos se almacenan en memoria (se pierden al reiniciar)
- CORS está habilitado para todas las orígenes
- Validación básica de entrada

## 🔄 Próximas Mejoras

- [ ] Base de datos persistente (MongoDB, PostgreSQL)
- [ ] Autenticación JWT
- [ ] Rate limiting
- [ ] Logging
- [ ] Unit tests
- [ ] Documentación Swagger
