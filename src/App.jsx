import { CartContainer, Navbar, Modal } from './components';
import { useSelector, useDispatch } from 'react-redux';

import { calculateTotal, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    console.log(dispatch(getCartItems()));
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
