import { FormEvent, useRef } from "react";
import { useAuth } from "../../../Context/AuthProvider/useAuth";
import styles from "./CreateUser.module.scss";
import Button from "../../Button/Button";

type createUserProps = {
  changeForm?: () => void;
};

const CreateUser = ({ changeForm }: createUserProps) => {
  const newUser = useAuth();

  async function onSubmitCreateUser(event: FormEvent) {
    event.preventDefault();
    try {
      await newUser.createUser(
        nameRef.current?.value,
        emailRef.current?.value,
        passwordRef.current?.value,
        roleRef.current?.value
      );
    } catch (error) {
      alert("Usuário já existe");
    }
  }

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLSelectElement>(null);

  return (
    <section>
      <form onSubmit={onSubmitCreateUser} className={styles.inputsContainer}>
        <div className={styles.input}>
          <label htmlFor="name">Nome:</label>
          <input ref={nameRef} type="text" name="name" id="name" required />
        </div>
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
        <div>
          <select name="role" id="role">
            <option value="frontend">frontend</option>
            <option value="backend">backend</option>
            <option value="fullstack">fullstack</option>
            <option value="manager">manager</option>
            <option value="productOwner">productOwner</option>
          </select>
        </div>
        <div className={styles.buttons}>
          <Button type="submit">Criar conta</Button>
          <Button change={changeForm}>Já tenho conta</Button>
        </div>
      </form>
    </section>
  );
};

export default CreateUser;
