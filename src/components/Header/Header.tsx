import { useEffect, useState } from "react";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import styles from "./Header.module.scss";

import Modal from "./Modal/Modal";

const Header = () => {
  const user = useUserLogged();
  const [userName, setUserName] = useState<string | undefined>();
  const [userRole, setUserRole] = useState<string | undefined>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    setUserName(user.name);
    setUserRole(user.role);
  }, [user.name, user.role]);

  function resolveModal() {
    setModalIsOpen(!modalIsOpen);
    console.log(modalIsOpen);
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
          <p className={styles.nome}>{userName}</p>
          <p className={styles.role}>{userRole}</p>
        </div>
        <img src="./userIcon.png" alt="Icone de usuário" />
      </div>
      <Modal isOpen={modalIsOpen} resolveModal={resolveModal} />
    </header>
  );
};
export default Header;
