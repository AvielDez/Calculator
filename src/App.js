import React from 'react'
import Calculator from './components/Calculator';
import './dist/style.css'

export default function App() {
  const positionOne = 1
  const positionTwo = 2
  const positionThree = 3
  const [togglePosition, setTogglePosition] = React.useState(() => {
    return localStorage.togglePosition || positionOne
  })
  console.log(localStorage.togglePosition)
  React.useEffect(()=>{
    localStorage.setItem('togglePosition', togglePosition)
  },[togglePosition])

  function toggle(){
      if(togglePosition === positionOne){
        setTogglePosition(prevTogglePosition=> positionTwo)
      }
      else if(togglePosition === positionTwo){
        setTogglePosition(prevTogglePosition=> positionThree)  
      }
      else{
        setTogglePosition(prevTogglePosition=> positionOne)
      }
  }
 console.log(togglePosition)
  return (
    <div className={`app app-${togglePosition}`}>
      <Calculator 
        toggle={toggle} 
        togglePosition={togglePosition}
      />
    </div>
  )
}