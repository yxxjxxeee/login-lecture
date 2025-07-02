"use strict";

const { reduce } = require("async");

class UserStorage {
  // #은 변수를 은닉화
  static #users = {
    id: ['a', 'b', 'c', 'd'],
    psword: ['1234', '5678', '4321', '8765']
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    console.log(newUsers);
    return newUsers;
  }
}

module.exports = UserStorage;