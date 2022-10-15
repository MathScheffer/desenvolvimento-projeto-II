import React from 'react'
import useRotina from '../customHooks/useRotina';
import { useEffect, useState } from 'react';

function App() {
  const { data, loading, error, request } = useRotina()

  useEffect(() => {
    request('http://localhost:3000/api/rotinas/')
     
      console.log(data)
  },[request])

  return (
    <div className="App">
      <h1>Hello World</h1>
      {data &&
        data.map(rotina => <p key={rotina['_id']}>{rotina.dia}</p>)
      }
    </div>
  );
}

export default App;
