
type projectItemProps = {
  name: string;
  description: string;
}

const ProjectItem = ({name}: projectItemProps) => {
  console.log(name)
  return (
    <div>{name}</div>
  )
}

export default ProjectItem