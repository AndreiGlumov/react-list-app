import React, {useContext} from 'react';
import MyInput from '../components/UI/input/MyInput';
import {AuthContext} from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = event => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h2>Sign in to App</h2>
      <form onSubmit={login}>
        <MyInput type="text" autoComplete="username" placeholder="Введите Логин" />
        <MyInput type="password" autoComplete="current-password" placeholder="Введите Пароль" />
        <button className="btn btn-sm btn-primary">Войти</button>
      </form>
    </div>
  );
};

export default Login;