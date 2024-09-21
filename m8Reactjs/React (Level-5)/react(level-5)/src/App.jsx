// App.jsx
import './App.css'
import Lottery from './Lottery'
import {sum} from './helper.js' //IMPORT SUM FUNCTION 
function App() {
  let winningCondition = (arr)=>{
    return sum(arr)===20;
  }
  return (
    <>
     <Lottery n={4} winningSum={winningCondition}/> 
    </>
  )
}

export default App
