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
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const totalUserPerPage = 7
  async function getUsersList(numberOfPages: number, totalUserPerPage: number) {
    const listUsers = await response.getUsersData(numberOfPages, totalUserPerPage);
    if (listUsers?.count > 7) {
      const pages = listUsers?.count / 7;
      setNumberOfPages(Math.ceil(pages));
    }
    setListUsers(listUsers?.users);
  }

  useEffect(() => {
    getUsersList(page, totalUserPerPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);


  function somar() {
    if (page < numberOfPages) {
      setPage(page + 1);
    }
  }

  function subtrair() {
    if (page > 1) {
      setPage(page - 1);
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
      <ScrollPage
        page={page}
        somar={() => somar()}
        subtrair={() => subtrair()}
      />
    </div>
  );
}

export default ListUsers;
