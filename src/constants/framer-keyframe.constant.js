import { keyframes } from '@emotion/react';

export const FramerAnimationKeyframes = {
    bouncingIcon: keyframes`
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }`,
    bouncingFlow: keyframes`
        0%,
        20% ,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(100px);
        }
        60% {
            transform: translateY(0);
        }`,
};
