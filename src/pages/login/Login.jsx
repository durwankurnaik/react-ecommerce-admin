import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = ({isDisabled}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();

    login(dispatch, { username, password });
  };

  return (
    // Was kind of bored, so the inline CSS
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
          border: "0.5px solid teal",
          padding: "20px"
        }}
      >
        <h1>LOGIN</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          style={{
            width: "15vw",
            padding: "8px",
            marginTop: "5px",
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{
            width: "15vw",
            padding: "8px",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
