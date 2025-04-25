# Node.jsの公式イメージを使用
FROM node:22-bullseye

# アプリケーションの作業ディレクトリを指定
WORKDIR /app

# パッケージをインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# TypeScriptのコンパイルとアプリケーションの起動
RUN npm run build
CMD ["npm", "run", "start:dev"]

EXPOSE 3000
