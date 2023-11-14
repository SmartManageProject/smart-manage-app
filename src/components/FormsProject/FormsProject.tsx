import { useNavigate } from "react-router-dom";
import model from "../../assets/imgProjectModel.png";
import Button from "../Button/Button";
import styles from "./FormsProject.module.scss";
import { SetStateAction } from "react";

type formsProjectProps = {
  valueName: string;
  setName: (value: SetStateAction<string>) => void;
  valueDescription: string;
  setDescription: (value: SetStateAction<string>) => void;
  createProject: () => void
};

const FormsProject = ({
  valueName,
  setName,
  valueDescription,
  setDescription,
  createProject
}: formsProjectProps) => {
  const navigate = useNavigate();
  function redirectToCreateProject() {
    navigate("/");
  }

  return (
    <div className={styles.createProjectForms_container}>
      <p onClick={redirectToCreateProject} className={styles.backToHome}>
        Voltar
      </p>
      <img className={styles.imgProject} src={model} alt="imagem do projeto" />
      <form action="" className={styles.projectForms}>
        <div className={styles.input}>
          <label htmlFor="project">Nome do projeto:</label>
          <input
            value={valueName}
            onChange={(event) => setName(event.target.value)}
            type="text"
            name="project"
            id="project"
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="description">Descrição do projeto:</label>
          <input
            value={valueDescription}
            onChange={(event) => setDescription(event.target.value)}
            className={styles.inputDescription}
            type="text"
            name="description"
            id="description"
            required
          />
        </div>
        <Button change={createProject}>Criar Projeto</Button>
      </form>
    </div>
  );
};

export default FormsProject;
