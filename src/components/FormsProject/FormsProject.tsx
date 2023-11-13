import { useNavigate } from "react-router-dom";
import model from "../../assets/imgProjectModel.png";
import Button from "../Button/Button";
import styles from "./FormsProject.module.scss"


const FormsProject = () => {
  const navigate = useNavigate();
  function redirectToCreateProject() {
    navigate("/");
  }

  return (
    <div className={styles.createProjectForms_container}>
      <p onClick={redirectToCreateProject} className={styles.backToHome}>Voltar</p>
      <img className={styles.imgProject} src={model} alt="imagem do projeto" />
      <form action="" className={styles.projectForms}>
        <div className={styles.input}>
          <label htmlFor="project">Nome do projeto:</label>
          <input type="text" name="project" id="project" required />
        </div>
        <div className={styles.input}>
          <label htmlFor="description">Descrição do projeto:</label>
          <input className={styles.inputDescription} type="text" name="description" id="description" required />
        </div>
        <Button>Criar Projeto</Button>
      </form>
    </div>
  );
};

export default FormsProject;
