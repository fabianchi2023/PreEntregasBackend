# Dockerfile
FROM node:16
# Crear directorio de trabajo
WORKDIR /app
# Copiar package.json y package-lock.json e instalar dependencias
COPY package*.json ./
RUN npm install
# Copiar el resto de la aplicación
COPY . .
# Exponer el puerto en el contenedor
EXPOSE 8080
# Iniciar la aplicación
CMD ["npm", "start"]
