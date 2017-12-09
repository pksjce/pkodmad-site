import React from 'react';
import Me from './me.jpg';
import styled from 'styled-components'

const ImageCrop = styled.div`
    height: 200px;
    width: 200px;
    overflow:hidden;
    border-radius: 50%;
    margin:auto;
`

const Image = styled.div`
    width: 400px;
    height: 300px;
    margin: -21px 0 0 -166px;
`

export default () => {
    return <ImageCrop><Image ><img src={Me} alt='Pavithra Kodmad' /></Image></ImageCrop>
}