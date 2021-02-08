const { response } = require("express");

const createUser = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "Registered",
  });
};

const login = async (req, res = response) => {

  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "Login",
    email,
    password,
  });
};

const renewToken = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  createUser,
  login,
  renewToken,
};
