import { useState } from "react";
import { LoginUsers } from "../Components/logiUser";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    LoginUsers({ email, password })
      .then((res) => {
        setIsAuth(true);
        setToken(res.data.token);
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isAuth) {
    return (
      <>
        <div>
          <h1>Return to Dashboard</h1>
          <h2>Token :{token}</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {isError && "error"}
        <div>
          <label htmlFor="">
            Email:{" "}
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            password:{" "}
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
};
