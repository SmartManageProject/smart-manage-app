import styles from './User.module.scss'

type userProps = {
  name: string;
  role: string;
}

const User = ({name, role}: userProps) => {
  return (
    <div className={styles.userContainer}>
      <img src="./userIcon.png" alt="Icone de usuário"/>
      <div className={styles.informations}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  )
}

export default User