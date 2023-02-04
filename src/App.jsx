import React from "react";
import "./styles.css";
// component読み込み
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };


  // (index)でindexを受け取る
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 引数で受け取ったindex番号の要素を一つ削除する
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // 引数で受け取ったindex番号の要素を一つ削除する
    newIncompleteTodos.splice(index, 1);
    
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setIncompleteTodos(newCompleteTodos);
  };

  return (
    <>
      {/* propsとして関数を渡している */}
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
      />

      <incompleteTodos 
        todos={IncompleteTodos}
        onClickBack={onClickBack}
      />

      <CompleteTodos 
        todos={CompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      
    </>
  );
};