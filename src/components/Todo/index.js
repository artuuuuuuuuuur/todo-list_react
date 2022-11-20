import "./style.css";

const ToDo = ({ title, description, onDelete, onUpdate }) => {
  return (
    <div className="todo-wrapper">
      <span>{title}</span>
      <br />
      <span>{description}</span>
      <br />
      <button onClick={onDelete}>Deletar</button>
      <br />
      <button onClick={onUpdate}>Editar</button>
    </div>
  );
};

ToDo.defaultProps = {
  title: "",
  description: "",
  onDelete: () => {}
};

export default ToDo;
