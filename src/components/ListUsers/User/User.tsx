import { useEffect } from 'react';
import styles from './User.module.scss'

type userProps = {
  id: string
  name: string;
  role: string;
  email: string;
  active: boolean
  addOrRemoveUser: (id: string) => void
}

const User = ({id, name, role, email, active, addOrRemoveUser}: userProps) => {
  const handleToggleUser = () => {
    addOrRemoveUser(id)
  }
  const mainDivClassName = active ? styles.active : styles.disabled;
  return (
    <div className={mainDivClassName}>
      <button onClick={handleToggleUser} className={styles.selectUser}></button>
      <div className={styles.informations}>
        <h3 className={styles.name}>{name} <span>&lt;{role}/&gt;</span></h3>
        <p className={styles.role}>{email}</p>
      </div>
    </div>
  )
}

export default User