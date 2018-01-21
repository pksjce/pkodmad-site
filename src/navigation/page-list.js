import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

export default () => {
  return [
    {
      id: "home",
      link: "/",
      name: "Home"
    },
    {
      id: "tech-stuff",
      link: "/tech-stuff",
      name: "Tech Articles"
    },
    {
      id: "writing",
      link: "/prose",
      name: "Writing"
    },
    {
      id: "talks",
      link: "/talks",
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
