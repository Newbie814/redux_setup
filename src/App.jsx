import { CartContainer, Navbar, Modal } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
      <Modal />
    </main>
  );
}
export default App;
