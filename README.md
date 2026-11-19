# AI 창작 따라하기

AIEDAP 마스터교원 신규 연수 「AI와 함께하는 교과 혁신: 최신 기술 체험과 적용 실습」(영역1 모듈2)에서 연수에 참여한 선생님들이 강사 화면을 보며 단계별로 따라 하는 웹 페이지입니다.

- **01 이미지 생성 AI**: Quick, Draw!, 잡음 → 그림 데모, Say What You See
- **02 음악 생성 AI**: Blob Opera, Play a Kandinsky, Gemini 음악 생성, Canva에 음악 넣기
- **03 글쓰기 AI**: 다음 토큰 고르기 체험
- **실습: 30초 미래 뉴스**: 대본·자막 → AI Studio TTS 내레이션 → Claude 모션 그래픽 → 편집

체크한 단계와 입력한 내용은 각자의 브라우저에만 저장됩니다.

## 연수생 화면 / 강사 화면

위쪽 **📚 연수생 · 👨‍🏫 강사** 버튼으로 화면을 바꿉니다.

- **연수생 화면** (기본 주소): 단계 체크리스트와 진행 막대, 실습 링크만 보입니다.
- **강사 화면** (`주소?role=instructor`, 비밀번호 기본값 `1234`)
  - 점선 상자의 **강사 메모**(진행 순서·발문·주의점). 화면에 띄울 때는 **강사 메모 숨기기**로 감출 수 있습니다.
  - 활동 **타이머** 버튼
  - Say What You See **정답 프롬프트** 공개
  - **📱 참여 QR**: 연수생 화면 주소를 QR로 크게 띄웁니다.
- 비밀번호는 `index.html` 아래쪽 스크립트의 `INSTRUCTOR_PW`에서 바꿉니다. 정적 페이지라 소스 보기로 알 수 있는 가벼운 잠금입니다.
- 강사 메모를 고치려면 `index.html`에서 `class="tnote only-t"` 상자를 찾아 바꾸면 됩니다. 어떤 요소든 `only-t`를 붙이면 강사 화면에만, `only-s`를 붙이면 연수생 화면에만 보입니다.

## 폴더 구성

```
index.html   페이지 전체 (HTML·CSS·JS 한 파일)
img/         페이지에 쓰는 이미지
assets/      QR 생성 라이브러리(qrcode.js, MIT)
README.md    이 설명
```

별도 빌드 과정이 없습니다. `index.html`을 브라우저로 열면 바로 동작합니다.

## GitHub Pages로 공개하기

1. GitHub에서 새 저장소를 만듭니다.
2. 저장소 화면에서 **Add file → Upload files**를 누르고, `index.html`, `README.md`, `img`·`assets` 폴더를 한꺼번에 끌어다 놓은 뒤 **Commit changes**를 누릅니다.
3. **Settings → Pages**에서 Source를 **Deploy from a branch**, Branch를 **main / (root)** 로 고르고 **Save**를 누릅니다.
4. 1~2분 뒤 `https://<사용자이름>.github.io/<저장소이름>/` 주소로 열 수 있습니다.

## 고칠 때

- 문구·단계는 `index.html`에서 찾아 바꾸면 됩니다.
- 이미지를 바꿀 때는 `img/` 안의 같은 이름 파일을 덮어쓰면 됩니다.
- 글꼴은 Google Fonts(Do Hyeon, Noto Sans KR, IBM Plex Mono)에서 불러옵니다.
