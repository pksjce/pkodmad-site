import React from "react";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";

export default () => {
  return [
    <Header fontSize={36}>Writings</Header>,
    <SectionWrapper>
      <Paragraph>I love writing Fiction sometimes too!</Paragraph>
    </SectionWrapper>
  ];
};
