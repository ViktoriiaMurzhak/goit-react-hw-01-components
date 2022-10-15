import PropTypes from 'prop-types';

export const App = ({ children }) => {
  return <main>{children}</main>;
};

App.prototype = {
  children: PropTypes.node,
};
