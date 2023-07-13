import React from 'react';
import TodoList from './tasks/todoList/todoList';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import CartProducts from './tasks/Cart_Products/CartProducts';
import CartData from './tasks/Cart_Products/CartData';

const App = () => {
  return (
    <Provider store={store}>
    <div className='container'>
    <BrowserRouter>
    <Routes>
    <Route path='/todo' Component={TodoList}/>
    <Route path='/' Component={CartProducts}/>
    <Route path='/cart' Component={CartData}/>
    </Routes>
    </BrowserRouter>
    </div>
    </Provider>
  )
}

export default App