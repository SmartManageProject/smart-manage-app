import styles from './ListUsers.module.scss'
import SearchBar from './SearchBar/SearchBar'


function ListUsers() {
  return (
    <div className={styles.usersContainer}>
      <SearchBar/>
    </div>
  )
}

export default ListUsers