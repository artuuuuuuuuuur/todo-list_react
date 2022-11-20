import "./style.css";

const ToDo = ({ title, description, onDelete, onUpdate }) => {
  return (
    <div className="todo-wrapper">
      <span><b>{title}</b></span>
      <br />
      <span>{description}</span>
      <br />
      <button className="crud" onClick={onDelete}>Deletar</button>
      <button className="crud" onClick={onUpdate}>Editar</button>
    </div>
  );
};

ToDo.defaultProps = {
  title: "",
  description: "",
  onDelete: () => {}
};

export default ToDo;
