import styles from "./Button.module.scss";

type buttonProps = {
  children: React.ReactNode;
  type?: "submit" | undefined;
  openModule?: void | boolean;
};

const Button = ({ children, type, openModule }: buttonProps) => {
  if (children === 'Cadastre-se') {
    return <button type={type} className={styles.buttonCadastre} onClick={() => openModule}>{children}</button>;
  }
  return <button className={styles.button}>{children}</button>;
};

export default Button;
