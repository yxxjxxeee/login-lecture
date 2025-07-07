// 컨트롤러
"use strict";

const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "홈 화면으로 이동"`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`GET /login 200 "로그인 화면으로 이동"`);
    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
    res.render("home/register");
  }
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const responce = await user.login();
    if (responce.err)
      logger.error(`POST /login 200 Response: "success: ${responce.success}, ${responce.err}"`);
    else
      logger.info(`POST /login 200 Response: "success: ${responce.success}, msg: ${responce.msg}"`);
    return res.json(responce);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const responce = await user.register();
    if (responce.err)
      logger.error(`POST /login 200 Response: "success: ${responce.success}, ${responce.err}"`);
    else
      logger.info(`POST /login 200 Response: "success: ${responce.success}, msg: ${responce.msg}"`);
    return res.json(responce);
  }
};

module.exports = {
  output,
  process
};