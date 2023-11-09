import { useUserLogged } from "../../Context/GetUser/useGetUser"


const Header = () => {
  
  const user = useUserLogged();
  const userName = user.getName();
  const userRole = user.getRole();

  return (
    <header>
      <img src="./logoSmartManage.png" alt="Logo Smart Manage" />
      <div>
        <div>
          <p>{userName}</p>
          <p>{userRole}</p>
        </div>
        <img src="./userIcon.png" alt="Icone de usuário"/>
      </div>

    </header>
  )
}

export default Header
