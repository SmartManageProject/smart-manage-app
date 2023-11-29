import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import { useAuth } from "../../../Context/AuthProvider/useAuth";
import { FormEvent, useRef } from "react";
import styles from "./Login.module.scss";
import { useUserLogged } from "../../../Context/UserProvider/useGetUser";

type loginProps = {
  changeForm: () => void;
};

const Login = ({ changeForm }: loginProps) => {
  const auth = useAuth();
  const { updateUserLogged } = useUserLogged();
  const navigate = useNavigate();

  async function onSubmitLogin(event: FormEvent) {
    event.preventDefault();
    try {
      await auth.authenticate(
        emailRef.current?.value,
        passwordRef.current?.value,
      );
      await updateUserLogged();
      navigate("/");
    } catch (error) {
      alert("Usuário ou senha inválido");
    }
  }

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <section className={styles.inputsContainer}>
      <form onSubmit={onSubmitLogin}>
        <div className={styles.input}>
          <label htmlFor="email">Email:</label>
          <input ref={emailRef} type="text" name="email" id="email" required />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Senha:</label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <div className={styles.buttons}>
          <Button type="submit">Login</Button>
          <Button change={changeForm}>Cadastre-se</Button>
        </div>
      </form>
    </section>
  );
};

export default Login;
