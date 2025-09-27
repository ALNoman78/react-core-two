import './App.css'
import Home from './components/Home';
import Counter from './Counter';
import Friends from './Friend';
import Team from './Team';
import User from './User';

function App() {
  // function handleClick() {
  //   alert('Button Clicked')
  // }
  // const handleClick2 = () => {
  //   alert('Button Two Clicked');
  // }
  // const handleClick3 = (num) => {
  //   alert(num + 9)
  // }
  return (
    <>
      {/* <h3>React Concept Two</h3> */}
      <Home></Home>
      {/* <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter> */}
      {/* <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Button Two</button>
      {/* create a function inside onclick event */}
      {/* <button onClick={() => {alert('This is onclick function inside button')}}>Third Button</button> */}
      {/* function wrapping */}
      {/* <button onClick={() => {handleClick3(1)}}>Function Wrapping</button> */}
    </>
  )
}

export default App
