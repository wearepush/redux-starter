/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.scss';
import cx from 'classnames';

const Button = (props) => {
  const { label, type, variant, disabled, size, ...other } = props;
  console.log(props);
  return (
    <button
      type={type}
      disabled={disabled}
      size={size}
      {...other}
      className={cx(styles.button, {
        [styles['button--' + variant]]: !!variant,
        [styles['button--' + size]]: !!size,
      })}
    >
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'success',
    'secondary',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'disabled',
    'outlined-primary',
    'outlined-success',
    'outlined-secondary',
    'outlined-danger',
    'outlined-warning',
    'outlined-info',
    'outlined-dark',
  ]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  type: 'button',
  label: 'Button',
  variant: 'primary',
  size: 'medium',
  disabled: false,
};
export default Button;
