# 🚀 Solución de Gestión de Personas - ASP.NET Core + GitHub Pages + GitHub Actions

Una solución **completa y moderna** con:
- ✅ **API REST CRUD** (opciones: ASP.NET Core 10 o Node.js/Express)
- ✅ **Frontend en GitHub Pages** (HTML/CSS/JS vanilla)
- ✅ **CI/CD con GitHub Actions** (despliegue automático)
- ✅ **Backend dinámico** con GitHub Actions

## 📋 Estructura del Proyecto

```
Ejemplos_gitpage/
├── .github/
│   └── workflows/                  # GitHub Actions CI/CD
│       ├── deploy-api.yml         # Deploy API Node.js
│       └── deploy-frontend.yml    # Deploy GitHub Pages
│
├── PersonasAPI/                    # API ASP.NET Core 10 (opcional)
│   ├── Controllers/
│   ├── DTOs/
│   ├── Services/
│   ├── Dockerfile
│   └── PersonasAPI.csproj
│
├── backend/                        # API Node.js/Express
│   ├── server.js                  # Servidor Express
│   ├── package.json
│   └── README.md
│
├── web/                           # Frontend estático (GitHub Pages)
│   └── index.html                # Interfaz web interactiva
│
└── README.md                      # Este archivo
```

## 🎯 Características

✅ **CRUD Completo**: Create, Read, Update, Delete personas  
✅ **API REST**: Endpoints JSON bien documentados  
✅ **Frontend Moderno**: Interfaz web responsive con búsqueda de API configurable  
✅ **Datos en Memoria**: 4 personas de prueba precargadas  
✅ **GitHub Pages**: Hosting gratuito del frontend  
✅ **GitHub Actions**: CI/CD automático  
✅ **CORS Habilitado**: Para acceso desde GitHub Pages  
✅ **Documentación Completa**: Swagger, README, ejemplos

## 🛠️ Desarrollo Local

### Opción A: Ejecutar con Node.js (Más rápido para desarrollo)

#### Requisitos
- Node.js 18+
- npm o yarn

#### Pasos

```bash
# 1. Clonar o descargar el repositorio
cd Ejemplos_gitpage

# 2. Instalar dependencias del backend
cd backend
npm install

# 3. Ejecutar el servidor
npm start

# El servidor estará en: http://localhost:3000
```

#### Acceder a la interfaz web

1. Abre `web/index.html` en el navegador (o sirve con un servidor HTTP)
2. Configura la URL de la API: `http://localhost:3000`
3. Haz clic en "Probar Conexión"

### Opción B: Ejecutar con ASP.NET Core 10

#### Requisitos
- .NET Core 10 SDK
- Visual Studio Code o Visual Studio

```bash
cd PersonasAPI
dotnet restore
dotnet run

# El servidor estará en: http://localhost:5265
```

## 📡 Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/personas` | Obtener todas las personas |
| GET | `/api/personas/{id}` | Obtener persona por ID |
| POST | `/api/personas` | Crear nueva persona |
| PUT | `/api/personas/{id}` | Actualizar persona |
| DELETE | `/api/personas/{id}` | Eliminar persona |
| GET | `/health` | Health check (Node.js) |

### Ejemplo de solicitud POST

```bash
curl -X POST http://localhost:3000/api/personas \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Carlos",
    "apellido": "López",
    "email": "carlos@example.com",
    "edad": 35
  }'
```

## 🌐 Despliegue en GitHub Pages + GitHub Actions

### Paso 1: Preparar el Repositorio

Asegúrate de que tu repositorio tiene esta estructura:

```
Ejemplos_gitpages/
├── .github/workflows/  # GitHub Actions
├── web/               # Frontend para GitHub Pages
├── backend/           # Backend Node.js
└── PersonasAPI/       # Backend .NET (opcional)
```

### Paso 2: Activar GitHub Pages

1. Ve a **Settings → Pages**
2. Source: `Deploy from a branch`
3. Branch: `main`
4. Folder: `/web`
5. Guardar

GitHub Pages se actualizará automáticamente en: `https://tu-usuario.github.io/Ejemplos_gitpages/`

### Paso 3: Desplegar el Backend

#### Opción 1: Desplegar en Railway (Recomendado para .NET)

```bash
# 1. Instalar Railway CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. Crear proyecto
cd PersonasAPI
railway init

# 4. Desplegar
railway up
```

Obtén la URL del proyecto y úsala en el frontend.

#### Opción 2: Desplegar Node.js en Vercel

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Desplegar
cd backend
vercel

