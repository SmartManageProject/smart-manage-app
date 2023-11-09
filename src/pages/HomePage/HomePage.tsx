
import Header from "../../components/Header/Header";
import ProjectSideBar from "../../components/ProjectSideBar/ProjectSideBar";
import "./Home.scss"

const HomePage = () => {
  return (
    <div className="container">
      <Header/>
      <ProjectSideBar/>
    </div>
  );
};

export default HomePage;
