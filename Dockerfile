# 1. Build frontend
FROM node:20 AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# 2. Build backend
FROM python:3.11-slim AS backend
WORKDIR /app/backend
COPY backend/requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt
COPY backend/ ./

# 3. Final image
FROM python:3.11-slim
WORKDIR /app
COPY --from=backend /app/backend /app/backend
COPY --from=frontend /app/frontend/dist /app/backend/static

ENV PYTHONUNBUFFERED=1

CMD cd backend && python manage.py migrate && python manage.py collectstatic --noinput && gunicorn website.wsgi:application --bind 0.0.0.0:$PORT
