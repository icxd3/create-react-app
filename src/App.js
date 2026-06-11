import React from 'react';
import logo from './logo.svg';
import './App.css';

// JSX - элементы, это синтаксическое расширение JavaScript, 
// которое позволяет писать HTML-подобный код внутри JavaScript.
// JSX не является строкой или HTML, 
// это синтаксис, который преобразуется 
// в вызовы JavaScript-функций.
// JSX позволяет создавать React-элементы 
// с помощью удобного и читаемого синтаксиса, 
// который напоминает HTML, но при этом обладает 
// мощью JavaScript.

let Header = () => {
  return <h2>Hello, React!</h2>
}

// let Field = () => {
//   let holder = 'Enter here...';
//   let styled = {
//     width: '300px',
//   };
//   return <input placeholder={holder} type='text' style={styled}/>
// }

class Field extends React.Component {
  render() {
    let holder = 'Enter here...';
    let styled = {
      width: '300px',
    };
    return <input placeholder={holder} type='text' style={styled}/> 
  }
}

// function Button() {
//   let text = 'Log in';
//   let logged = false;
//   return <button>{logged ? 'Log out' : 'Log in'}</button>
// }
// function Button() {
//   let text = 'Log in';
//   let logged = false;
//   return <button>{logged ? 'Log out' : 'Log in'}</button>
// }



function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
    </div>
  );
}

export {Header};

export default App;
