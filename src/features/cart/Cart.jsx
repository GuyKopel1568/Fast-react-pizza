import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getUsername } from "./cartSlice";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "../cart/EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  if (!username) return null;
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>

      {<h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>}

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item, index) => (
          <CartItem item={item} key={item.id || index} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type={"primary"} to="/order/new">
          Order pizzas
        </Button>
        <Button
          onClick={() => dispatch(clearCart())}
          type={"secondary"}
          className="ml-3"
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
