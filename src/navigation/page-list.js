export default () => {
    return [{
        id: 'home',
        name: 'Home',

      },
      {
        id: 'blog',
        name: 'Blog',
        children: [{
          id: 'writing',
          name: 'Writings'
        },{
          id:'techy',
          name: 'Techy'
        }]
      },
      {
        id: 'about',
        name: 'About',
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
      }]
}