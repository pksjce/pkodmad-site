import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const LinkItem = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default () => {
  return [
    {
      id: "home",
      link: <LinkItem to="/">Home</LinkItem>,
      name: "Home"
    },
    {
      id: "tech-stuff",
      link: <LinkItem to="/tech-stuff">Tech Articles</LinkItem>,
      name: "Tech Articles"
    },
    {
      id: "writing",
      link: <LinkItem to="/prose">Writing</LinkItem>,
      name: "Writing"
    },
    {
      id: "talks",
      link: <LinkItem to="/talks">Talks</LinkItem>,
      name: "Talks"
      // children: () => {
      //   return new Promise((resolve, reject) => {
      //       setTimeout(() => resolve([{
      //         id: 10,
      //         name: 'item3-child1'
      //       },{
      //         id:11,
      //         name: 'item4-child2'
      //       }]), 1000)
      //   })
      // }
    }
  ];
};
