import styled from "styled-components";
import Link from "gatsby-link";

const LinkWrapper = styled(Link)`
  margin: 0 10px;
  display: inline-block;
  color: white;

  font-weight: 700;
  text-decoration: none;
  @media (min-width: 420px) {
    font-size: 22px;
  }
`;

export default LinkWrapper;
