# 使用官方的Node.js 18映像
FROM node:18

# 設定工作目錄
WORKDIR /app

# 複製package.json和package-lock.json文件
COPY package*.json ./

# 安裝依賴項
RUN npm install

# 複製所有文件到工作目錄
COPY . .

# 暴露應用程式端口
EXPOSE 8888

# 設定環境變量來指定Vite使用的端口
ENV PORT 8888

# 構建應用程式
RUN npm run build

# 安裝serve包來運行應用程式
RUN npm install -g serve

# 定義應用程式啟動命令
CMD ["serve", "-s", "dist", "-l", "8888"]
