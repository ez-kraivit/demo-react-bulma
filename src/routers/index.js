import React from 'react'
import {Switch,Route} from 'react-router-dom'

// Route ทำการเรียก Page
import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'
import History from '../pages/History'

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Profile' component={Profile} />
        <Route exact path='/History' component={History} />
    </Switch>
)