import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { auth, signIn, userRegister } from "./firebase/firebase.config";

function App() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    await userRegister(userData.email, userData.password);
  };

  const handelSubmitLogin = async (e) => {
    e.preventDefault();
    console.log(userData);
    await signIn(userData.email, userData.password);
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handelSubmit}>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
        />
        <input onChange={handleChange} type="submit" value={"Register"} />
      </form>

      <h1>Login</h1>
      <form onSubmit={handelSubmitLogin}>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
        />
        <input onChange={handleChange} type="submit" value={"Register"} />
      </form>
    </>
  );
}

export default App;
