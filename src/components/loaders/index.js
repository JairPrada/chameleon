import React from 'react'
import Lottie from 'lottie-react-web';
import animationData from './animations/chameleon.json';



export const Loader = () => {
    return (
        <Lottie
            options={{
                animationData: animationData,
                autoplay: true,
                loop: true,
            }}
        />

    )
}
