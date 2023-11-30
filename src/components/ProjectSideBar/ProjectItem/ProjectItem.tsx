import styles from "./ProjectItem.module.scss";
import logo from "../../../assets/projectImage.png";

type projectItemProps = {
  name: string;
  id: string;
  description: string;
  selectProjectChat: (id: string) => void;
  selectProjectDescription: (description: string) => void;
};

const ProjectItem = ({
  name,
  id,
  description,
  selectProjectChat,
  selectProjectDescription,
}: projectItemProps) => {
  return (
    <div
      onClick={() => {
        selectProjectChat(id);
        selectProjectDescription(description);
      }}
      className={styles.projectContainer}
    >
      <img src={logo} alt="imagem do projeto" />
      <p>{name}</p>
    </div>
  );
};

export default ProjectItem;
