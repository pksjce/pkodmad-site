---
path: "/blog/react-state-management"
date: "2018-04-25"
title: "Managing State in React"
tags:  
    - "javascript"
    - "react"
---

React has been around for a while now. If you've developed applications or componnets using React, a common problem to have encountered is state management. 'State' is any data that you must maintain in your frontend application. It can change with user interaction or with api interactions. Changed data must be displayed to the user reliably and accurately.

After trying out various solutions, comparing and contrasting them, I've distilled the manifestation of state management into a handful of requirements. When talking about state management libraries we will see how they fare with respect to these properties.

1.  Provide a state container - We must have a place to put our state. The more central this place is, the easier it is to share it among components, to reason about changes and to have a clear idea about it in our minds.
2.  Allow components to individially select state that is relevant to them - Each component must be allowed to subscribe to state that it requires to render itself effectively.An update to the state must inform all its Subscriber components of the change. The change must trigger a re-render of these components.
3.  A mechanism to update state - Each component must be able to affect change in the state in a reasonable manner, preferably in an immutable way.
4.  Make asynchronous calls or handle other sideeffects - A component must be able to perform asynchronous actions like api calls or timed updates and the state container must respond in a uniform manner to this. It must be able to update state after with the result of the asynchronous action and then affect re-render in the concerned components.
5.  Support for middleware - This essentially decides if the state management tool has decent dev-tools support. A nice to have feature if you ask me.

#### React Component State

This is the default mechanism provided by React to work with state inside of a component. It is recommended that you start your work by using this and see how much you can control your application using React state alone!

##### How's it done?

A functional React component is stateless. It can only recieve props from its parent components. A React component that inherits from `React.Component` can hold state as a class property. This state can be updated using the method `setState` only. `setState` will update the `state` object and effect a re-render of the component it self.

```javascript
import React from "react";

export default class MyComponent extends React.Component {
  state = {
    inputText: ""
  };
  render() {
    <input
      type="text"
      onChange={event => this.setState({ inputText: event.target.value })}
      value={this.state.inputText}
    />;
  }
}
```

|     | State Container                                                                                | Selector                                                                                                                 | Updater                                                                                                                                                   | Async support       | Middleware support                                                                |
| --- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------- |
|     | 🤷‍♀️                                                                                             | 🙊                                                                                                                       | 🙊                                                                                                                                                        | ⚒                   | 🛠                                                                                 |
|     | State container inside the component. Must be passed as props to other components in the tree. | No support. The child component will receive props that it may not need as it is being passed to other parts of the tree | The component itself calls `setState` to make the update. Other components have to supplied a callback that will do this in the state contained component | This is mostly DIY. | Can be DIY or use the React dev tools which are not specific to state management. |

#### Redux

Redux has been around for quite [some time](https://github.com/reactjs/redux/commit/8bc14659780c044baac1432845fe1e4ca5123a8d) now. It's the most widely used state management system. It's pretty mature and
