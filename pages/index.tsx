import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  const[count, setCount] = useState(0);
  const countUp = () => {
      setCount(prev => prev + 1);
  }

  const[name, setName] = useState("");
  const changeName = (val:string) => {
      setName(val);
  }

  useEffect(() => {
    return () => {
      console.log("変更前の値は" + count)
      // setCount(0);
   }
  })

  return (
      <>
          <input type="text" value={count}/>
          <button onClick={countUp}>+</button>
          <br/>
          <input type="text" value={name}/>
          <button onClick={() => changeName("たけし")}>＼(^o^)／</button>
      </>
)
}

export default Home
