const { Event } = require('../db/models');


const eventPost = async (req, res) => {
  try {
    const { date, title, user_id } = req.body;
    // const newDate = new Date(date.getTime() + 10800000)
    const event = await Event.create({ date, title, user_id });
    return res.json(event)
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

const eventInit = async (req, res) => {
  try {
    const { id } = req.params
    const events = await Event.findAll({
      where: {
        user_id: id,
      }
    });
    return res.json(events)
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

module.exports = { eventPost, eventInit }
