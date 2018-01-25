import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    bottom: 5px;
    right: 10px;
`
export default () => {
    return [<Wrapper>
        Powered by &nbsp;
        <a
            style={{ color: "#b2d4ff" }}
            href="https://www.gatsbyjs.org"
            target="_blank"
        >
            GatsbyJs
      </a>
    </Wrapper>]
}