import './App.css';
import React, { useRef, useState } from 'react';
import xmark from './images/cross1.png'
import circle from './images/rec.png'

let pattern = [ "","","","","","","","","" ];


function App() {

  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let box4 = useRef(null)
  let box5 = useRef(null)
  let box6 = useRef(null)
  let box7 = useRef(null)
  let box8 = useRef(null)
  let box9 = useRef(null)

  const boxArray = [box1, box2, box3, box3, box4, box5, box6, box7, box8, box9]

  const toggle = (e, num) =>{

    if(lock)
      return 0;
    else if(count%2 === 0){
      e.target.innerHTML = `<img src='${xmark}' />`;
      pattern[num] = "X";
      setCount(count+1);
    }else{
      e.target.innerHTML = `<img src='${circle}' />`;
      pattern[num] = "O";
      setCount(count+1);
    }
    checkWin();

  }


  const checkWin = () => {
    if(pattern[0]===pattern[1] && pattern[1]===pattern[2] && pattern[2]!== ""){
      win(pattern[2]);
    }else if(pattern[3]===pattern[4] && pattern[4]===pattern[5] && pattern[5]!== ""){
      win(pattern[5]);
    }else if(pattern[6]===pattern[7] && pattern[7]===pattern[8] && pattern[8]!== ""){
      win(pattern[8]);
    }else if(pattern[0]===pattern[3] && pattern[3]===pattern[6] && pattern[6]!== ""){
      win(pattern[6]);
    }else if(pattern[1]===pattern[4] && pattern[4]===pattern[7] && pattern[7]!== ""){
      win(pattern[7]);
    }else if(pattern[2]===pattern[5] && pattern[5]===pattern[8] && pattern[8]!== ""){
      win(pattern[8]);
    }else if(pattern[0]===pattern[4] && pattern[4]===pattern[8] && pattern[8]!== ""){
      win(pattern[8]);
    }else if(pattern[2]===pattern[4] && pattern[4]===pattern[6] && pattern[6]!== ""){
      win(pattern[6]);
    }
  }

  const win = (winner) => {
    setLock(true);
    if(winner === 'X'){
      titleRef.current.innerHTML = `Congratulations, &nbsp;<img src='${xmark}'/>  won!`;
    }
    else{
      titleRef.current.innerHTML = `Congratulations, &nbsp;<img src='${circle}'/> won!`;
    }
  }

  const resetGame =()=>{
    setLock(false);
    setCount(0);
    pattern = ["","","","","","","","",""];
    boxArray.map((e)=>{
      e.current.innerHTML = '';
    })
    titleRef.current.innerHTML ="Tic Tac Toe";
  }

 
  return ( 
    <>
      <div className="container">
        <div className="nameplate">
          <h1 ref={titleRef}>Tic Tac Toe</h1> 
        </div>
        
        <div className='boxes-container'>
          <div className='boxes'>
            <div className='box' onClick={(e)=>toggle(e,0)} ref={box1} ></div>
            <div className='box' onClick={(e)=>toggle(e,1)} ref={box2}></div>
            <div className='box' onClick={(e)=>toggle(e,2)} ref={box3}></div>
          </div>
          <div className='boxes'>
            <div className='box' onClick={(e)=>toggle(e,3)} ref={box4}></div>
            <div className='box' onClick={(e)=>toggle(e,4)} ref={box5}></div>
            <div className='box' onClick={(e)=>toggle(e,5)} ref={box6}></div>
          </div>
          <div className='boxes'>
            <div className='box' onClick={(e)=>toggle(e,6)} ref={box7}></div>
            <div className='box' onClick={(e)=>toggle(e,7)} ref={box8}></div>
            <div className='box' onClick={(e)=>toggle(e,8)} ref={box9}></div>
          </div>
        </div>
        <div>
          <button className="resetBtn" onClick={resetGame}>
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

