# Используем официальный образ Node.js с Bun
FROM oven/bun:1 

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и bun.lockb
COPY package.json bun.lockb ./

# Устанавливаем зависимости
RUN bun install

# Копируем все файлы проекта в контейнер
COPY . .

# Открываем порт, на котором будет работать сервер
EXPOSE 3000

# Запускаем сервер
CMD ["bun", "run", "index.ts"]
