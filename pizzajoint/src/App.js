import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Options';
import Order from './components/Order';

function App() {
  const [choice, setChoice] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setChoice({ ...choice, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!choice.toppings.includes(topping)){
      newToppings = [...choice.toppings, topping];
    } else {
      newToppings = choice.toppings.filter(item => item !== topping);
    }
    setChoice({ ...choice, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} choice={choice} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} choice={choice} />
        </Route>
        <Route path="/order">
          <Order choice={choice} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;