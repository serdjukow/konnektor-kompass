import { useState } from 'react';
import './button-start-test.scss'



const ButtonStartTest = ({ onClick }) => {
    const [animate, setAnimate] = useState(false)

    const animateButton = () => {
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false)
        }, 700);
    };

    return (
        <div onClick={() => {
            onClick()
            animateButton()
        }} class={`bubbly-button ${animate && 'animate'}`}>Start test</div>
    )
}

export default ButtonStartTest