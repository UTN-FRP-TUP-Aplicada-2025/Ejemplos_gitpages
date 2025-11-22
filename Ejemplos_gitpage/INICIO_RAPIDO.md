# 🚀 Inicio Rápido

## Opción 1: Ejecutar todo localmente (Más rápido)

### 1. Iniciar el backend Node.js

```bash
cd backend
npm install
npm start
```

Verás:
```
✅ API de Personas ejecutándose en puerto 3000
📍 URL: http://localhost:3000
```

### 2. Abrir el frontend

Abre en el navegador: `file:///tu-ruta/web/index.html`

O sirve con un servidor HTTP:
```bash
# PowerShell (Windows)
python -m http.server 8000

# Luego abre: http://localhost:8000/web/
```

### 3. Configurar en el frontend

- URL de la API: `http://localhost:3000`
- Haz clic en "Probar Conexión"

✅ ¡Listo! Comienza a crear personas.

---

## Opción 2: Desplegar en GitHub Pages + GitHub Actions

### 1. Hacer push al repositorio

```bash
git add .
git commit -m "feat: agregar solución de personas"
git push origin main
```

### 2. GitHub Actions se activará automáticamente

- Ve a: `https://github.com/tu-usuario/Ejemplos_gitpages/actions`
- Verás el workflow en ejecución

### 3. Cuando finalice

**Frontend estará en:**
```
https://tu-usuario.github.io/Ejemplos_gitpages/
```

**Backend necesita despliegue separado en:**
- Railway
- Render
- Vercel
- Otro servicio

### 4. Usar en producción

En el frontend, usa la URL del backend desplegado:
```
https://tu-api-backend.railway.app
```

---

## Opción 3: Desplegar solo el backend (.NET Core)

```bash
cd PersonasAPI

# Compilar
dotnet build

# Ejecutar localmente
dotnet run

# O con Docker
docker build -t personas-api .
docker run -p 8080:8080 personas-api
```

---

## 📊 Comparativa

| Aspecto | Local | GitHub Pages | Producción |
|--------|-------|--------------|-----------|
| **Velocidad** | ⚡⚡⚡ Instantáneo | ⚡⚡ Rápido | ⚡ Depende |
| **Costo** | 💰 Gratis | 💰 Gratis | 💰 Gratis (tier) |
| **Setup** | ⚙️ 2 min | ⚙️ 5 min | ⚙️ 15 min |
| **Data** | 🔄 En memoria | 🔄 En memoria | 💾 Base de datos |
| **Disponible 24/7** | ❌ Solo local | ✅ Sí | ✅ Sí |

---

## 🔗 Enlaces Útiles

- 📄 README: Lee `README.md` o `README-GITHUB-ACTIONS.md`
- 🔧 Backend: Consulta `backend/README.md`
- 🎯 API Docs: Abre `/api/personas` en el navegador

---

## ❓ Problemas Comunes

### No se conecta a la API

1. ¿El servidor está ejecutándose?
   ```bash
   curl http://localhost:3000/health
   ```

2. ¿La URL es correcta en el frontend?

3. ¿Abriste la consola del navegador (F12) para ver errores?

### Puerto ya está en uso

```bash
# Node.js
PORT=8000 npm start

# .NET Core
dotnet run --urls "http://localhost:5266"
```

### GitHub Actions no funciona

- Revisa los logs en la tab Actions
- Asegúrate de que los archivos están en las rutas correctas
- Verifica que los cambios están en la rama `main`

---

## 🎓 Próximos Pasos

Cuando todo funcione:

1. ✅ Agregar persistencia (base de datos)
2. ✅ Implementar autenticación
3. ✅ Agregar validación mejorada
4. ✅ Crear unit tests
5. ✅ Documentación Swagger

---

¡Cualquier duda? Consulta la documentación completa en los archivos README.
