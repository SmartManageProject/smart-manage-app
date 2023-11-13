
import styles from './SearchBar.module.scss'


function SearchBar() {
  return (
    <search className={styles.searchContainer}>
      <input type="text"/>
    </search>

  )
}

export default SearchBar;