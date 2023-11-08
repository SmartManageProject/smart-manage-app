import { useNavigate} from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider/useAuth";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Forms.module.scss";
import { FormEvent, useRef} from "react";

const Forms = () => {
  const auth = useAuth();
  const navigate = useNavigate();


  async function onSubmitLogin(event: FormEvent) {
    event.preventDefault();
    try {
      await auth.authenticate(emailRef.current?.value, passwordRef.current?.value);
      navigate("/");
    } catch (error) {
      alert("Usuário ou senha inválido");
    }
  }

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <div className={styles.formsContainer}>
      <Logo />
      <form  onSubmit={onSubmitLogin}className={styles.inputsContainer}>
        <div className={styles.input}>
          <label htmlFor="email">Email:</label>
          <input ref={emailRef} type="text" name="email" id="email" required />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Senha:</label>
          <input ref={passwordRef} type="password" name="password" id="password" required />
        </div>
        <div className={styles.buttons}>
          <Button type="submit" >Login</Button>
          <Button>Cadastre-se</Button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
