import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
// import App3 from './components/App3'


ReactDOM.render(
    <App />,
    document.getElementById('app')
);




/*const user = {
    name: 'Bob',
    age: '45',
    country: 'Ukraine',
    isAdmin: true
}*/
/*ReactDOM.render(
    <App3 user={user.age} />,
    document.getElementById('app')
);*/


// props - readonly об'єкт, singleton
// використовується при передачі даних з одного компонента в інший



// state - об'єкт
 // він використовується для зміни тих чи інших даних на сторінці