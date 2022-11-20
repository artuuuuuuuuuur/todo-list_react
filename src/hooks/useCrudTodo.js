import { useState } from "react";

const DEFAULT_TITLE = "";
const DEFAULT_DESCRIPTION = "";

export default () => {
  const [todos, setToDo] = useState([]);
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [description, setDescription] = useState(DEFAULT_DESCRIPTION);
  const [countId, setCountId] = useState(0);
  const [editingId, setEditingId] = useState(null);

  const canCreate = title && description;

  const create = (todo) => {
    if (!canCreate) return;
    setToDo((currentToDo) => [...currentToDo, { id: countId, ...todo }]);
    setCountId((currentCountId) => currentCountId + 1);
    setTitle(DEFAULT_TITLE);
    setDescription(DEFAULT_DESCRIPTION);
  };

  const onCreate = (e) => {
    e.preventDefault();
    if (editingId == null) {
      create({ title, description });
    } else {
      update(editingId, { title, description });
    }
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const deleteTodo = (id) => {
    setToDo((currentTodo) => {
      return currentTodo.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const update = (id, newTodo) => {
    setToDo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...newTodo, id };
        }
        return todo;
      });
    });
    setEditingId(null);
    setTitle(DEFAULT_TITLE);
    setDescription(DEFAULT_DESCRIPTION);
  };

  const startUpdating = (id) => {
    const todoToEdit = todos.find((todo) => {
      return todo.id === id;
    });
    setEditingId(id);
    setTitle(todoToEdit.title);
    setDescription(todoToEdit.description);
  };

  window.updateTodo = update;
  window.startUpdating = startUpdating;

  window.testeDoDelmiro = () => {
    console.log("Oi Delmiro");
  };

  return {
    todos,
    title,
    description,
    onCreate,
    onTitleChange,
    onDescriptionChange,
    canCreate,
    deleteTodo,
    startUpdating
  };
};
