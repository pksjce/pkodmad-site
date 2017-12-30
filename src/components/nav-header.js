import styled from "styled-components";

const Header = styled.div`
  margin-top: 20px;
  text-align: center;
  padding: 5px;
  background: brown;
  @media (min-width: 420px) {
    margin: 10px 20%;
    text-align: right;
    background: none;
  }
`;

export default Header;
