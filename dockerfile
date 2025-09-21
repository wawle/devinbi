# -------------------
# 1. Build stage
# -------------------
    FROM node:23 AS builder

    WORKDIR /app
    
    # Sadece package.json ve lock dosyalarını kopyala (cache için)
    COPY package*.json ./
    
    # Prod bağımlılıklarını yükle
    RUN npm install --legacy-peer-deps
    
    # Kodun geri kalanını kopyala
    COPY . .
    
    # Build al
    RUN npm run build
    
    # -------------------
    # 2. Runner stage
    # -------------------
    FROM node:23-slim AS runner
    
    WORKDIR /app
    
    ENV NODE_ENV=production
    
    # Sadece gerekli dosyaları kopyala
    COPY --from=builder /app/package*.json ./
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    
    # Next.js runtime portunu set et
    EXPOSE 3000
    
    # Start komutu (3000 portu ile)
    CMD ["npx", "next", "start", "-p", "3000"]
    