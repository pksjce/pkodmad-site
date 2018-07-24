---
path: "/blog/render-props-vs-hoc"
date: "2018-07-24"
title: "Why is React with render props better than good ole' HOCs?"
draft: true
tags: 
- "react"
---

`render props` is a pattern to compose and reuse components in React. It has been brewing around for a couple of years and is now accepted as a legit pattern due to

1. adoption in many widely used react libraries such as react-router

2. adoption within React api like the new Context API

3. proven strategies for testing.

For me, I’ve been hearing about this pattern everywhere!

### When to use render props?

The render props pattern is typically used when you want to reuse a particular functionality in different view components. Using a render prop we abstract the functionality from the purely view concerns.

In the React documentation about render props, there is an example where the functionality of mouse movement tracking is abstracted such that it can be used on any view.

### What’s the alternative?

Before render props became popular, the go-to way of performing such an abstraction was using a Higher Order Component.(HOC)

#### Example

Let's build a small example where data is supplied to a view using a component. We have a component called View which require an object called results which are fetched from an API. It also requires a callback method called refetch using which it refreshes its state to sync to any new data the api might have.

Here's the View component.

``` javascript
// view.js

import React from 'react';

export default ({props}) => {
  return <div>
    <select>{props.result}</select>
    <button onClick={props.refetch}>Sync</button>
  </div>
}
```
To supply data to this component, we can take the following two approaches.

**HOC pattern**

``` javascript
// data-supplier

import React, {Component} from 'react';
import {fetchService} from './services';

export default (wrappedComponent, url) => {
  return class DataSupplier extends Component {
    state = {
      results: null,
      loading: false,
    };
    componentDidMount(){
      this.fetch(url);
    }
    fetch() {
      this.setState({
        loading: true
      });
      fetchService().then((data) => {
        this.setState({
          loading:false,
          results: data
        })
      }); 
    }
    render() {
      return <WrappedComponent 
        results={this.state.results}
        loading={this.state.loading}
        refetch={this.fetch} />
    }
  }
}
```
This is used as 

``` javascript
// index.js

import React from 'react';
import withDataSupplier from './data-supplier';
import View from './view';

const url = 'https://my.api';
export default withDataSupplier(View, url);
```
**React Render Props pattern**

``` javascript
// data-supplier.js

import React, {Component} from 'react';

export default class DataSupplier extends Component {
  state = {
    results: null,
    loading: false,
  };
  componentDidMount(){
    this.fetch(this.props.url);
  }
  fetch() {
    this.setState({
      loading: true
    });
    fetchService().then((data) => {
      this.setState({
        loading:false,
        results: data
      })
    }); 
  }
  render() {
    return children({
      results: this.state.results,
      refetch: this.fetch
    });
  }
}
```
This would be used as

``` javascript
//index.js

import React from 'react';
import DataSupplier from './data-supplier';
import View from './view';

export default () => {
  const url = 'https://my.api';
  return <DataSupplier url={url}>
    {
      (results, refetch) => {
        return <View results={results} refetch={refetch} />
      }
    }
  </DataSupplier>
}
```

### Benefits

In case of the HOC, the DataSupplier looks like a blackbox. It is not immediately clear what the HOC requires to work and what props it supplies to the View . But looking at the render props implementation, the composition is much clearer.

**Flexibility**

The restriction with an HOC is that it can only wrap one View. It cannot customize itself by accepting multiple View components.

For example, in the HOC case, if we wanted to display a Loading component while the fetch is in progress, we would have to modify the View component itself.

``` javascript
// view.js

import React from 'react';
import Loading from './loading';

export default ({props}) => {
  return loading ? <Loading /> : 
  <div>
    <select>{props.result}</select>
    <button onClick={props.refetch}>Sync</button>
  </div>
}
```

 In the case of a render prop pattern, if we wanted to display a Loading component, we would do something like

``` javascript
//index.js

import React from 'react';
import DataSupplier from './data-supplier';
import View from './view';
import Loading from './loading';

export default () => {
  return <DataSupplier>
    {
      (results, loading, refetch) => {
        return loading ? <Loading /> : 
        <View results={results} refetch={refetch} />
      }
    }
  </DataSupplier>
}
```

Now suddenly, we have handled the Loading concern independent of the View component. This allows us the flexibility of swapping Loading and View components independently, which would not have been a clear option with the HOC.

Taking this further, you could have a data-supplier component with an opinionated loading component.

This would exempt the user of the component from even thinking about the loading state. We could do the same for error components too.

``` javascript
// data-supplier-with-loading.js

import React from 'react';
import DataSupplier from './data-supplier';
import View from './view';
import Loading from './loading';

export default ({children}) => {
  return <DataSupplier>
    {
      (results, loading, refetch) => {
        return loading ? <Loading /> : 
        children(results, refetch)
      }
    }
  </DataSupplier>
}
```

**Composability**

Be it HOC or render prop, it is best that one component abstracts one atomic functionality. This promoted reusability. It is common that some use-cases may want more than one functional behaviours sent to them. 

Say, we need two separate data suppliers to send different data to our View component.

**HOC [I dont know how this would work]**

``` javascript
// index.js

import React from 'react';
import withDataSupplier from './data-supplier';
import View from './view';

const url1 = 'https://my-api1';
const url2 = 'https://my-api2';

const DataSupplier1 = withDataSupplier(View, url1);
const DataSupplier2 = withDataSupplier(DataSupplier, url2);

export default () => {
  return <DataSupplier2 />
}
```

We would also need to modify the DataSupplier HOC to receive random props and send them across to its children somehow. But it cannot namespace effectively and hardcoding that will make it harder to scale this pattern.

**Render Props**

``` javascript
// index.js

import React from 'react';
import DataSupplier from './data-supplier';
import View from './view';

const url1 = 'https://my-api1';
const url2 = 'https://my-api2';

export default () => {
  return <DataSupplier url={url1}>
  {(results: firstResult, refetch: firstRefetch ) => {
    return <DataSupplier url={url2}>
      {
        (results, refetch: secondRefetch) => {
          return <View results={...results, ...firstResult} 
             refetch={() => {firstRefetch();secondRefetch()}} />
        }
      }
    </DataSupplier>
  }}
  </DataSupplier>
}
```

We did not even have to change the View component or the DataSupplier to support this use case. All the wiring up for this was done by the Consumer component, which I thought was pretty convenient.

### Conclusion

I’ve been mulling over the benefits of the render prop pattern for sometime now since we have started using them at work. The flexibility and openness of the pattern are what I have discovered as clear benefits for now. Are there any other use cases where using render prop pattern has unlocked features which are radically new?

