
import Header from "../../components/Header/Header";
import ProjectSideBar from "../../components/ProjectSideBar/ProjectSideBar";
import styles from "./Home.module.scss"

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <ProjectSideBar/>
    </div>
  );
};

export default HomePage;
