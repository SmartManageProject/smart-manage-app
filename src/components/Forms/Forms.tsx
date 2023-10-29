import Logo from '../Logo/Logo'
import styles from './Forms.module.scss'

const Forms = () => {
  return (
    <form className={styles.inputsContainer}>
      <Logo/>
      <div className={styles.input}>
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' id='email' required/>
      </div>
      <div className={styles.input}>
        <label htmlFor="senha">Senha:</label>
        <input type="text" name='senha' id='senha' required/>
      </div>
    </form>
  )
}

export default Forms