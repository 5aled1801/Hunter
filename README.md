# AI Job Hunter — Autonomous Recruitment Platform

An autonomous, multi-agent AI system that discovers job vacancies, matches them with candidate profiles, synthesizes tailored cover letters, submits authorized applications, monitors Gmail recruiter correspondence, and reports through Discord.

---

## 🛠️ Technology Stack

- **Frontend**: Vue 3 (Composition API), TypeScript, Vite, Tailwind CSS, Pinia, Vue Router, Lucide Icons
- **Backend**: Python 3.13, FastAPI, Pydantic v2, SQLAlchemy 2.0 (Async), Alembic
- **Database**: PostgreSQL / SQLite (Local Development)
- **Task Processing**: Redis, Celery / Async Scheduler
- **Browser Automation**: Playwright (Async Python)
- **Deployment**: Docker & Docker Compose

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Python 3.13+
- Node.js 22+
- Git

### 2. Backend Setup
```bash
cd backend
python -m venv .venv
# Windows:
.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env

# Run tests
pytest

# Start backend server
uvicorn backend.app.main:app --reload --port 8000
```
Interactive API documentation will be available at `http://localhost:8000/docs`.

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend development dashboard will be available at `http://localhost:5173`.

---

## 🐳 Docker Deployment
```bash
docker compose up --build
```
