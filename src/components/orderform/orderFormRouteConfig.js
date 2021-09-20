
import ShoppingLayout from "../builder/Layout"
import Billing from "./Billing";
import Payment from "./Payment";
import Shipping from "./Shipping";

const routeConfig = [
  { path: "/", name: "Cart", Component: ShoppingLayout },
  { path: "/order-info/shipping", name: "Shipping", Component: Shipping },
  { path: "/order-info/billing", name: "Billing", Component: Billing },
  { path: "/order-info/payment", name: "Payment", Component: Payment },
];

export default routeConfig
