import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    name: 'George Villanueva',
    age: 28,
    country: 'México'
}

function getUserInfo(user) {
    return `Hello, my name is ${user.name} and I'am ${user.age} years old, I'am from ${user.country}`;
}
//element declaration
const App = <h1>{getUserInfo(user)}</h1>

//Show the first element <elemnt to render, element in wich render> 
ReactDOM.render(App, document.getElementById('root'))