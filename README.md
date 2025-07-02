# ParkingSystem


mcp를 활용한 AI 주차 예약 시스템





## 개발 기간


2025-07 ~ 2025-08





## 개발 환경


### 프레임워크

- Backend: FastAPI (Python)
- Server: Uvicorn

### 데이터베이스

- PostgreSQL

### 사용 라이브러리

- SQLAlchemy (ORM)
- Pydantic
- httpx (외부 API 호출)
- python-dotenv (환경변수 관리)
- 나머지는 차차 추가하겠습니다...





## 주요 기능


- 아직 완성 못함...





## 프로젝트 초기 세팅 관련 메모


### 폴더 구조

ParkingSystem/
├── apps
│   ├── users               # 회원 관리 앱 (웅)
│   │   ├── __init__.py
│   │   ├── router.py       # API 라우터
│   │   ├── schemas.py      # Pydantic 스키마
│   │   ├── models.py       # 사용자 DB 모델
│   │   └── service.py      # 비즈니스 로직
│   │
│   ├── crud                # crud 앱 (민)
│   │   ├── __init__.py
│   │   ├── router.py
│   │   ├── schemas.py
│   │   ├── models.py
│   │   └── service.py
│
├── core                    # 공통 설정
│   ├── config.py           # 환경설정 로드
│   └── security.py         # 보안관련 설정 (공통)
│
├── db                      # 공통 데이터베이스 설정
│   ├── base.py             # Base 클래스
│   └── session.py          # DB 세션 관리
│
├── services                # 외부 API 공통 연동 (ex: MCP API)
│   └── mcp.py              # MCP API 호출
│
├── .env                    # 환경변수 공통 사용
├── .gitignore
├── requirements.txt
└── main.py                 # 메인 진입점 (단 하나)

