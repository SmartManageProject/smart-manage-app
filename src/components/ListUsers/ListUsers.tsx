import { SetStateAction, useEffect, useState } from "react";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import styles from "./ListUsers.module.scss";
import { IUser } from "../../Context/UserProvider/types";
import User from "./User/User";
import ScrollPage from "./ScrollPage/ScrollPage";

function ListUsers() {
  const response = useUserLogged();
  const [listUsers, setListUsers] = useState<IUser[] | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [search, setSearch] = useState("");

  const totalUserPerPage = 8;
  async function getUsersList(
    numberOfPages: number,
    totalUserPerPage: number,
    search: string | null
  ) {
    const listUsers = await response.getUsersData(
      numberOfPages,
      totalUserPerPage,
      search
    );
    const pages = listUsers?.count / totalUserPerPage;
    setNumberOfPages(Math.ceil(pages));
    setListUsers(listUsers?.users);
  }

  useEffect(() => {
    getUsersList(page, totalUserPerPage, search);

  }, [page, search]);

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

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.usersContainer}>
      <section>
        <div className={styles.searchContainer}>
          <input value={search} onChange={handleInputChange} type="text" />
        </div>

        {listUsers?.map((user) => (
          <User key={user.id} name={user.name} role={user.role} email={user.email} />
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
