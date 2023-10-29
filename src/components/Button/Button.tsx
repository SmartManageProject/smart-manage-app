
type buttonProps= {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
}


const Button = ({children}: buttonProps) => {
  return (
    <button>{children}</button>
  )
}

export default Button