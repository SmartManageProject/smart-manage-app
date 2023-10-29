import "./Login.scss";
import Banner from "../../components/Banner/Banner";
import Logo from "../../components/Logo/Logo";

// type Props = {}

const Login = () => {
  return (
    <div className="containerlogin">
      <Banner />
      <div className="forms">
        <Logo />
      </div>
    </div>
  );
};

export default Login;
