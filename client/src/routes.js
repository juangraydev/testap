import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { 
  AdminDashboard,
  Bills,
  Contacts,
  Invoices,
  Items,
  Package,
  Purchase,
  Sales
} from "./pages";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact strict path="/admin">
          <AdminDashboard />
        </Route>
        <Route exact strict path="/admin/dashboard">
          <AdminDashboard />
        </Route>
        <Route exact strict path="/admin/contacts">
          <Contacts />
        </Route>
        <Route exact strict path="/items">
          <Items />
        </Route>
        <Route exact strict path="/admin/salesorders">
          <Sales />
        </Route>
        <Route exact strict path="/admin/package">
          <Package />
        </Route>
        <Route exact strict path="/admin/invoces">
          <Invoices />
        </Route>
        <Route exact strict path="/admin/purchaseorders">
          <Purchase />
        </Route>
        <Route exact strict path="/admin/bills">
          <Bills />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;