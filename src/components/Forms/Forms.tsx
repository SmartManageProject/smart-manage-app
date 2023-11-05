import { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./Forms.module.scss";
import Login from "./Login/Login";
import CreateUser from "./CreateUser/CreateUser";

const Forms = () => {
  const [newUser, setNewUser] = useState(false);

  function changeFormPage() {
    setNewUser(!newUser);
  }

  return (
    <div className={styles.formsContainer}>
      <Logo />
      {newUser ? (
        <CreateUser changeForm={changeFormPage} />
      ) : (
        <Login changeForm={changeFormPage} />
      )}
    </div>
  );
};

export default Forms;
