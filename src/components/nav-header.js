import styled from "styled-components";

const Header = styled.div`
  background-image: linear-gradient(firebrick, brown);
  box-shadow: 0 1px 2px #ac1d1c;
  margin-top: 20px;
  text-align: center;
  text-shadow: 0 1px 2px #ac1d1c;
  padding: 5px;
  @media (min-width: 420px) {
    margin: 10px 20%;
    text-align: right;
    background: none;
  }
`;

export default Header;
