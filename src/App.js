import './App.css';
import React from 'react';
import { Switch,  Route } from 'react-router-dom'
import Home from './Components/Home';
import Allprices from './Components/AllPrices';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';



function App() {

  return (<><Switch>

    <Route path="/" component={Home} exact/>
    <Route path="/see_more" component={Allprices}/>
    <Route path="/page2" component={Page2}/>
    <Route path="/page3" component={Page3}/>

  </Switch>

  </>

  );
}

export default App;
