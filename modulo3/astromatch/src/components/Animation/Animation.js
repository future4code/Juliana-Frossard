import Lottie from 'react-lottie';
import react from 'react';
import styled from 'styled-components';
import loading from '../Animation/loading.json'
import { useState } from 'react/cjs/react.development';

export default function SelecMatchs (props) {
    
    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <div>
            <Lottie options={defaultOptions}
              height={200}
              width={200}/>

        </div>

    )
}