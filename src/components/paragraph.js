import styled from "styled-components";

const Paragraph = styled.div`
  margin: auto;
  background: white;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;

  @media (min-width: 420px) {
    margin: 10px 20%;
    padding: 20px;
  }
`;
export const SectionWrapper = styled.div`
  margin-top: 20px;
  height: 90%;
  width: 100%;
  overflow-y: auto;
  position: absolute;
`;

export const TextWrapper = styled.div`
  padding: 20px;
`;

export default Paragraph;
