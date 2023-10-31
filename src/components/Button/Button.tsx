import styles from "./Button.module.scss";

type buttonProps = {
  children: React.ReactNode;
  type?: "submit" | undefined;
};

const Button = ({ children, type }: buttonProps) => {
  if (children === 'Cadastre-se') {
    return <button type={type} className={styles.buttonCadastre}>{children}</button>;
  }
  return <button className={styles.button}>{children}</button>;
};

export default Button;
