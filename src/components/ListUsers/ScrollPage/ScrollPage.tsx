import styles from './ScrollPage.module.scss'

type scrollPageProps = {
  page: number
  somar: () => void
  subtrair: () => void
}

function ScrollPage({page, somar, subtrair}: scrollPageProps) {
  return (
    <div className={styles.pagesContainer}>
      <button onClick={subtrair} className={styles.subtrair}></button>
      <p>{page}</p>
      <button onClick={somar} className={styles.somar}></button>
    </div>
  )
}

export default ScrollPage