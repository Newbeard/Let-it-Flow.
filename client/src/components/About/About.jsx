import React from 'react';
import './About.css'

function About(props) {
  return (
    <div className="container">
      <div className="about-content">
         <div className="about-content-left">
           <h4>LET IT FLOW</h4>
           <p>- это история о любви к цветам, ко всему прекрасному. Это желание нести эту красоту в массы, сделать ее доступной для каждого. Проект создавался с осознанием того, что стильный красивый букет не обязательно должен стоить дорого.</p>
         </div>
         <div className="about-content-right">
            <img src="http://localhost:4000/img/img_about/about1.jpg" width="600px" height="600px" alt="about-img" />
          </div>
      </div>
      <div className="about-content">
        <div className="about-content-left">
            <img src="http://localhost:4000/img/img_about/2.jpg" width="600px" height="600px" alt="about-img" />
</div>
<div className="about-content-right">
          <h4>Идеальный букет для нас</h4>
          <p>- это свежие цветы отличного качества, собранные профессиональными флористами, бережно упакованные в стильную натуральную упаковку для транспортировки и украшенные декоративными лентами.
Мы постоянно обновляем нашу коллекцию букетов и композиций в зависимости от сезона, находимся в поиске интересных сортов и решений, следуем новейшим флористическим тенденциям!</p>
        </div>
      </div>
     
      <div className="about-content">
        <div className="about-content-left">
          <h4>Наша команда</h4>
          <p>- это союз творческих людей, любящих свое дело. Порушив изначально классическую концепцию букета и собрав её заново в собственном формате, наши флористы раз за разом удивляют заказчиков в Москве и Санкт-Петербурге. Свежие и стильные букеты и композиции, удобная оплата и отлаженная доставка - все это Вы легко найдете на нашем сайте. Мы работаем каждый день, чтобы радовать вас и ваших близких.</p>
        </div>
      
<div className="about-content-right">
            <img src="http://localhost:4000/img/img_about/3.jpg" width="600px" height="600px" alt="about-img" />
</div>
      </div>
   </div>
  );
}

export default About;
