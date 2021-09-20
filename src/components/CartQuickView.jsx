import LineItem from './LineItem';
import { Link } from 'react-router-dom';
import useCartContext from '../Providers/CartProvider';

const CartItemRemoval = () => {
  const { cart, setCart } = useCartContext()
  return null;

}

const CartQuickView = () => {
  const { cart, subtotal } = useCartContext();

  return (
    <div id="cart-quick-view" className="box-shadow">

      {cart?.map((item, index) => (
        <div key={index} className={"flex"}>
          {/* need props */}
          <CartItemRemoval />
          <LineItem />
        </div>
      ))}


      <Link
        to="/order-info/shipping"
        className="btn heavy-text full-width link"
      >
        <span>

        </span>
      </Link>
    </div >
  );
};
