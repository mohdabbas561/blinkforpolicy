import React, { useContext ,useEffect , useState } from "react";
import { BsCartX } from "react-icons/bs";
import { calculateTotal, displayMoney } from "../helpers/utils";
import useDocTitle from "../hooks/useDocTitle";
import cartContext from "../contexts/cart/cartContext";
import CartItem from "../components/cart/CartItem";
import EmptyView from "../components/common/EmptyView";
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  useDocTitle("Cart");

  const { cartItems } = useContext(cartContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { cartItem, setCartItem } = useContext(cartContext);

  useEffect(() => {
    // Listen for user authentication state changes
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Unsubscribe from user authentication state changes when component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Store the cart items in local storage whenever they change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItem]);

  
  const handleCheckout = () => {
    if (user) {
      // User is logged in, redirect to checkout page
    navigate('/CheckoutPage');
    } else {
      // User is not logged in, redirect to login page
      navigate('/PhoneLogin')
      ;
      
    }
    
  };
  

  const cartQuantity = cartItems.length;

  // total original price
  const cartTotal = cartItems.map((item) => {
    return item.originalPrice * item.quantity;
  });

  const calculateCartTotal = calculateTotal(cartTotal);
  const displayCartTotal = displayMoney(calculateCartTotal);

  // total discount
  const cartDiscount = cartItems.map((item) => {
    return (item.originalPrice - item.finalPrice) * item.quantity;
  });

  const calculateCartDiscount = calculateTotal(cartDiscount);
  const displayCartDiscount = displayMoney(calculateCartDiscount);

  // final total amount
  const totalAmount = calculateCartTotal - calculateCartDiscount;
  const displayTotalAmount = displayMoney(totalAmount);

  return (
    <>
      <section id="cart" className="section">
        <div className="container">
          {cartQuantity === 0 ? (
            <EmptyView
              icon={<BsCartX />}
              msg="Your Cart is Empty"
              link="/all-products"
              btnText="Start Shopping"
            />
          ) : (
            <div className="wrapper cart_wrapper">
              <div className="cart_left_col">
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>

              <div className="cart_right_col">
                <div className="order_summary">
                  <h3>
                    Order Summary &nbsp; ( {cartQuantity}{" "}
                    {cartQuantity > 1 ? "items" : "item"} )
                  </h3>
                  <div className="order_summary_details">
                    <div className="price">
                      <span>Original Price</span>
                      <b>{displayCartTotal}</b>
                    </div>
                    <div className="discount">
                      <span>Discount</span>
                      <b>- {displayCartDiscount}</b>
                    </div>
                    <div className="delivery">
                      <span>Delivery</span>
                      <b>Free</b>
                    </div>
                    <div className="separator"></div>
                    <div className="total_price">
                      <b>
                        <small>Total Price</small>
                      </b>
                      <b>{displayTotalAmount}</b>
                    </div>
                  </div>
                  <Button onClick={handleCheckout} className="btn btn-primary">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