# 3. Vercel proporciona una URL automáticamente
```

#### Opción 3: Desplegar en Render

1. Ve a https://render.com
2. New Web Service
3. Conecta tu repositorio
4. Root Directory: `backend`
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Render crea la URL automáticamente

### Paso 4: Configurar GitHub Actions

Los workflows ya están listos en `.github/workflows/`:

- **deploy-api.yml**: Se ejecuta cuando cambios en `backend/`
- **deploy-frontend.yml**: Se ejecuta cuando cambios en `web/`

Automáticamente:
- ✅ Instala dependencias
- ✅ Compila/valida el código
- ✅ Despliega a GitHub Pages
- ✅ Notifica cambios

### Paso 5: Usar en el Frontend

En el archivo `web/index.html`, ingresa la URL de tu API desplegada:

```
URL de la API: https://tu-api-backend.railway.app
```

O para desarrollo local:
```
URL de la API: http://localhost:3000
```

## 🔧 Configurar Variables de Entorno

### Para Node.js

Crea archivo `backend/.env`:

```
PORT=3000
NODE_ENV=production
```

### Para GitHub Actions

Ve a **Settings → Secrets and variables → Actions** y agrega:

```
VERCEL_TOKEN = tu-token-vercel
RAILWAY_TOKEN = tu-token-railway
```

## 📦 Datos de Prueba

La API viene con 4 personas precargadas:

| ID | Nombre | Apellido | Email | Edad |
|----|--------|----------|-------|------|
| 1 | Juan | Pérez | juan.perez@example.com | 30 |
| 2 | María | García | maria.garcia@example.com | 28 |
| 3 | Carlos | López | carlos.lopez@example.com | 35 |
| 4 | Ana | Martínez | ana.martinez@example.com | 26 |

## 🚨 Solución de Problemas

### "No se puede conectar a la API"

1. Verifica que el servidor está ejecutándose
2. Verifica que la URL es correcta en el formulario
3. Abre la consola del navegador (F12) para ver errores
4. Revisa que CORS esté habilitado

### "GitHub Actions no ejecuta"

1. Verifica que los archivos están en `.github/workflows/`
2. Ve a Actions en tu repositorio para ver el log
3. Asegúrate de que los cambios estén en la rama `main`

### "Puerto 3000/5265 ya está en uso"

```bash
# Node.js con puerto diferente
PORT=8000 npm start

# .NET Core con puerto diferente
dotnet run --urls "http://localhost:5266"
```

### "Errores de CORS"

Asegúrate de que la API tenga CORS habilitado:

**Node.js:**
```javascript
import cors from 'cors';
app.use(cors());
```

**.NET Core:**
```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
app.UseCors("AllowAll");
```

## 📊 Stack Tecnológico

### Frontend
- HTML5
- CSS3 (Responsive)
- JavaScript Vanilla (ES6+)
- Fetch API
- Local Storage

### Backend - Opción 1: Node.js
- Express.js
- CORS
- Node.js 18+

### Backend - Opción 2: ASP.NET Core
- ASP.NET Core 10
- C#
- Swagger/OpenAPI

### DevOps
- GitHub Pages (hosting frontend)
- GitHub Actions (CI/CD)
- Railway / Render / Vercel (hosting backend)
- Docker (opcional)

## 🚀 Flujo de Despliegue

```
1. Push a main
      ↓
2. GitHub Actions se activa
      ↓
3. Frontend: npm install, build, deploy a Pages
      ↓
4. Backend: npm install, test, deploy a Vercel/Railway
      ↓
5. URLs actualizadas automáticamente
      ↓
6. ✅ En vivo en GitHub Pages
```

## 📖 Guía Rápida de Despliegue

```bash
# 1. Clonar repo
git clone https://github.com/tu-usuario/Ejemplos_gitpages.git
cd Ejemplos_gitpages

# 2. Probar localmente
cd backend
npm install
npm start
# En otra terminal: abre web/index.html

# 3. Push a GitHub (activa Actions automáticamente)
git add .
git commit -m "feat: agregar solución de personas"
git push origin main

# 4. Esperar a que Actions finalice (ver en Actions tab)

# 5. Acceder a GitHub Pages
# https://tu-usuario.github.io/Ejemplos_gitpages/

# 6. Configurar URL del backend en el frontend
```

## 🔐 Seguridad (Para Producción)

- [ ] Implementar autenticación JWT
- [ ] Validar entrada de datos
- [ ] Usar HTTPS
- [ ] Limitar tasa de solicitudes (Rate Limiting)
- [ ] Implementar base de datos persistente
- [ ] Usar variables de entorno para secretos
- [ ] Sanitizar datos de entrada
- [ ] Implementar logging

## 📚 Recursos Útiles

- [Express.js Docs](https://expressjs.com/)
- [ASP.NET Core Docs](https://learn.microsoft.com/dotnet/core/)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://github.com/features/actions)
- [Railway Docs](https://docs.railway.app/)
- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)

## 👨‍💻 Desarrollo

### Agregar un endpoint nuevo

**Node.js:**
```javascript
app.post('/api/personas', (req, res) => {
    // Tu código aquí
});
```

**.NET Core:**
```csharp
[HttpPost]
public ActionResult<PersonaDto> Crear(PersonaDto personaDto)
{
    // Tu código aquí
}
```

### Actualizar el frontend

Edita `web/index.html` y realiza commit:
```bash
git add web/index.html
git commit -m "feat: mejorar interfaz"
git push
```

GitHub Actions desplegará automáticamente.

## 📄 Licencia

Proyecto educativo - UTN FRP TUP

---

**¿Necesitas ayuda?**

1. Consulta la documentación anterior
2. Revisa los logs de GitHub Actions
3. Abre una issue en el repositorio
4. Contacta al instructor

**URLs útiles:**
- 🌐 Frontend: `https://tu-usuario.github.io/Ejemplos_gitpages/`
- 🔧 API: `https://tu-api.railway.app/api/personas`
- 📊 Actions: `https://github.com/tu-usuario/Ejemplos_gitpages/actions`
