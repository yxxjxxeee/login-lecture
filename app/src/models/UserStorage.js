"use strict";

const { reduce } = require("async");

class UserStorage {
  // #은 변수를 은닉화
  static #users = {
    id: ['a', 'b', 'c', 'd'],
    psword: ['1234', '5678', '4321', '8765'],
    name: ['abc', 'def', 'gef']
  };

  static getUsers(...fields) {
    const users = this.#users;

    const newUsers = fields.reduce((newUsers, field) => {
      // newUsers에 field 저장하기
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return {success: true};
  }
}

module.exports = UserStorage;