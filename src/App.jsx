
import './App.css'
import Board from './components/Board'
import { BoardProvider } from './components/BoardContext'
import Todo from './Todo'

function App() {

  return (
    <div>
      {/* <Todo /> */}
  <BoardProvider>
    <Board/>

  </BoardProvider>
  
  </div>
  )
}

export default App
