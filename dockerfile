# Temel olarak Node.js imajını kullan
FROM node:23

# Çalışma dizinini belirle
WORKDIR /src

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulama çalıştırma komutu
CMD ["npm", "run", "dev"]

# Sunucunun dinleyeceği port
EXPOSE 3000
