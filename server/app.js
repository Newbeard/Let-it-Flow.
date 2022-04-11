require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const { Event, User } = require('./db/models')
const axios = require('axios');
const CronJob = require('cron').CronJob
const fileUpload = require('express-fileupload');

const app = express();

//* Импорт роутов
const indexRouter = require('./routes/index.routes');
const cartRouter = require('./routes/cart.routes');
const categoryRoutes = require('./routes/category.routes');
const bouquetsRouter = require('./routes/bouquets.routes');
const orderRouter = require('./routes/order.routes');
// const cardRouter = require('./routes/card.routes');
const { job } = require('cron');

//* config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

const corsConfig = {
  // origin: true,
  origin: ['http://localhost:3000', 'https://let-it-flow-project.herokuapp.com/'],
  credentials: true,
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

//* use routes
app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/categories', categoryRoutes);
app.use('/bouquets', bouquetsRouter);
app.use('/order', orderRouter);
// app.use('/card', cardRouter);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler

//* Функция для 
// let bob = new CronJob('* * * * * *', () => console.log(123123123), null, true, 'America/Los_Angeles')
// bob.start()

// //* Функция для проверки событий и отправки смс
// setInterval(SMS, 20000)

async function SMS() {
  const dateEvent = await Event.findAll()
  // console.log(dateEvent[0].user_id);
  // console.log(dateEvent[0].title);
  // console.log(dateEvent[0].date);
  // console.log(dateEvent[0].user_id);
  const day = new Date()
  // console.log(dateEvent[2].user_id);
  for (let i = 0; i < dateEvent.length; i++) {
    const day = new Date();
    const tomorrow = new Date(day.setDate(day.getDate()));
    // if(new Date() < new Date(dateEvent[i].date) && new Date(day.setDate(day.getDate() + 1)) >= new Date(dateEvent[i].date)){
      if(new Date(tomorrow.setHours(0,0,0,0)) < new Date(dateEvent[i].date) && new Date(day.setDate(day.getDate() + 1)) >= new Date(dateEvent[i].date)){

      const user = await User.findOne({ where: { id: dateEvent[i].user_id }})
      console.log(Number(user.phone));
      const url = 'https://jiva108jiva@gmail.com:muCc3bNoPXqnFd1fGAUYtyiYzCB@gate.smsaero.ru/v2/sms/send'
      user.isActiveDelivery = true
      axios({
        method: 'POST',
        url: 'https://jiva108jiva@gmail.com:muCc3bNoPXqnFd1fGAUYtyiYzCB@gate.smsaero.ru/v2/sms/send/',
        data: {
          number: Number(user.phone),
          text: `Привет, ты не забыл про ${dateEvent[i].title}? Можешь выбрать подходящий букет на нашем сайте.`,
          sign: 'SMS Aero'
        }
      })
      
      .then(res => console.log(res))
      .then(res => res.json())
    }
  }
  // console.log(new Date() < new Date(date[1].date) && new Date(day.setDate(day.getDate() + 2)) >= new Date(date[1].date));
  // console.log(day.getDate());
  // console.log(day.setDate(day.getDate() + 2));
  // console.log(new Date(day.setDate(day.getDate() + 5))); 
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
