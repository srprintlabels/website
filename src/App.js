import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import './css/responsive.css'
import './css/animate.css'

import { Home, About, Books, SelfAdhesiveLabels, 
        Leaflets, Catalogs, Brochures, Posters,
        Calendars, FoldingCartons, Contact  } from './components'

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
          <Route path="/self-adhesive-labels" component={SelfAdhesiveLabels} />
          <Route path="/leaflets" component={Leaflets} />
          <Route path="/catalogs" component={Catalogs} />
          <Route path="/brochures" component={Brochures} />
          <Route path="/posters" component={Posters} />
          <Route path="/calendars" component={Calendars} />
          <Route path="/folding-cartons" component={FoldingCartons} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
