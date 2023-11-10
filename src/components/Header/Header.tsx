import { useEffect, useState } from "react";
import { useUserLogged } from "../../Context/UserProvider/useGetUser"
import styles from './Header.module.scss'

const Header = () => {
  
  const user = useUserLogged();
  const [userName, setUserName] = useState<string | undefined>('')
  const [userRole, setUserRole] = useState<string | undefined>('')

  async function suaFuncaoAsync() {
    const userName = user.getName();
    const userRole = user.getRole();
    setUserName(userName)
    setUserRole(userRole)
  }
  useEffect(() => {
    suaFuncaoAsync();
  }, []);

  return (
    <header className={styles['header-container']}>
      <img className={styles.logo} src="./logoMenorSmartManage.png" alt="Logo Smart Manage" />
      <div className={styles.userContainer}>
        <div className={styles.userInformation}>
          <p className={styles.nome}>{userName}</p>
          <p className={styles.role}>{userRole}</p>
        </div>
        <img src="./userIcon.png" alt="Icone de usuário"/>
      </div>
    </header>
  )
}

export default Header
