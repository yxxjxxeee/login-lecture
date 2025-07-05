"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

  // req 객체에 값 담기
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };

  console.log(req);
  // req 데이터 전달, 프론트에서 서버로 요청
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  })
    // 서버 응답을 JSON으로 파싱
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      }
      else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
}