const { User } = require('../db/models');
const { userObj } = require('./../controllers/userObj.controller')
const { generateTokens, saveToken, removeToken, validateAccessToken, validateRefreshToken, findToken } = require('../service/token.service')
const bcrypt = require('bcrypt')


// Регистрация
async function signup(first_name, last_name, email, phone, password) {
  // ищем пользователя в базе
  const isUserExist = await User.findOne({
    where: { email },
  });
  if (isUserExist) {
    return res.json({ success: false, errors: `Пользователь с ${email} уже зарегистрирован!` });
  }

  const hashPassword = await bcrypt.hash(password, 3);
  const user = await User.create({ first_name, last_name, email, phone, password: hashPassword });

  const userToken = userObj(user)

  const tokens = generateTokens({...userToken}) // получаем jwt

  await saveToken(userToken.id, tokens.refreshToken)
  console.log({
    ...tokens,
    user: userToken,
  })

  return {
    ...tokens,
    user: userToken,
  };
}


// Логин
async function login(email, password) {
  // ищем пользователя в базе
  const user = await User.findOne({
    where: {
      email,
    },
  });

  // если нет, то  ошибка
  if (user === null) {
    return res.json({ success: false, errors: `Пользователь с ${email} не зарегистрирован!` });
  }
  // проверка паролей с бд
  const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ success: false, errors: 'Пароль неверный' });
  }
  // убираем из объекта пароль
  const userToken = userObj(user)

  // генерируем пару токенов
  const tokens = generateTokens({ ...userToken });

  // сохраняем рефреш токены в бд
  await saveToken(userToken.id, tokens.refreshToken);

  return {
    ...tokens,
    user: userToken,
  };
}


// Logout
async function logout(refreshToken) {
  // удаляем токен
  const token = await removeToken(refreshToken);
  return token;
}


async function refresh(refreshToken) {
  // проверяем токен
  // if (!refreshToken) {
  //   // throw ApiError.UnaurhorizedError();
  //   console.log('nooo token')
  // }
  // валидируем (проверяем) токен
  const userData = validateRefreshToken(refreshToken);
  // отправляем токен в функцию, которая найдет его в бд
  const tokenFromDB = await findToken(refreshToken);
  if (!userData || !tokenFromDB) {
    throw Error;
  }

  const currentUser = await User.findOne({
    where: {
      id: userData.id,
    },
  });
  // генерируем новую dto
  const userToken = userObj(currentUser);
  // генерируем пару токенов
  const tokens = generateTokens({ ...userToken });
  // сохраняем рефреш токены в бд
  await saveToken(userToken.id, tokens.refreshToken);
  return {
    ...tokens,
    user: userToken,
  };
}


async function access(accessToken) {
  // проверяем токен
  if (!accessToken) {
    // throw ApiError.UnaurhorizedError();
    return null
  }
  // валидируем (проверяем) токен
  const userData = validateAccessToken(accessToken);
  // отправляем токен в функцию, которая найдет его в бд
  const currentUser = await User.findOne({
    where: {
      email: userData.email,
    },
  });
  
  // генерируем новую dto
  const userToken = userObj(currentUser);
  // генерируем пару токенов

  return {
    user: userToken,
  };
}



module.exports = { login, logout, refresh, signup, access };
