import styles from './User.module.scss'

type userProps = {
  id: string
  name: string;
  role: string;
  email: string;
  addOrRemoveUser: (id: string) => void
}

const User = ({id, name, role, email, addOrRemoveUser}: userProps) => {
  const handleToggleUser = () => {
    console.log(id)
    addOrRemoveUser(id)
  }
  return (
    <div className={styles.userContainer}>
      <button onClick={handleToggleUser} className={styles.selectUser}></button>
      <div className={styles.informations}>
        <h3 className={styles.name}>{name} <span>&lt;{role}/&gt;</span></h3>
        <p className={styles.role}>{email}</p>
      </div>
    </div>
  )
}

export default User