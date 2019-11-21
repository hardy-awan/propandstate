import React from 'react';
import Kursus from './state/State';
import Materi from './props/Prop';
import './props/style.css';


function App() {
  return (
    <div className="App">
         <Kursus/>
         <p>Contoh State</p>
         <hr/>
         <Materi img={require('./props/kursus-seo-offline.png')} des="Belajar Seo" harga="120000"/>
         <Materi img={require('./props/kursus.png')} des="Belajar Google Addword" harga="400000"/>
         <Materi img={require('./props/reactjs.jpg')} des="Belajar ReactJs" harga="50000"/>


    </div>
  );
}

export default App;
