import React from 'react';
import err from '../Img/err.png';
import styled from 'styled-components';

const ConteinerError = styled.div`
background-image: url(../Img/err.png);
width: 100%;
height: 100%;
background-repeat: no-repeat;
`

export default function Error() {

    return (
        <ConteinerError>
            ERROR
        </ConteinerError>
    )
}