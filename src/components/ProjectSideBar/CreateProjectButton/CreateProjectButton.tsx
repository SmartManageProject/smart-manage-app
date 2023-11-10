import './CreateProjectButton.module.scss'

type buttonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | undefined;
  change?: () => void;
}

const CreateProjectButton = ({children, change}: buttonProps) => {
  return (
    <button onClick={change}>{children}</button>
  )
}

export default CreateProjectButton