import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/c_organisms/Navbar'
import Footer from './components/c_organisms/Footer'
import Home from './components/e_pages/Home'
import NotFound from './components/e_pages/FourOhFour'

const App = () => (
    <Router>
        <NavBar />

        <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
        </Switch>
        <Footer />
    </Router>
)

export default App
