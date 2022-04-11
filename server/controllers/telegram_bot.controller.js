require('dotenv').config();
const { Telegraf } = require('telegraf')
const { Order } = require('../db/models')
const {Op} = require('sequelize');


const bot = new Telegraf('5215524973:AAEQA2soYwrljKcAd-iptd97lt2-CcAteEk')
bot.start((ctx) => ctx.reply(`Привет, ${ctx.message.from.first_name}!`))
bot.on('text', async (ctx) => {
const day = new Date();
const tomorrow = new Date(day.setDate(day.getDate() + 1));
const nearestMidnight = new Date(tomorrow.setHours(0,0,0,0));
console.log(nearestMidnight,'завтра с 00:00');
// console.log(new Date(day.setDate(day.getDate())),'сейчас');
console.log(new Date(),'сейчас');

const order = await Order.findAll({ 
  where: {
    delivery_date: {
      // [Op.between]: [(new Date()), nearestMidnight],
      [Op.between]: [new Date(), nearestMidnight],
    } 
  }
})
order.map((order) => ctx.reply(`
Дата доставки: ${(JSON.stringify(order.delivery_date)).slice(1 ,11)}
Время доставки: ${(JSON.stringify(order.delivery_date)).slice(12,17)}
Улица: ${order.delivery_street}
Дом: ${order.delivery_house}
Квартира: ${order.delivery_apartment} `))

})


bot.launch()

