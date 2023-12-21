import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { UserContext } from "./UserContext";

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext)
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  function logout(){
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    });
    setUserInfo(null);
  }

  // userInfo can be null so use '?'
  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">PyroScript</Link>

      {/* when we login, login and register should not show up. To know how we are logged in */}
      {/* use token check whether it's valid */}
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
