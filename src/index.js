import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Лекция про => Элементы и компоненты в React

const text = 'Hello, React!'; 
// JSX - JavaScript XML - расширение синтаксиса JavaScript, 
// которое позволяет писать HTML-подобный код внутри JavaScript.  
// Синтаксис похож на интерполяцию в шаблонных строках, 
// но вместо строк используется HTML-подобный код.

// В многострочных элементах нельзя использовать объекты 


const elem = (
  <div>
    <h2>{text}</h2> 
    <button>Click me</button>
    <button tabIndex={0}>Click me again</button>
  </div>
);  // React Elemen
// 1 правило = если в JSX используется несколько строк, 
// то их нужно обернуть в один родительский элемент. 
// В данном случае это <div>...</div>

// 2 правило = если элемент многострочный, 
// то его нужно обернуть в круглые скобки. 
// В данном случае это <div>...</div>

// tabIndex - атрибут, который определяет порядок фокусировки элементов 
// при навигации с помощью клавиши Tab.
// В JSX атрибуты пишутся в camelCase, а не в kebab-case, как в HTML.



//const elem = React.createElement('h2', {className: 'greeting'}, 'Hello, React!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);