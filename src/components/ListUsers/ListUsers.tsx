/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect, useState } from "react";
import { useUserLogged } from "../../Context/UserProvider/useGetUser";
import styles from "./ListUsers.module.scss";
import { IUser } from "../../Context/UserProvider/types";
import User from "./User/User";
import ScrollPage from "./ScrollPage/ScrollPage";

type listUsersProps = {

  addOrRemoveUser: (id: string) => void;
  usersInList: string[];
};

type Member = {
  active: boolean;
} & IUser;

const ListUsers = ({ addOrRemoveUser, usersInList }: listUsersProps) => {
  const response = useUserLogged();
  const [listUsers, setListUsers] = useState<Member[] | undefined>(undefined);

  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [search, setSearch] = useState("");

  const totalUserPerPage = 8;
  const getUsersList = async (
    numberOfPages: number,
    totalUserPerPage: number,
    search: string | null,
  ) => {
    const listUsers = await response.getUsersData(
      numberOfPages,
      totalUserPerPage,
      search,
    );

    const pages = listUsers?.count / totalUserPerPage;
    setNumberOfPages(Math.ceil(pages));
    setListUsers(
      listUsers?.users.map((user: IUser) => ({
        ...user,
        active: usersInList.includes(user.id) ? true : false,
      })),
    );

  };

  useEffect(() => {
    getUsersList(page, totalUserPerPage, search);
  }, [page, search]);

  const changeActive = () => {
    usersInList.map((memberId) => {
      setListUsers((prevListUsers) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return prevListUsers?.map((user: any) => {
          if (user.id === memberId) {
            return { ...user, active: true };
          }
          return {
            ...user,
            active: usersInList.includes(user.id) ? user.active : false,
          };
        });
      });
    });
  };

  useEffect(() => {
    changeActive();
  }, [usersInList]);

  const somar = () => {
    if (page < numberOfPages) {
      setPage(page + 1);
    }
  };

  const subtrair = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.usersContainer}>
      <section>
        <div className={styles.searchContainer}>
          <input value={search} onChange={handleInputChange} type="text" />
        </div>

        {listUsers?.map((user) => (

          <User
            key={user.id}
            id={user.id}
            name={user.name}
            role={user.role}
            email={user.email}
            active={user.active}
            addOrRemoveUser={addOrRemoveUser}
          />
        ))}
      </section>
      <ScrollPage
        page={page}
        somar={() => somar()}
        subtrair={() => subtrair()}
      />
    </div>
  );
};

export default ListUsers;
