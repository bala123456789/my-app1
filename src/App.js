import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTodo } from './components/AddTodo';
import { TodoLists } from './components/TodoLists';
function App() {
  return (
    <div className="container p-4 mt-2">
      <h2>Todo Application</h2>
   <AddTodo></AddTodo>
    <TodoLists></TodoLists>
    </div>
  );
}

export default App;
