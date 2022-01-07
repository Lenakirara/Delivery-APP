import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

export default function NavBar(props) {
  const { section1, section2 } = props;

  const {
    handleRedirect,
  } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('user');
    handleRedirect('/');
  };

  const currentUser = () => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (!data) return handleRedirect('/');

    const { name } = data;
    return name;
  };

  return (
    <header>
      { section1 && (
        <button
          onClick={ () => section1.function1() }
          type="button"
          data-testid="customer_products__element-navbar-link-products"
        >
          {section1.nameSection1}
        </button>)}
      { section2 && (
        <button
          onClick={ () => section2.function2() }
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          {section2.nameSection2}
        </button>)}
      <span data-testid="customer_products__element-navbar-user-full-name">
        {currentUser()}
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        Sair
      </button>
    </header>
  );
}

NavBar.propTypes = {
  section1: PropTypes.objectOf.isRequired,
  section2: PropTypes.objectOf.isRequired,
};