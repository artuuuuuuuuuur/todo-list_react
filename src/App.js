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
      <form onSubmit={onCreate}>
        <input
          value={title}
          placeholder="Insira título"
          onChange={onTitleChange}
          type="text"
        />
        <br />
        <textarea
          value={description}
          placeholder="Insira descrição"
          onChange={onDescriptionChange}
        />
        <br />
        <button disabled={!canCreate} type="submit">
          Criar
        </button>
      </form>
      {todos.map(({ id, title, description }) => {
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
      })}
    </div>
  );
};
