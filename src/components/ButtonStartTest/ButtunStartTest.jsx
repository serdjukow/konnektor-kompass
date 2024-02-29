import { useState } from 'react';
import './button-start-test.scss'



const ButtonStartTest = (props) => {
    const [animate, setAnimate] = useState(false)

    const animateButton = () => {
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false)
        }, 700);
    };

    return (
        <div onClick={() => {
            props.onClick()
            animateButton()
        }} className={`bubbly-button ${animate && 'animate'}`}>{props.children}</div>
    )
}

export default ButtonStartTest