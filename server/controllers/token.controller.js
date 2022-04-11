const jwt = require('jsonwebtoken')
const { Token } = require('../db/models');


const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '60d'})
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '60d'})
  return {
    accessToken,
    refreshToken
  }
}

const saveToken = async (userID, refreshToken) => {
  const tokenData = await Token.findOne({
    where: {
      user_id: userID,
    }
  })

  if(tokenData) {
    tokenData.refresh_tokes = refreshToken;
    return tokenData.save()
  }
  
  const token = await Token.create({
    user_id: userID,
    refresh_tokes: refreshToken,
  })
  
  return token
}

const removeToken = async (refreshToken) => {
  const tokenData = await Token.destroy({
    where: {
      refresh_tokes: refreshToken,
    },
  });
  return tokenData
}


module.exports = { generateTokens, saveToken, removeToken };