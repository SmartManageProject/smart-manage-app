import styles from './Message.module.scss'
import { useUserLogged } from '../../../Context/UserProvider/useGetUser';

type messageProps = {
  email: string;
  name: string;
  role: string;
  children: React.ReactNode;
}

const Message = ({email, name, role, children}: messageProps) => {
  const user = useUserLogged();
  const userLoggetMessage = (email == user.email) ? styles.containerMessageLogged : styles.containerMessageOther;

  return (
    <div className={userLoggetMessage}>
      <div className={styles.userDetails}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
      <p className={styles.text}>{children}</p>
    </div>
  )
}

export default Message