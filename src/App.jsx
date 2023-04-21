import { CartContainer, Navbar, Modal } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
