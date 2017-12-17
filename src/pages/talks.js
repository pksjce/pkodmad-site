import React from "react";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";

export default () => {
  return [
    <Header fontSize={36}>Talks</Header>,
    <SectionWrapper>
      <Paragraph>Here are the talks I have given.</Paragraph>
    </SectionWrapper>
  ];
};
