import styles from "./Modal.module.scss";
import { useAuth } from "../../../Context/AuthProvider/useAuth";
import byePana from '../../../assets/Bye-pana.png'

type modalProps = {
  isOpen: boolean;
  resolveModal: () => void
};

const Modal = ({isOpen, resolveModal}: modalProps) => {
  const context = useAuth()

  const styleModal = isOpen? styles.open: styles.close
  return (
    <div className={styleModal}>
      <div className={styles.headerLogoutContainer}>
        <img
          className={styles.logo}
          src="./logoMenorSmartManage.png"
          alt="Logo Smart Manage"
        />
        <button onClick={() => resolveModal()}></button>
      </div>
      <h1>Até mais! <br /> Obrigado por prestigiar meu trabalho</h1>
      <img src={byePana} alt="" className={styles.byePana}/>
      <button className={styles.logout} onClick={() => context.logout()}>
        Sair
      </button>
    </div>
  );
};

export default Modal;
