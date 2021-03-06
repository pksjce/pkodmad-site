import React from "react";
import Me from "./me.jpg";
import styled from "styled-components";

const ImageCrop = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: 8em;
  width: 8em;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
  margin-top: 20px;
`;

const Image = styled.div`
  width: 15em;
  margin: -0.5em 0 0 -6em;
`;

export default () => {
  return (
    <ImageCrop>
      <Image>
        <img src={Me} alt="Pavithra Kodmad" />
      </Image>
    </ImageCrop>
  );
};
