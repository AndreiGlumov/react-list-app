import React from 'react';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
  return (
    <div>
      <h2>Sign in to App</h2>
      <form action="">
        <MyInput type="text" placeholder="Введите Логин" />
        <MyInput type="password" placeholder="Введите Пароль" />
        <button className="btn btn-sm btn-primary">Войти</button>
      </form>
    </div>
  );
};

export default Login;