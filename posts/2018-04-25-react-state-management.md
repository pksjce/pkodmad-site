---
path: "/blog/react-state-management"
date: "2018-04-25"
title: "Managing State in React"
tags:  
    - "javascript"
    - "react"
---

This post assumes you know how to code using React. The concept of writing components which are a function of your state, comes with an important problem of reconciling and solving the problem of state management.

'State' is any data that you must maintain in your frontend application. Data can arrive in your application in the form of

1.  Static data/json or arrays you define in your components.
2.  Data fetched from a backend api resource or an external source like localStorage or sessionStorage
3.  Data used to maintain the UI itself. Is a modal open? Is the request successful/loading or failed. Is the mouse button clicked? Has window been resized?

This data can change with user interaction or with api interactions. Changed data must be displayed to the user reliably and accurately.

When it comes to abstracting these functionalities into convenient constructs, we are spoiled for choice. We have a ton of libraries which perform these actions for us in various different ways. At first glance, it might appear to be chaos but each of the libraries exists to solve a specific problem that users may encounter while working on React applications.

### What does a state management solution give you?

After trying out various solutions, comparing and contrasting them, I've distilled the manifestation of state management into a handful of requirements. When talking about state management libraries we will see how they fare with respect to these properties.

1.  Provide a state container - We must have a place to put our state. The more central this place is, the easier it is to share it among components, to reason about changes and to have a clear idea about it in our minds.
2.  Allow components to individially select state that is relevant to them - Each component must be allowed to subscribe to state that it requires to render itself effectively.An update to the state must inform all its Subscriber components of the change. The change must trigger a re-render of these components.
3.  A mechanism to update state - Each component must be able to affect change in the state in a reasonable manner, preferably in an immutable way.
4.  Make asynchronous calls or handle other sideeffects - A component must be able to perform asynchronous actions like api calls or timed updates and the state container must respond in a uniform manner to this. It must be able to update state after with the result of the asynchronous action and then affect re-render in the concerned components.
5.  Support for middleware - This essentially decides if the state management tool has decent dev-tools support. A nice to have feature if you ask me.

## React Component State

This is the default mechanism provided by React to work with state inside of a component. It is recommended that you start your work by using this and see how much you can control your application using React state alone!

### How's it done?

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

|                    |     |                                                                                                                                                           |
| ------------------ | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State Container    | 🤷  | State container inside the component. Must be passed as props to other components in the tree.                                                            |
| Selector           | 🙊  | No support. The child component will receive props that it may not need as it is being passed to other parts of the tree                                  |
| Updater            | 🙊  | The component itself calls `setState` to make the update. Other components have to supplied a callback that will do this in the state contained component |
| Async support      | ⚒   | This is mostly DIY.                                                                                                                                       |
| Middleware support | 🛠   | Can be DIY or use the React dev tools which are not specific to state management.                                                                         |

## Redux

Redux has been around for quite [some time](https://github.com/reactjs/redux/commit/8bc14659780c044baac1432845fe1e4ca5123a8d) now. It's one of the most widely used state management system and one that I'm most familiar with. It has been loved and hated by the community in equal parts! But it has managed to stay as the top choice for state management because

1.  It is a simple solution.
2.  It is flexible enough to meet the needs of the most complex application.
3.  It was one of the first of such solutions.
4.  it follows the flux pattern of one directiional update of React
5.  There is a wealth of resources around it like middleware and documentation. Most of the problems that you may encounter while using Redux has been solved to a well documented pattern.

The flow of data is easy to visualize as
interaction -> action -> reducer -> store update -> refresh connected component

To provide us with this cognitive simplicity, redux relies on a some boilerplate. A store has tobe created in the very beginning. Middleware, and external dependencies have to be declared at this point. A set of reducers have to be defined and combined to a single root reducer. An action has to be created in an action creator. It must have a type and payload. Actions and state data have to be "connect"ed to a component so that state is available for usage and actions are avaialble for dispatch. Each action must be handled in a reducer inside a switch case. The case must update the state slice that is part of the reducer in an immutable way. Furthermore, selectors must be used to access state values from the store.

All this can seem really unnecessary when you really dont need that degree of flexibility. Many times, users may be happy with a more restricted state management solution than one with so much indirection.

|                    |     |                                                                                                                                                                                                                                                     |
| ------------------ | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State Container    |     | Store is the container that keeps all the state and other methods such as dispatch. You can access the state using the getState method. A component can use the react-redux bindings to access the part of the state tree it is most interested in. |
| Selector           |     | Can use a method that returns the required state or some composable memoizable solution such as reselect.                                                                                                                                           |
| Updater            |     | A component dispatches an action which is captured in a reducer to update the state, which triggers a re render of the component which is concerned with the data change.                                                                           |
| Async support      |     | Provides first class support using middleware with options like thunk/redux-observable/redux-saga                                                                                                                                                   |
| Middleware support |     | Again first class support. Thus making for beautiful and interactive dev tools with support for debugging and time travel.                                                                                                                          |
