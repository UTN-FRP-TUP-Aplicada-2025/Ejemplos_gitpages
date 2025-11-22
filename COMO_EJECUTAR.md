# Cómo ejecutar la API Personas

## ⚠️ Aclaración importante

**GitHub Pages solo sirve contenido estático (HTML, CSS, JS)**. No puede ejecutar aplicaciones .NET Server-side.

Por eso:
- ❌ `https://utn-frp-tup-aplicada-2025.github.io/Ejemplos_git_codespaces/swagger` **NO funcionará**
- ✅ La página de GitHub Pages es solo **documentación e información**

---

## ✅ Formas CORRECTAS de ejecutar la API

### Opción 1: Docker (Recomendado - Más fácil)

```bash
docker run -d -p 5000:80 ghcr.io/UTN-FRP-TUP-Aplicada-2025/Ejemplos_git_codespaces/api:latest
```

Luego accede a:
- **API**: http://localhost:5000/api/personas
- **Swagger UI**: http://localhost:5000/swagger

---

### Opción 2: Localmente con .NET CLI

```bash
cd Ejemplos_codespaces/Ejemplo_API_Web
dotnet run
```

Luego accede a:
- **API**: http://localhost:5265/api/personas
- **Swagger UI**: http://localhost:5265/swagger

---

### Opción 3: Desde Codespaces

En tu máquina virtual (GitHub Codespaces) que ya está corriendo:

```bash
cd /workspaces/Ejemplos_git_codespaces/Ejemplos_codespaces/Ejemplo_API_Web
dotnet run
```

Luego VS Code te mostrará un popup para "abrir en navegador" o visita:
- http://localhost:5265/api/personas

---

## 🐳 Workflow de GitHub Actions

El workflow automático:

1. ✅ En cada `push` a `main`
2. ✅ Compila el proyecto .NET 8.0
3. ✅ Ejecuta tests
4. ✅ Publica la aplicación
5. ✅ **Construye imagen Docker**
6. ✅ **Sube a GitHub Container Registry (GHCR)**
7. ✅ Genera página estática en GitHub Pages

Verifica el status en: https://github.com/UTN-FRP-TUP-Aplicada-2025/Ejemplos_git_codespaces/actions

---

## 📊 Endpoints de la API

```
GET     /api/personas           - Obtener todas las personas
GET     /api/personas/{id}      - Obtener persona por ID
POST    /api/personas           - Crear nueva persona
PUT     /api/personas/{id}      - Actualizar persona
DELETE  /api/personas/{id}      - Eliminar persona
```

---

## 🧪 Probar la API

### Con curl:
```bash
curl http://localhost:5000/api/personas
```

### Con Swagger UI (interfaz web):
```
http://localhost:5000/swagger
```

### Con PowerShell:
```powershell
Invoke-WebRequest -Uri "http://localhost:5000/api/personas"
```

---

## 📦 Docker en detalle

El workflow genera una imagen Docker que contiene toda la aplicación compilada.

### Verificar que la imagen esté disponible:
```bash
docker images | grep api
```

### Descargar la última versión:
```bash
docker pull ghcr.io/UTN-FRP-TUP-Aplicada-2025/Ejemplos_git_codespaces/api:latest
```

### Ver logs del contenedor:
```bash
docker logs <container-id>
```

---

## ❓ Preguntas frecuentes

**P: ¿Por qué GitHub Pages da 404 en /swagger?**
R: Porque GitHub Pages es estático. Solo sirve HTML/CSS/JS. No puede ejecutar servidores .NET.

**P: ¿Cómo ejecuto la API en producción?**
R: Usa Docker: `docker run -p 5000:80 ghcr.io/UTN-FRP-TUP-Aplicada-2025/Ejemplos_git_codespaces/api:latest`

**P: ¿Qué es GHCR?**
R: GitHub Container Registry. Un servicio donde se guardan imágenes Docker.

**P: ¿Se compila automáticamente?**
R: Sí, en cada `push` a `main`. Revisa la pestaña Actions en GitHub.

---

## 🎯 Resumen

| Tarea | Comando |
|-------|---------|
| Correr localmente | `dotnet run` |
| Correr con Docker | `docker run -p 5000:80 ghcr.io/...` |
| Ver documentación | GitHub Pages (solo info) |
| Ver API funcionando | Docker o local |
| Ver Swagger UI | http://localhost:5000/swagger |

¡Espero que quede claro! 🎉
