import styles from './Message.module.scss'
import { useEffect, useState } from 'react';
import { useUserLogged } from '../../../Context/UserProvider/useGetUser';

type messageProps = {
  userId: string;
  name: string;
  role: string;
  children: React.ReactNode;
}

const Message = ({userId, name, role, children}: messageProps) => {
  const user = useUserLogged();
  const [useIdLogged, setUserIdLogged] = useState<string | undefined>() 
  useEffect(() => {
    setUserIdLogged(user.id) 
  }, [user.id])
  return (
    <div className={styles.containerMessage}>
      <div className={styles.userDetails}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
      <p>{children}</p>
    </div>
  )
}

export default Message