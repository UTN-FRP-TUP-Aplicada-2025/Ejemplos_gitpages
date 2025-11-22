# GitHub Pages Configuration for API Personas

## Configuración realizada:

1. **GitHub Actions Workflow** (`.github/workflows/deploy-api.yml`)
   - Compila el proyecto .NET Core 8.0
   - Ejecuta tests
   - Publica la aplicación
   - Deploy automático a GitHub Pages
   - Construye y sube imagen Docker a GitHub Container Registry

2. **Docker Support**
   - Dockerfile multi-stage para optimización
   - Imagen disponible en: `ghcr.io/tu-usuario/repo/api:latest`

3. **GitHub Pages**
   - URL: `https://tu-usuario.github.io/Ejemplos_git_codespaces/`
   - Rama: `gh-pages` (creada automáticamente por el workflow)
   - Contiene página de índice con documentación

## Configuración recomendada en GitHub:

### 1. Habilitar GitHub Pages
   - Ve a Settings → Pages
   - Selecciona rama `gh-pages` como source
   - Dominio personalizado (opcional): `api.ejemplo.local`

### 2. Permisos de Actions
   - Ve a Settings → Actions → General
   - Asegúrate que "Read and write permissions" esté habilitado

### 3. Secrets (si deseas acceso privado)
   - Settings → Secrets and variables → Actions
   - Agrega si es necesario

## Acceso a la API:

**Opción 1: Docker Localmente**
```bash
docker run -d -p 5000:80 ghcr.io/tu-usuario/Ejemplos_git_codespaces/api:latest
# Accede a: http://localhost:5000/api/personas
```

**Opción 2: GitHub Pages (Documentación estática)**
```
https://tu-usuario.github.io/Ejemplos_git_codespaces/
```

**Opción 3: Página de índice con Swagger**
```
https://tu-usuario.github.io/Ejemplos_git_codespaces/swagger
```

## Próximos pasos:

1. Configura los secrets si necesitas acceso privado
2. Habilita GitHub Pages en tu repositorio
3. El próximo push a `main` disparará el workflow
4. La API estará disponible como imagen Docker

## Monitoreo del Workflow:

- Ve a: Actions → Deploy API to GitHub Pages
- Verifica que todos los jobs pasen (verde ✅)
- Los artifacts estarán disponibles después del deploy
