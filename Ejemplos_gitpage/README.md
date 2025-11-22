# 🚀 Solución de Gestión de Personas - ASP.NET Core 10

Una solución completa con una **API REST CRUD** en ASP.NET Core 10 y una **interfaz web** servida por GitHub Pages.

## 📋 Estructura del Proyecto

```
Ejemplos_gitpage/
├── PersonasAPI/              # API REST en ASP.NET Core 10
│   ├── Controllers/          # Controladores
│   │   └── PersonasController.cs
│   ├── DTOs/                 # Data Transfer Objects
│   │   └── PersonaDto.cs
│   ├── Services/             # Servicios de negocio
│   │   └── PersonaService.cs
│   ├── Dockerfile            # Para despliegue en Docker
│   ├── runtime.txt           # Configuración de runtime
│   └── PersonasAPI.csproj    # Proyecto
└── web/                      # Frontend estático para GitHub Pages
    └── index.html            # Interfaz web
```

## 🎯 Características

✅ **CRUD Completo**: Create, Read, Update, Delete personas  
✅ **API REST**: Endpoints JSON bien documentados  
✅ **Frontend Interactivo**: Interfaz web moderna con búsqueda de API configurable  
✅ **Datos en Memoria**: 4 personas de prueba precargadas  
✅ **Swagger/OpenAPI**: Documentación interactiva de la API  
✅ **CORS Habilitado**: Para acceso desde GitHub Pages  

## 🛠️ Desarrollo Local

### Requisitos
- .NET Core 10 SDK
- Visual Studio Code o Visual Studio

### Ejecutar la API localmente

```bash
cd PersonasAPI
dotnet restore
dotnet run
```

La API estará disponible en: `http://localhost:5265`

### Acceder a la interfaz web

1. Abre el archivo `web/index.html` en el navegador
2. Configura la URL de la API: `http://localhost:5265`
3. Haz clic en "Probar Conexión"

## 📡 Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/personas` | Obtener todas las personas |
| GET | `/api/personas/{id}` | Obtener persona por ID |
| POST | `/api/personas` | Crear nueva persona |
| PUT | `/api/personas/{id}` | Actualizar persona |
| DELETE | `/api/personas/{id}` | Eliminar persona |
| GET | `/swagger/index.html` | Documentación Swagger |

### Ejemplo de solicitud POST

```bash
curl -X POST http://localhost:5265/api/personas \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Carlos",
    "apellido": "López",
    "email": "carlos@example.com",
    "edad": 35
  }'
```

## 🌐 Despliegue en GitHub Pages + Railway/Render

### Opción 1: Desplegar la API en Railway (Recomendado)

1. **Crea una cuenta en Railway**
   - Ve a https://railway.app
   - Regístrate con GitHub

2. **Conecta tu repositorio**
   - En Railway: New Project → Deploy from GitHub
   - Selecciona el repositorio `Ejemplos_gitpages`

3. **Configura la compilación**
   - Root Directory: `PersonasAPI`
   - Runtime: Detect automatically (railway detectará .NET)

4. **Obtén la URL**
   - Railway generará una URL como: `https://tu-proyecto.up.railway.app`
   - Copia esta URL

5. **Actualiza el frontend**
   - En el navegador, ve a: `https://tu-usuario.github.io/Ejemplos_gitpages/web/`
   - Configura la URL de la API con la URL de Railway

### Opción 2: Desplegar en Render

1. **Crea una cuenta en Render**
   - Ve a https://render.com
   - Conecta con GitHub

2. **Crea un nuevo Web Service**
   - New Web Service
   - Conecta tu repositorio
   - Root Directory: `PersonasAPI`
   - Build Command: `dotnet publish -c Release -o /etc/render/output`
   - Start Command: `dotnet PersonasAPI.dll`

3. **Obtén la URL del servicio**
   - Render asignará una URL automáticamente

### Opción 3: Desplegar en Vercel (con contenedor)

1. Sube el proyecto a GitHub
2. Ve a https://vercel.com
3. Importa el repositorio
4. En settings, configura la raíz como `PersonasAPI`
5. Vercel detectará y desplegará automáticamente

## ✅ Configurar GitHub Pages

1. **Estructura del repositorio**
   ```
   Ejemplos_gitpages/
   ├── web/                  ← Contenido de GitHub Pages
   │   └── index.html
   ├── PersonasAPI/
   └── README.md
   ```

2. **Activa GitHub Pages**
   - Ve a Settings → Pages
   - Branch: `main`
   - Carpeta: `/web`
   - Guarda

3. **Accede a tu sitio**
   - `https://tu-usuario.github.io/Ejemplos_gitpages/`

## 🔧 Agregar CORS a la API

Si necesitas agregar CORS para acceso desde otros dominios, edita `Program.cs`:

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

// En el pipeline:
app.UseCors("AllowAll");
```

## 📦 Datos de Prueba

La API viene con 4 personas precargadas:

1. **Juan Pérez** - juan.perez@example.com - 30 años
2. **María García** - maria.garcia@example.com - 28 años
3. **Carlos López** - carlos.lopez@example.com - 35 años
4. **Ana Martínez** - ana.martinez@example.com - 26 años

## 🚨 Solución de Problemas

### "No se puede conectar a la API"
- Verifica que la API está ejecutándose
- Verifica que la URL es correcta en el formulario
- Revisa la consola del navegador (F12) para errores CORS

### "Error al cargar personas"
- Revisa el estado de la API
- Abre `/api/personas` directamente en el navegador
- Verifica que no haya errores en la consola

### "Puerto 5265 ya está en uso"
```bash
# Busca qué proceso usa el puerto
netstat -ano | findstr :5265

# O usa un puerto diferente
dotnet run --urls "http://localhost:5266"
```

## 📝 Variables de Entorno

Para despliegue en producción, puedes configurar:

```
ASPNETCORE_URLS=http://+:8080
ASPNETCORE_ENVIRONMENT=Production
```

## 🔐 Seguridad (Para Producción)

- Implementar autenticación JWT
- Validar entrada de datos
- Usar HTTPS
- Limitar tasa de solicitudes (Rate Limiting)
- Implementar base de datos persistente (SQL Server, PostgreSQL)

## 📚 Tecnologías Utilizadas

- **Backend**: ASP.NET Core 10, C#
- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Hosting API**: Railway / Render / Vercel
- **Hosting Frontend**: GitHub Pages
- **API Docs**: Swagger/OpenAPI

## 👨‍💻 Desarrollo

Estructura MVC + DTO:
- **Controllers**: Manejan solicitudes HTTP
- **Services**: Lógica de negocio
- **DTOs**: Transferencia de datos
- **Program.cs**: Configuración de inyección de dependencias

## 📖 Recursos

- [ASP.NET Core Docs](https://learn.microsoft.com/dotnet/core/)
- [Railway Docs](https://docs.railway.app/)
- [Render Docs](https://render.com/docs)
- [GitHub Pages Docs](https://pages.github.com/)

## 📄 Licencia

Proyecto educativo - UTN FRP TUP

---

**¿Necesitas ayuda?** Revisa la documentación de Swagger en `/swagger/index.html` cuando la API está ejecutándose.
