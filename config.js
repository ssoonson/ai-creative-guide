/* ================================================================
   AI 창작 따라하기 — 설정 파일 (이 파일만 고치면 됩니다)
   ⚠ 이 파일은 누구나 볼 수 있습니다. 비밀번호·이메일은 절대 적지 마세요.
     강사 비밀번호는 Firebase Authentication에만 저장됩니다.
   ================================================================ */
window.APP_CONFIG = {
  // ① Firebase 설정값
  //    Firebase 콘솔 > 프로젝트 설정(톱니바퀴) > 일반 > 내 앱 > "SDK 설정 및 구성" > "구성(Config)"의
  //    { apiKey: ..., authDomain: ..., ... } 덩어리를 아래 null 자리에 그대로 붙여 넣으세요.
  //    (apiKey는 비밀값이 아니라 프로젝트 식별용입니다. 보안은 firestore.rules가 담당합니다.)
  //    null 로 두면 "체험 모드"로 동작합니다(같은 브라우저의 탭끼리만 동기화).
  //    지금은 AIEDAP 모듈5 웹앱과 같은 프로젝트(aiedap-ce609)를 함께 씁니다.
  //    → 규칙은 firestore.rules(두 앱을 합친 파일) 전체를 콘솔에 게시해야 합니다.
  firebase: {
    apiKey: "AIzaSyAAl37A7vGU0xU1eKhR3Juh2B65JP6DGOY",
    authDomain: "aiedap-ce609.firebaseapp.com",
    projectId: "aiedap-ce609",
    storageBucket: "aiedap-ce609.firebasestorage.app",
    messagingSenderId: "39423744530",
    appId: "1:39423744530:web:2a6be6a6ac5d1bd8bf56cb"
  },

  // ② 기본 차수 코드 (주소 뒤에 ?room=코드 를 붙이면 차수를 나눠 운영할 수 있어요)
  defaultRoom: "creative"
};
