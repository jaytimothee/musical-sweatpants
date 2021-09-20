import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiProvider from "./providers/ApiProvider";
import CartProvider from "./providers/CartProvider";
import CurrentAlbumProvider from "./providers/CurrentAlbumProvider";
import OrderFormProvider from "./providers/OrderFormProvider";
import OrderComplete from "./components/builder/OrderComplete";
import OrderInfoLayout from "./components/orderform/OrderInfo";
import ShoppingLayout from "./components/builder/Layout";
import "./index.css";
import "./App.css";
import "./fonts/sf-pro.css";

function App() {
  return (
    <Router>
      <ApiProvider>
        <CartProvider>
          <OrderFormProvider>
            <CurrentAlbumProvider>
              <div className="App">
                <Switch>
                  <Route exact path="/" component={ShoppingLayout} />
                  <Route path="/order-info" component={OrderInfoLayout} />
                  <Route path="/order-complete" component={OrderComplete} />
                </Switch>
              </div>
            </CurrentAlbumProvider>
          </OrderFormProvider>
        </CartProvider>
      </ApiProvider>
    </Router>
  );
}

export default App;
