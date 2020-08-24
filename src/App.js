import React,{useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment'


import Head from './comps/Head'
import Input from './comps/Input'
import Log from './comps/Log'

function App() {
  let date = moment()

  //all states (hub component / Hirearcheal )
  const [view,setView] = useState(true)


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5 m-auto'>
          <h1 className='my-4'>Logging</h1>
          <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>

          <Head view={view} setView={setView} className='my-8'/>
          {view ? <Input /> : <Log />}

        </div>
      </div>
    </div>
  );
}

export default App;
