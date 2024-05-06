import React, { memo, useEffect } from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="login">
      <div className="container">
        <div className="login__top">
          <Link className="login__home" to={"/"}>
            Home
          </Link>
          <p className="login__text">/</p>
          <Link className="login__link">Login</Link>
        </div>
        <form action="" className="login__info">
          <div className="login__card">
            <label htmlFor="username" className="login__label">
              Username
            </label>
            <input id="username" type="text" className="login__input" />
          </div>
          <div className="login__card">
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <input id="password" type="text" className="login__input" />
          </div>
          <button className="login__btn">LOGIN</button>
        </form>
      </div>
    </section>
  );
};

export default memo(Login);
