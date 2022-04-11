import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import AccordionList from '../Accordion/AccordionList';
import "./CardPage.css"

function CardPage() {

  const { id } = useParams();
  const { bouquets } = useSelector((state) => state)
  const bouquet = bouquets.find((el) => el.id == id);
 
  return (
    <div className='card-container'>
      <div className='container'>
          <div className="cardPage-wrapper">
            <div className="cardPage-box-img">
              <img className="cardPage-img" width="100%" height="100%" src={`http://localhost:4000/${bouquet?.img}`} alt="b-main"></img>
            </div>
            <div className="cardPage-info-content">
              <p className="cardPage-title">{bouquet?.title}</p>
              <p className="cardPage-price">{bouquet?.price} руб.</p>
              <p className='cardPage-description-title'>Описание</p>
              <h4 className="cardPage-description">{bouquet?.description}</h4>
              <p className='cardPage-description-instruction'>Инструкция свежести</p>
              <AccordionList />
              <div className="cardPage-button-wrapper">
              <ButtonBuy key={bouquet.id} bouquet={bouquet} />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default CardPage;