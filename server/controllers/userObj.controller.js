const userObj = (user) => ({
  id: user.id,
  first_name: user.first_name,
  last_name: user.last_name,
  phone: user.phone,
  email: user.email,
  admin: user.admin,
})

module.exports = { userObj }