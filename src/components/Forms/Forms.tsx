import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Forms.module.scss";

const Forms = () => {
  return (
    <div className={styles.formsContainer}>
      <Logo />
      <form className={styles.inputsContainer}>
        <div className={styles.input}>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div className={styles.input}>
          <label htmlFor="senha">Senha:</label>
          <input type="text" name="senha" id="senha" required />
        </div>
        <div className={styles.buttons}>
          <Button>Login</Button>
          <Button>Cadastre-se</Button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
