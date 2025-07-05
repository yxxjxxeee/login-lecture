// 컨트롤러
"use strict";

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  }
};

const process = {
   login: async (req, res) => {
    const user = new User(req.body);
    const responce = await user.login();
    return res.json(responce);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const responce = await user.register();
    return res.json(responce);
  }
};

module.exports = {
  output,
  process
};