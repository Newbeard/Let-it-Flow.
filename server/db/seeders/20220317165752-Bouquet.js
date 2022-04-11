'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Bouquets', [
      {
        title: 'Моно 01', description: 'Монобукет в пленке с ранункулюсом', price: '5490', img: '/img/monobuketi/1.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Моно 02', description: 'Монобукет в крафт бумаге с камиллой', price: '5490', img: '/img/monobuketi/2.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 03', description: 'Монобукет в пленке с пионовидной розой', price: '5490', img: '/img/monobuketi/3.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 04', description: 'Монобукет в пленке с пионовидной розой', price: '5490', img: '/img/monobuketi/4.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 05', description: 'Монобукет в пленке с одноголовой розой', price: '5490', img: '/img/monobuketi/5.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 06', description: 'Монобукет с пионовидной кустовой розой', price: '5490', img: '/img/monobuketi/6.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 07', description: 'Монобукет в пленке с пионовидной розой', price: '5490', img: '/img/monobuketi/7.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 08', description: 'Монобукет в крафт бумаге с пионовидной кустовой розой', price: '5490', img: '/img/monobuketi/8.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 09', description: 'Монобукет в пленке с пионовидной розой', price: '5490', img: '/img/monobuketi/9.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 10', description: 'Монобукет в пленке с пионовидной розой', price: '5490', img: '/img/monobuketi/10.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 11', description: 'Монобукет в пленке с одноголовой розой', price: '5490', img: '/img/monobuketi/11.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 12', description: 'Монобукет в крафт бумаге с пионовидной кустовой розой', price: '5490', img: '/img/monobuketi/12.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 13', description: 'Монобукет в крафт бумаге с сиренью', price: '5490', img: '/img/monobuketi/13.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 14', description: 'Монобукет в пленке с пионовидной розой', price: '5490', img: '/img/monobuketi/14.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 15', description: 'Монобукет в крафт бумаге с пионовидным тюльпаном', price: '5490', img: '/img/monobuketi/15.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 16', description: 'Монобукет в пленке с ранункулюсом', price: '5490', img: '/img/monobuketi/16.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 17', description: 'Монобукет в пленке с одноголовой розой', price: '5490', img: '/img/monobuketi/17.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 18', description: 'Монобукет в пленке с пионовидной розой', price: '5490', img: '/img/monobuketi/18.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      },  
      {
        title: 'Моно 19', description: 'Монобукет в пленке с пионовидной розой', price: '6190', img: '/img/monobuketi/19.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      }, 
      {
        title: 'Моно 20', description: 'Монобукет в крафт бумаге с пионовидным тюльпаном', price: '10590', img: '/img/monobuketi/20.webp', category_id: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Композиция №1', description: 'букет в пленке с анемоном и краспедией', price: '4790', img: '/img/koposition/3b72a6e032dba3d287e22f49e5b9518a.webp', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Композиция №2', description: 'букет в пленке с анемоном и краспедией', price: '4790', img: '/img/koposition/6acd0e5c6f2a649919434ed4a36f94e2.webp', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Композиция №3', description: 'букет в пленке с анемоном и краспедией', price: '4790', img: '/img/koposition/19be66f622d67982e1f90a46569bcdb5.webp', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Композиция №4', description: 'букет в пленке с анемоном и краспедией', price: '4790', img: '/img/koposition/23ed1557ccc1ea15bc742bffdebfd45b.webp', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Композиция №5', description: 'букет в пленке с анемоном и краспедией', price: '4790', img: '/img/koposition/202d765f178ffba62aa23de877fa925c.webp', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Композиция №6', description: 'букет в пленке с анемоном и краспедией', price: '4790', img: '/img/koposition/55958571cae6c2354a0daeca3e9a7a23.webp', category_id: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №1', description: 'букет в пленке с анемоном и краспедией', price: '4790', img: '/img/avtorskie_buketi/61ed2454ec3f7144a845399e7f1333fb.webp', category_id: '5', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №2', description: 'букет в крафт бумаге с сукулентом и кустовой розой', price: '6990', img: '/img/avtorskie_buketi/84b36e2ae650d19018066ff650b9be78.webp', category_id: '5', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №3', description: 'букет в пленке с хлопком и пионовидной розой', price: '8390', img: '/img/avtorskie_buketi/03486cd42c4ab9e361e66ce54450309d.webp', category_id: '5', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет №4', description: 'букет в пленке с хлопком и пионовидной розой', price: '8390', img: '/img/avtorskie_buketi/f0acfceb686267daefd8945b87110aba.webp', category_id: '5', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №8', description: 'букет с лентами с пионовидной кустовой розой', price: '8390', img: '/img/byket_nevesti/1cdae7638ddfde21c99e4421df399db5.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №4', description: 'букет с лентами пионовидной розой и астильбой', price: '9690', img: '/img/byket_nevesti/64ca7838087c0ff999612795a9675bf3.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №25', description: 'букет с лентами с георгином и пионовидной розой', price: '15960', img: '/img/byket_nevesti/74969a11c68aa606dfe7eebff8fa65ad.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №26', description: 'букет с лентами с георгином и пионовидной розой', price: '15960', img: '/img/byket_nevesti/a84374d005ffefc380f0503af69b46d4.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №27', description: 'букет с лентами с георгином и пионовидной розой', price: '15960', img: '/img/byket_nevesti/a84374d005ffefc380f0503af69b46d4.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №98', description: 'букет с лентами с георгином и пионовидной розой', price: '15960', img: '/img/byket_nevesti/df74ba7b231edaf4ba672c096ffffa84.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Букет невесты №55', description: 'букет с лентами с георгином и пионовидной розой', price: '15960', img: '/img/byket_nevesti/e953176d5632b52df29192445d1a3c3a.webp', category_id: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наборы для вазы №66', description: 'Набор для сборки с тюльпаном и нарциссом', price: '15960', img: '/img/nabor_dlya_vazi/8eb622a6256a32317253f1abd52c3ee8.webp', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'Наборы для вазы №39', description: 'Набор для сборки', price: '15960', img: '/img/nabor_dlya_vazi/f057dd6a254f2cd2ceb38e07b5f60b48.jpeg', category_id: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'ФИКУС ЭЛАСТИКА МЕЛАНИ', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/0fbe974b19a054e5518bd522f36a0183.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'САНСЕВИЕРИЯ МУНШАЙН', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/1ba191283cf7b74ba777e64398a99fa7.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'ПАХИРА АКВАТИКА', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/4c103ab3d5f874e80f9b7eae3b15ce5b.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'САНСЕВИЕРИЯ ЦИЛИНДРИКА', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/4dba7ebe8029a497d09993809620f0f4.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'МОНСТЕРА МИНИМА', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/4fb1c168dbe30a66206e18a4b8f76b9b.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'СИНГОНИУМ РЕД ХАРТ', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/582d71bf9449f816a3c06592550148d8.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'МОНСТЕРА МАНКИ МАСК', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/773d0dddef71f2647dad033a83eed2e5.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'СТРЕЛИЦИЯ НИКОЛАЯ', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/a864734422693df94367c6e30925d17d.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'МОНСТЕРА ДЕЛИЦИОЗА', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/b6d7be38b79856b8df329beb6dadf473.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'КТЕНЕНТА СЕТОСА', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/d78ad83358f2142b1a1c4afeafe237db.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        title: 'ФИКУС ЛИРАТА', description: 'Комнатное растение', price: '15960', img: '/img/gorshechnie_rasteniya/e4376f95920b9f5302662b7324d85f3b.webp', category_id: '6', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Bouquets')
  }
}
