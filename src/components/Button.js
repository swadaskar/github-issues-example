import React from 'react'

const Button = ({text, className, count, onClick}) => {
    return (
      <>
        <button type="button" onClick={onClick}>
          <i className={className}></i> {text}
        </button>
        <label>{count}</label>
      </>
    );
}

export default Button