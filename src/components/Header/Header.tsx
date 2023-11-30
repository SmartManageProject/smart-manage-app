import { useEffect, useState } from "react";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import styles from "./Header.module.scss";

import Modal from "./Modal/Modal";

const Header = () => {
  const { updateUserLogged, name, role } = useUserLogged();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!name || !role) {
      updateUserLogged();
    }
  }, [name, role, updateUserLogged]);

  function resolveModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <header className={styles["header-container"]}>
      <img
        className={styles.logo}
        src="./logoMenorSmartManage.png"
        alt="Logo Smart Manage"
      />
      <div onClick={() => resolveModal()} className={styles.userContainer}>
        <div className={styles.userInformation}>
          <p className={styles.nome}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
        <img src="./userIcon.png" alt="Icone de usuário" />
      </div>
      <Modal isOpen={modalIsOpen} resolveModal={resolveModal} />
    </header>
  );
};
export default Header;
