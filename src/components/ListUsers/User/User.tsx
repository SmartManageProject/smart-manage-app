import styles from './User.module.scss'

type userProps = {
  name: string;
  role: string;
  email: string;
}

const User = ({name, role, email}: userProps) => {
  return (
    <div className={styles.userContainer}>
      <button className={styles.selectUser}></button>
      <div className={styles.informations}>
        <h3 className={styles.name}>{name} <span>&lt;{role}/&gt;</span></h3>
        <p className={styles.role}>{email}</p>
      </div>
    </div>
  )
}

export default User