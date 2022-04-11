import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../../../redux/actionCreate/userActionCreate';
import { useForm } from "react-hook-form";


export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
	const navigate = useNavigate();

  const onSubmit = (data) => {

		const payload = {
			email: data.email,
			password: data.password,
		};

    axios.post('http://localhost:4000/login', payload, {
      withCredentials: true,
    })
    .then(({ data }) => {
			dispatch(login(data))
      if (data.user.admin) {
        navigate('/adminboard');
      } else {
        navigate('/');
      }
		})
    .catch(console.error());
	};

  return (
    <div className="container divider">
      <div className="form-wrapper">
      <h2>Войти</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-input">
          <label htmlFor="email" class="card-input__label">Email</label>
          <input class="card-input__input" {...register("email", {
                required: true,
                pattern:
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })} name="email" id="email" />
        </div>
        <div className="card-input">
          <label htmlFor="password" className="card-input__label">Пароль</label>
          <input {...register("password", {
                required: true,
                minLength: {
                  value: 5,
                  message: "🌼 Пароль должен содержать не менее 5 символов",
                },
              })} name="password" type="password" id="password" className="card-input__input" />
        </div>
        <button type="submit" className="btn">Войти</button>
      </form>

      {errors?.email && (
        <p className="error">{errors?.email.message || "🌼 Введите действительную почту"}</p>
      )}

      {errors?.password && (
        <p className="error">{errors?.password?.message}</p>
      )}

      <p>Забыли пароль?</p>
      <Link className="nav-item-link" to="/remind">Восстановить пароль</Link>
    </div>
    </div>
  );
}
