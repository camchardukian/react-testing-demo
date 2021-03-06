import TodoItem from "./components/TodoItem/TodoItem";
import CounterSection from "./components/CounterSection/CounterSection";
import "./App.css";

function App() {
  const todos = [
    { id: 1, title: "clean the house", isCompleted: false },
    { id: 2, title: "pay the credit card bill", isCompleted: true },
  ];
  return (
    <div className="app">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
      <CounterSection />
    </div>
  );
}

export default App;
