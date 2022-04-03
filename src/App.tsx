import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestimonialItem } from './components/TestimonialItem';

function App() {
  return (
    <div className='p-10' >
      <TestimonialItem />

      <a 
      className='block shadow bg-green-600 text-white text-center p-4 mt-5 rounded-xl hover:bg-green-500'
      href='https://google.com.br'>Quero me inscrever no curso</a>
    </div>
  );
}

export default App;
