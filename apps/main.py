''' main.py: 메인 진입점 파일 (단 하나)
각 팀원이 각자의 파일에서 개발 후, main.py에서만 라우터를 모아서 앱 실행
하나의 파일에 라우터를 모아 놓고 앱을 실행하면 충돌이 줄어듦 '''

from fastapi import FastAPI
from dotenv import load_dotenv
from app.api import users, reservations, parking
from app.db.session import engine
from app.db.base import Base

load_dotenv()

Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Parking Reservation API")

# API 라우터 연결
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(reservations.router, prefix="/reservations", tags=["Reservations"])
app.include_router(parking.router, prefix="/parking", tags=["Parking"])

@app.get("/")
async def root():
    return {"message": "AI Parking Reservation System"}
