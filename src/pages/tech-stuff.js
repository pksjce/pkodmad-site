import React from 'react';
import Header from '../components/header';
import Paragraph from '../components/paragraph';

export default () => {
    return [
        <Header fontSize={36}>Tech Articles</Header>,
        <Paragraph>I sometime write about Javascript and related frontend technologies</Paragraph>
    ]
}