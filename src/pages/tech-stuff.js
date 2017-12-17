import React from "react";
import Header from "../components/header";
import Paragraph, { SectionWrapper } from "../components/paragraph";

export default () => {
  return [
    <Header fontSize={36}>Tech Articles</Header>,
    <SectionWrapper>
      <Paragraph>
        I sometimes write about Javascript and related frontend technologies
      </Paragraph>
    </SectionWrapper>
  ];
};
