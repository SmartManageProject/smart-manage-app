import styles from "./Button.module.scss";

type buttonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | undefined;
  change?: () => void;
}

const Button = ({ children, type = "button", change}: buttonProps) => {

  if (children === 'Cadastre-se' || children === "Já tenho conta") {
    return <button onClick={change} type={type} className={styles.buttonCadastre}>{children}</button>;
  }
  return <button onClick={change} type={type} className={styles.button}>{children}</button>;
};

export default Button;
