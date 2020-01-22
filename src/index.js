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

//Component using arrow function
const FruitCard = () => (
        <div>
            <h3>Fruit</h3>
            <hr></hr>
            <p>Welcome to fruit card.</p>
        </div>
)

const App = () => (
    //Calling FruitCard component in two different ways
    <div>
        <FruitCard />
        <FruitCard></FruitCard>
    </div>
)

//Show the first element <elemnt to render, element in wich render> 
ReactDOM.render(<App/>, document.getElementById('root'))