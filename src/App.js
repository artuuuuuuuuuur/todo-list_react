import ToDo from "./components/Todo";
import useCrudTodo from "./hooks/useCrudTodo";

export default () => {
  const {
    todos,
    title,
    description,
    onCreate,
    onTitleChange,
    onDescriptionChange,
    canCreate,
    deleteTodo,
    startUpdating
  } = useCrudTodo();

  return (
    
    <div>
      <h1>To-Do List</h1>
      <div className="todo">
        <form onSubmit={onCreate}>
                <input className="text"
                  value={title}
                  placeholder="Insira um título"
                  onChange={onTitleChange}
                  type="text"
                />
                <br />
                <textarea className="text"
                  value={description}
                  placeholder="Insira uma descrição"
                  onChange={onDescriptionChange}
                />
                <br />
                <button disabled={!canCreate} type="submit">
                  Criar
                </button>
              </form>
      </div>
    
      <div> {todos.map(({ id, title, description }) => {
        return (
          <ToDo
            key={id}
            title={title}
            description={description}
            onDelete={() => {
              deleteTodo(id);
            }}
            onUpdate={() => {
              startUpdating(id);
            }}
          />
        );
      })}</div>
    </div>
  );
};
