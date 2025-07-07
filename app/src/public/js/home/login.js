"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (!psword.value) return alert("비밀번호를 입력해주십시오.");

  // req 객체에 id, pwword 값 담기
  const req = {
    id: id.value,
    psword: psword.value
  };

  // req 데이터 전달, 프론트에서 서버로 요청
  fetch("/login", {
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
        location.href = "/";
      }
      else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}