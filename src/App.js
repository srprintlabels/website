import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import './css/responsive.css'
import './css/animate.css'

import { Home, About, Books, SelfAdhesiveLabels,
        Leaflets, Catalogs, Brochures, Posters,
        Calendars, FoldingCartons, Contact,
        NotFoundPage } from './components'

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home} exact />
          <Route exact path="/about" component={About} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/self-adhesive-labels" component={SelfAdhesiveLabels} />
          <Route exact path="/leaflets" component={Leaflets} />
          <Route exact path="/catalogs" component={Catalogs} />
          <Route exact path="/brochures" component={Brochures} />
          <Route exact path="/posters" component={Posters} />
          <Route exact path="/calendars" component={Calendars} />
          <Route exact path="/folding-cartons" component={FoldingCartons} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
