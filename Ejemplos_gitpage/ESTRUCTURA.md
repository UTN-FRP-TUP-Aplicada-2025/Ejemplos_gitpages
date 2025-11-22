```
Ejemplos_gitpage/                          # Solución Completa
│
├── 📁 .github/workflows/                  # GitHub Actions CI/CD
│   ├── deploy-api.yml                     # Deploy API automático
│   └── deploy-frontend.yml                # Deploy GitHub Pages automático
│
├── 📁 PersonasAPI/                        # Backend ASP.NET Core 10
│   ├── 📁 Controllers/
│   │   └── PersonasController.cs          # Controlador CRUD REST
│   │
│   ├── 📁 DTOs/
│   │   └── PersonaDto.cs                  # Data Transfer Object
│   │
│   ├── 📁 Services/
│   │   └── PersonaService.cs              # Lógica de negocio + datos en memoria
│   │
│   ├── 📁 Properties/
│   │   └── launchSettings.json            # Configuración de inicio
│   │
│   ├── Program.cs                         # Configuración de inyección de dependencias
│   ├── PersonasAPI.csproj                 # Archivo de proyecto
│   ├── Dockerfile                         # Para despliegue en contenedor
│   ├── runtime.txt                        # Configuración de runtime
│   └── .dockerignore                      # Archivos a ignorar en Docker
│
├── 📁 backend/                            # Backend Node.js/Express (alternativa)
│   ├── server.js                          # Servidor Express con CRUD
│   ├── package.json                       # Dependencias Node.js
│   └── README.md                          # Documentación del backend
│
├── 📁 web/                                # Frontend - GitHub Pages
│   ├── index.html                         # Interfaz web interactiva
│   └── config.html                        # Página de configuración de API
│
├── README.md                              # Documentación principal
├── README-GITHUB-ACTIONS.md               # Guía detallada de GitHub Actions
├── INICIO_RAPIDO.md                       # Guía rápida de inicio
├── .gitignore                             # Archivos a ignorar en Git
└── ESTRUCTURA.md                          # Este archivo

═══════════════════════════════════════════════════════════════════════════════

🎯 CARACTERÍSTICAS DEL PROYECTO

1️⃣  CRUD Completo
   • GET    /api/personas           → Obtener todas
   • GET    /api/personas/:id       → Obtener por ID
   • POST   /api/personas           → Crear
   • PUT    /api/personas/:id       → Actualizar
   • DELETE /api/personas/:id       → Eliminar

2️⃣  Frontend Interactivo
   • HTML5 + CSS3 + JavaScript ES6+
   • Responsive (Mobile, Tablet, Desktop)
   • Búsqueda dinámmica de API
   • Validación en cliente
   • Almacenamiento local (localStorage)

3️⃣  Despliegue Automático
   • GitHub Actions para CI/CD
   • Deploy automático a GitHub Pages
   • Deploy a Railway/Render/Vercel
   • Health checks

4️⃣  Dos Opciones de Backend
   • ASP.NET Core 10 (.NET)
   • Node.js/Express (más rápido en desarrollo)

═══════════════════════════════════════════════════════════════════════════════

🚀 FLUJO DE TRABAJO

LOCAL DEVELOPMENT:
┌──────────────────┐
│ npm install      │  Instalar dependencias
└─────────┬────────┘
          │
┌─────────▼────────┐
│ npm start        │  Ejecutar servidor (puerto 3000)
└─────────┬────────┘
          │
┌─────────▼────────────────────────┐
│ Abre web/index.html              │  Frontend en navegador
│ Configura: http://localhost:3000 │
└──────────────────────────────────┘

PRODUCCIÓN CON GITHUB:
┌─────────────┐
│ git push    │  Hacer push a main
└──────┬──────┘
       │
┌──────▼──────────────────────────┐
│ GitHub Actions Triggered        │
│ (Detecta cambios automáticamente)
└──────┬──────────────────────────┘
       │
   ┌───┴─────────────────────────┐
   │                             │
┌──▼─────────────────┐  ┌────────▼─────────────┐
│ Deploy Frontend    │  │ Deploy Backend       │
│ GitHub Pages       │  │ Railway/Render/etc   │
│ ✅ Automático     │  │ ⚠️  Recomendado       │
└────────────────────┘  └─────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

📊 DATOS DE PRUEBA (Precargados)

ID | Nombre   | Apellido  | Email                          | Edad
---|----------|-----------|--------------------------------|------
1  | Juan     | Pérez     | juan.perez@example.com        | 30
2  | María    | García    | maria.garcia@example.com      | 28
3  | Carlos   | López     | carlos.lopez@example.com      | 35
4  | Ana      | Martínez  | ana.martinez@example.com      | 26

═══════════════════════════════════════════════════════════════════════════════

🔧 CONFIGURACIÓN POR AMBIENTE

LOCAL (desarrollo):
├── Backend: http://localhost:3000 (Node.js)
├── Backend alternativo: http://localhost:5265 (.NET)
└── Frontend: file:// o http://localhost:8000

GITHUB PAGES:
├── Frontend: https://tu-usuario.github.io/Ejemplos_gitpages/
└── Config: https://tu-usuario.github.io/Ejemplos_gitpages/web/config.html

PRODUCCIÓN:
├── Frontend: https://tu-usuario.github.io/Ejemplos_gitpages/
└── Backend: https://tu-api.railway.app (u otro servicio)

═══════════════════════════════════════════════════════════════════════════════

📚 ARCHIVOS IMPORTANTES

Program.cs
├── Configuración de servicios (Dependency Injection)
├── Middleware (CORS, Swagger, Controllers)
├── Puerto: 5265 (.NET) o 3000 (Node.js)
└── CORS habilitado

PersonasController.cs / server.js
├── 5 endpoints principales
├── Validaciones básicas
├── Manejo de errores
└── Respuestas JSON

PersonaService.cs
├── Lógica de negocio
├── Lista en memoria (datos volátiles)
├── Métodos CRUD
└── ID autoincrementable

web/index.html
├── Interfaz completa (CRUD visual)
├── Configuración de API dinámica
├── Validación en cliente
└── Manejo de errores con alertas

═══════════════════════════════════════════════════════════════════════════════

🔐 SEGURIDAD (Para producción)

Implementar:
☐ Autenticación JWT
☐ Validación de entrada
☐ HTTPS obligatorio
☐ Rate limiting
☐ Base de datos persistente (SQL, PostgreSQL)
☐ Sanitización de datos
☐ Logging y monitoreo
☐ Backup de datos

═══════════════════════════════════════════════════════════════════════════════

🎓 TECNOLOGÍAS UTILIZADAS

Frontend:
├── HTML5
├── CSS3 (Grid, Flexbox, Gradientes)
└── JavaScript ES6+ (Fetch API, localStorage)

Backend - Opción 1:
├── ASP.NET Core 10
├── C#
├── Swagger/OpenAPI
└── Entity Framework (opcional)

Backend - Opción 2:
├── Node.js 18+
├── Express.js
├── CORS middleware
└── ES Modules

DevOps:
├── GitHub Pages (hosting)
├── GitHub Actions (CI/CD)
├── Docker (containerización)
├── Railway / Render / Vercel (hosting backend)
└── Git (control de versiones)

═══════════════════════════════════════════════════════════════════════════════

✅ CHECKLIST DE DESPLIEGUE

[ ] Clonar repositorio
[ ] Instalar dependencias (npm install)
[ ] Ejecutar localmente (npm start)
[ ] Probar endpoints (http://localhost:3000/api/personas)
[ ] Probar frontend (web/index.html)
[ ] Realizar git push
[ ] Verificar GitHub Actions
[ ] Desplegar backend (Railway/Render)
[ ] Obtener URL del backend
[ ] Actualizar URL en frontend
[ ] Verificar en GitHub Pages
[ ] ✅ ¡En producción!

═══════════════════════════════════════════════════════════════════════════════

📖 RECURSOS

Documentación:
├── README.md                    → Visión general
├── README-GITHUB-ACTIONS.md     → Guía CI/CD
├── INICIO_RAPIDO.md             → Inicio rápido
├── ESTRUCTURA.md                → Este archivo
└── backend/README.md            → Backend específico

Ejemplos:
├── web/index.html               → Frontend completo
├── web/config.html              → Configuración
├── PersonasAPI/Program.cs       → Setup .NET
└── backend/server.js            → Setup Node.js

═══════════════════════════════════════════════════════════════════════════════
```

**Última actualización:** Noviembre 2025
**Versión:** 1.0.0
**Estado:** ✅ Producción lista
