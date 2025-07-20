# ParkingSystem

mcp를 활용한 AI 주차 예약 시스템
<br><br>
## 개발 기간

2025-07 ~ 2025-08
<br><br><br>
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
<br><br><br>
## 주요 기능

- 아직 완성 못함...
<br><br><br>
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

│   ├── database.py             # Base 클래스

│   └── session.py          # DB 세션 관리

│

├── services                # 외부 API 공통 연동 (ex: MCP API)

│   └── mcp.py              # MCP API 호출

│

├── .env                    # 환경변수 공통 사용

├── .gitignore

├── requirements.txt

└── main.py                 # 메인 진입점 (단 하나)

백엔드 팀원이 각자 독립적인 앱 단위로(users, crud 같은 것) 개발하고, 필수적인 환경설정과 데이터베이스 세팅 같은 것만 공통으로 관리하도록 하는 구조입니다.

### 레포 클론, 명령어 입력 순서

1. git clone https://github.com/parkingSystem1/ParkingSystem.git
2. cd ParkingSystem
3. python -m venv myvenv
4. source myvenv/bin/activate
5. pip install -r requirements.txt

위와 같이 입력하면 팀원이 서로 같은 환경에서 개발 시작이 가능합니다.

### FastAPI 서버 실행 방법

uvicorn app.main:app --reload

위 명령어를 입력하면 서버가 실행이 됩니다. 위에서 설명한 myvenv 가상환경은 내 로컬에서 처음에 프로젝트에 접근할 때 최초 1회만 활성화하면 되고, 그 후로는 따로 활성화할 필요 없이 서버 실행 시 uvicorn app.main:app --reload만 입력하면 됩니다. 만약에 실행이 안 되면 가상환경을 다시 활성화하고 한번 실행해 보세요. uvicorn은 가상환경 관리랑 관계없고, ASGI를 가능하게 해 주는 FastAPI에서 자주 쓰이는 도구? 같은 거라고 합니다. 그리고 가상환경은(myvenv 같은 것) python 패키지 설치 환경을 분리해주는 도구입니다.

### 클론 후 개발 방법

웅 님은 클론 후 users 폴더 내부에서 앱 단위 개발을 시작해 주시면 좋을 것 같습니다. 다만 일부 공통 기능 개발이 필요한 core, db, schemas, services(mcp 연동 시 쓰임) 폴더에 넣을 파일은 같이 상의하면서 작성해야 할 것 같습니다.... 여기 적힌 구조와 내용은 추후 변동 확률 100%....
<br><br><br>
## 브랜치 구조
main

│

├── develop (개발용 공통 브랜치)

│   │

│   ├── feature/users (회원 기능, 웅)

│   │

│   ├── feature/crud (게시판 기능, 민)

│

└── hotfix/urgent-fix (긴급 패치 필요할 때 생성)
<br><br>
우선 팀원은 터미널에 아래 명령어 입력 후 각자의 브랜치에서 개발합니다.

git checkout -b feature/users
<br><br>
작업 후 업로드 시 아래 명령어 순서를 따르면 됩니다.

git add .

git commit -m "(ex)회원 기능 추가"

git push origin feature/users
<br><br>
그 후 GitHub에서 Pull Request 생성하고, feature/users를 develop으로 병합 요청해서 코드 리뷰 후 승인되면 병합하는 방식으로 작업하면 될 것 같습니다.

배포할 때는 develop 브랜치를 main에 병합해서 서비스를 배포하면 끝납니다.









