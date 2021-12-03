// import axios from "axios";
// import styled from "styled-components";
// import Lottie from 'react-lottie'
// import AnimationButtonNoMatch from '../Animation/buttonNOmatch.json'
// import { useState } from "react/cjs/react.development";

// const ButtonWrapper = styled.button`
//   --size: 2cm;
//   width: 1cm;
//   height: 1cm;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 2px;
//   background-color: #fff;
//   border: 0;
//   padding: 0;
//   cursor: pointer;
//   outline: 0;
//   border-radius: 100%;
//   .animation {
//     pointer-events: none;
//   }
// `;

// export default function ButtonNOMatch() {
//     const [isLiked, setIsLiked] = useState(false)
//     const [animationState, setAnimationState] = useState({
//         isStopped: true,
//         isPaused: false,
//         direction: -1
//     });

//     const defaultOptions = {
//         loop: false,
//         autoplay: false, 
//         animationData: AnimationButtonNoMatch,
//         rendererSettings: {
//           preserveAspectRatio: 'xMidYMid slice'
//         }
//       };
    
//     return (
//         <div>
//             <ButtonWrapper onClick={() => {
//         const reverseAnimation = -1;
//         const normalAnimation = 1;

//         setAnimationState({
//           ...animationState,
//           isStopped: false,
//           direction: animationState.direction === normalAnimation 
//             ? reverseAnimation
//             : normalAnimation,
//         })
//         setIsLiked(!isLiked);
//       }}>
//         <div className="animation">
//           <Lottie
//             options={defaultOptions}
//             width={400}
//             height={400}
//             direction={animationState.direction}
//             isStopped={animationState.isStopped}
//             isPaused={animationState.isPaused}/>
//         </div>
//       </ButtonWrapper>
//         </div>
//     )
// }