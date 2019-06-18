import React from 'react';

function Button(props) {

  console.log(props)

  let btnText = props.text || '확인';

/*
  let btnText = '';

  if (props.text === '') {
    btnText = '확인';
  }

  */

  return (
    <div style={{ color: props.color }}>
      {btnText}
    </div>
  )
}

export default Button;