import { useEffect, useState } from "react";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import styles from "./ListUsers.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import { IUser } from "../../Context/UserProvider/types";
import User from "./User/User";
import ScrollPage from "./ScrollPage/ScrollPage";

function ListUsers() {
  const response = useUserLogged();
  const [listUsers, setListUsers] = useState<IUser[] | undefined>(undefined);
  const [page, setPage] = useState(1)

  async function getUsersList() {
    const listUsers = await response.getUsersData();
    setListUsers(listUsers?.users);
  }
  useEffect(() => {
    getUsersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function somar() {
    setPage(page + 1)
  }

  function subtrair() {
    if (page > 1) {
      setPage(page - 1)
    } 
  }

  return (
    <div className={styles.usersContainer}>
      <section>
        <SearchBar />
        {listUsers?.map((user) => (
          <User key={user.id} name={user.name} role={user.role} />
        ))}
      </section>
      <ScrollPage page={page} somar={() => somar()} subtrair={() => subtrair()}/>
    </div>
  );
}

export default ListUsers;
