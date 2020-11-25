import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

// Dashboard Pages
import Home from '../pages/Home'

// Auth Pages
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isPrivate component={Home} />
      <Route
        path="/incident/new"
        isPrivate
        component={() => <h1>New Incident Page</h1>}
      />
      <Route
        path="/request/new"
        isPrivate
        component={() => <h1>New Request Page</h1>}
      />
      <Route
        path="/informative/new"
        isPrivate
        component={() => <h1>New Informative Page</h1>}
      />
      <Route
        path="/sla/myworks"
        isPrivate
        component={() => <h1>Sla My Works Page</h1>}
      />
      <Route
        path="/sla/mygroupsworks"
        isPrivate
        component={() => <h1>Sla My group&apos;s Works Page</h1>}
      />
      <Route
        path="/reports"
        isPrivate
        component={() => <h1>Reports Page</h1>}
      />

      <Route
        path="/requests/open"
        isPrivate
        component={() => <h1>Open Requests Page</h1>}
      />

      <Route
        path="/requests/all"
        isPrivate
        component={() => <h1>All Requests Page</h1>}
      />

      <Route
        path="/incidents/assigned"
        isPrivate
        component={() => <h1>Assigned to me Page</h1>}
      />
      <Route
        path="/incidents/open"
        isPrivate
        component={() => <h1>Open Incidents Page</h1>}
      />
      <Route
        path="/incidents/open/unassigned"
        isPrivate
        component={() => <h1>Open Unassigned Page</h1>}
      />
      <Route
        path="/incidents/resolved"
        isPrivate
        component={() => <h1>Resolved Incidents Page</h1>}
      />
      <Route
        path="/incidents/all"
        isPrivate
        component={() => <h1>All Incidents Page</h1>}
      />
      <Route path="/login" component={Login} />
      <Route path="/password/forgot" component={ForgotPassword} />
      <Route path="/password/reset/:token" component={ResetPassword} />
    </Switch>
  )
}

export default Routes
