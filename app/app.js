"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

// 라우팅 파일 가져오기(index.js)
const home = require("./src/routes/home");

// 앱 세팅(ejs 사용)
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들 웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);

module.exports = app;