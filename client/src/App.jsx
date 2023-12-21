import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Routes, Route } from "react-router-dom"; // Learn more
import Layout from "./Layout";

// from pages folder
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />}/>
          <Route path={'/login'} element={<LoginPage />}/>
          <Route path={'/Register'} element={<RegisterPage />}/>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
