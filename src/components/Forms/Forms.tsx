import { useNavigate} from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider/useAuth";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Forms.module.scss";
import { FormEvent, useState } from "react";

const Forms = () => {
  const auth = useAuth();
  const navigate = useNavigate();


  async function onSubmitLogin(event: FormEvent) {
    event.preventDefault();
    try {
      await auth.authenticate(email, password);
      navigate("/");
    } catch (error) {
      alert("Usuário ou senha inválido");
    }
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className={styles.formsContainer}>
      <Logo />
      <form  onSubmit={onSubmitLogin}className={styles.inputsContainer}>
        <div className={styles.input}>
          <label htmlFor="email">Email:</label>
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" name="email" id="email" required />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Senha:</label>
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" id="password" required />
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
