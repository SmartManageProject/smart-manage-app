import styles from './Forms.module.scss'

const Forms = () => {
  return (
    <form className={styles.inputsContainer}>
      <div>
        <label htmlFor="">Email:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Senha:</label>
        <input type="text" />
      </div>
    </form>
  )
}

export default Forms