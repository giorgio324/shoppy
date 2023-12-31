import { BsCart } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import NavLinkItem from './NavLinkItem';
import CustomButton from '../customElements/CustomButton';
import MobileNavbar from './MobileNavbar';
import { logoutUser } from '../../slices/authSlice';
import { toast } from 'react-toastify';
const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const isUserLoggedIn = useSelector((state) => state.auth.authenticated);
  const uniqueCartItems = cartItems.length;
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success('Logged out successfully');
  };

  return (
    <nav className='w-full py-4 bg-white border-b border-b-gray-800 fixed top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between px-5 md:px-10'>
        <h1 className='font-bold font-tiltPrism text-2xl md:text-3xl'>
          <Link to='/'>SHOPPY</Link>
        </h1>
        <div className='flex gap-10'>
          <ul className='hidden  items-center gap-6 md:flex'>
            <NavLinkItem to={'/'} text={'Home'} />
          </ul>
          <div className='flex gap-4 md:gap-8 items-center justify-center'>
            <Link to={'/cart'} className='relative cursor-pointer'>
              <BsCart className='text-2xl md:text-3xl text-black' />
              <span className='absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-orange-900 text-white w-4 md:w-5 h-4 md:h-5 rounded-full flex items-center justify-center text-xs'>
                {uniqueCartItems}
              </span>
            </Link>
            {isUserLoggedIn ? (
              <CustomButton
                text={'Log Out'}
                px={2}
                py={1}
                onClick={handleLogout}
              />
            ) : (
              <Link to={'/login'}>
                <CustomButton text={'Login'} px={2} py={1} />
              </Link>
            )}

            <button className='md:hidden'>
              <GiHamburgerMenu
                className='text-3xl text-black'
                onClick={toggleNavbar}
              />
            </button>
          </div>
        </div>
      </div>
      <MobileNavbar isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    </nav>
  );
};
export default Navbar;
