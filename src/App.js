import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/todolist/Todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
