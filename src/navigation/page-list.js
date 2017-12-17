import React from "react";
import Link from "gatsby-link";

export default () => {
  return [
    {
      id: "home",
      name: <Link to="/">Home</Link>
    },
    {
      id: "tech-stuff",
      name: <Link to="/tech-stuff">Tech Articles</Link>
    },
    {
      id: "writing",
      name: <Link to="/prose">Writing</Link>
    },
    {
      id: "talks",
      name: <Link to="/talks">Talks</Link>
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
