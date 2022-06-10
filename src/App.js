import React, {useEffect, useState} from 'react';
import './App.css';

import {fetchData} from './apiActions'
import Card from './Card';

function App() {
  const [dhaka, setDhaka] = useState([])
  const [tokyo, setTokyo] = useState([])

  useEffect(() => {
    let dhakaRes = {}
    let tokyoRes = {}
    fetchData('Dhaka')
    .then(res => {
      if(res.status === 200){
        dhakaRes = res.data
        setDhaka(dhakaRes)
        // console.log(dhakaRes)
      }
    })
    .catch(err => {
      console.error(err)
    })

    // 
    fetchData('Tokyo')
    .then(res => {
      if(res.status === 200){
        console.log(res.data)
        tokyoRes = res.data
        setTokyo(tokyoRes)
        // console.log(tokyoRes)
      }
    })
    .catch(err => {
      console.error(err)
    })
    
  },[])

  return (
    <div className="App">
      { dhaka.name && <Card city={dhaka}/>}
      { tokyo.name && <Card city={tokyo}/>}
    </div>
  );
}

export default App;
