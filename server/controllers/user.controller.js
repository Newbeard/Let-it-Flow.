const { login, logout, refresh, signup, access } = require('./../service/user.service')

const userRegister = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;
    const userData = await signup(first_name, last_name, email, phone, password);

    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("accessToken", userData.accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    return res.json(userData)
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};


const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await login(email, password);

    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.cookie("accessToken", userData.accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    return res.json(userData)
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};


const userLogout = async (req, res, next) => {
  try {
    // вытаскиваем refresh токен
    const { refreshToken } = req.cookies;
    // передаем в сервис refresh токен
    const token = await logout(refreshToken);
    // в ответе удаляем cookie
    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");
    console.log(refreshToken)
    return res.json(token);

  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};


async function userRefresh(req, res) {
  try {
    // достаем из кук токен
    const { refreshToken } = req.cookies;
    const userData = await refresh(refreshToken);
    // установим рефреш куки
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (error) {
  }
}

async function userAccess(req, res) {
  try {
    // достаем из кук токен
    const { accessToken} = req.cookies;
    const userData = await access(accessToken);
    console.log('1111', userData)
    // установим рефреш куки
    return res.json(userData);
  } catch (error) {
  }
}


module.exports = { userAccess, userRegister, userLogin, userLogout, userRefresh };