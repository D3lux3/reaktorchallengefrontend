import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link, Redirect
} from "react-router-dom"
import ProductsContainer from './components/ProductsContainer'
import { Container, Toolbar, AppBar, Button } from '@material-ui/core/'
import "./styles/Product.css";

const App: React.FC = () => {
  return (
    <Container>
      <Router>
        <AppBar color={"secondary"} position="static">
          <div className={"headerButtons"}>
            <Toolbar>
              <Button color="inherit">
                <Link to="/gloves">Gloves</Link>
              </Button>
              <Button color="inherit">
                <Link to="/facemasks">Facemasks</Link>
              </Button>
              <Button color="inherit">
                <Link to="/beanies">Beanies</Link>
              </Button>
            </Toolbar>
          </div>
        </AppBar>
        <Route path="/">
          <Redirect to="/gloves" />
        </Route>
        <Route path="/gloves">
          <ProductsContainer productName={"gloves"} />
        </Route>
        <Route path="/facemasks">
          <ProductsContainer productName={"facemasks"} />
        </Route>
        <Route path="/beanies">
          <ProductsContainer productName={"beanies"} />
        </Route>
      </Router>
    </Container>
  )
}

export default App;
