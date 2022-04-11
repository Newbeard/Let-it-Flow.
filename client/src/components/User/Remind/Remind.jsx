import { Link } from 'react-router-dom';

function Remind(props) {
  return (
    <div className="container divider">
      <div className="form-wrapper">
      <h2>Воcстановить пароль</h2>
      <p>Введите свой email для восстановления пароля</p>
      <form>
        <div className="card-input">
          <label for="email" class="card-input__label">Email</label>
          <input type="email" id="email" class="card-input__input" autocomplete="off" />
        </div>
        <button className="btn">Войти</button>
      </form>
      <div className="flex-wrapper">
      <Link className="nav-item-link" to="/signup">Регистрация</Link>
      <Link className="nav-item-link" to="/login">Войти</Link>
      </div>
    </div>
    </div>
  );
}

export default Remind;