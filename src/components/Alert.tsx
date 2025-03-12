import React from 'react'

interface AlertProps {
    text: string;
}


const Alert = (props: props) => {
  return (
    <div className='alert alert-primary'>{props.text}</div>
  )
}

export default Alert

//react arrow function component rafce