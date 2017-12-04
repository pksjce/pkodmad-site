import React from "react";
import ReactCallReturn from "react-call-return";

const yeild = ReactCallReturn.unstable_createReturn;
const awaity = ReactCallReturn.unstable_createCall;

export class NavigationItem extends React.Component {
  render () {
    const {onClick, item, isBack} = this.props;
    const {id, name} = item;
    return <div onClick={onClick} key={id}>{isBack ? `back-${name}` : name}</div>;
  }
}
export class Navigation extends React.Component {
  constructor (props) {
    super();
    this.state = {
      stack: props.stack,
      stackStack:[{
        stack: props.stack
      }],
      loading: false
    }
  }
  updateState = (stackItem) => {
    this.setState({
      stackStack: [...this.state.stackStack, stackItem],
      loading: false
    })
  }
  updateStack = (item) => {
    if (typeof item.children === 'function') {
      this.setState({
        loading: true
      });
      item.children().then(items => this.updateState({
        back: item,
        stack: items,
        loading: false
      }))
    } else {
      this.updateState({
        back: item,
        stack: item.children
      })
    }
   
  }
  goBack = () => {
    const newStack = [...this.state.stackStack];
    newStack.pop();
    this.setState({
      stackStack: newStack
    })
  }
  awaitRender = (currentStack, back) => (props, yeilds) => {
    return yeilds.map(y => {
      console.log(y)
      return (
        <div>
          {y.renderLocalNav && y.renderLocalNav(this.goBack, this.updateStack, currentStack, back, this.state.loading)}
          {y.renderGlobal && y.renderGlobal()}
        </div>
      );
    });
  }
  render () {
    const {stack: currentStack, back} = this.state.stackStack[this.state.stackStack.length - 1];
    console.log('rerear')
    return <div>
      {awaity(
        this.props.children,
        this.awaitRender(currentStack, back),
        this.props
      )}
    </div>
  }
}

export class LocalNav extends React.Component {
  onClick = (item, updateStack) => event => {
    if(item.children) {
      updateStack(item);
    }
  }
  renderItem = (item, onClick) => <NavigationItem onClick={onClick} item={item}/>
  render () {
    return yeild({
        renderLocalNav: (goBack, updateStack, stack, back, loading) => {
          return <div>
            {back ? <NavigationItem onClick={this.onClick(back, goBack)} item={back} isBack /> : null}
            {loading ? <div>Loading</div>:stack.map(item => this.renderItem(item, this.onClick(item, updateStack)))}
          </div>
        }
    })
  }
}


export class GlobalNav extends React.Component {
  render() {
    return yeild({
      renderGlobal: () => {
        return this.props.children;
      }
    });
  }
}

/*
TODO - Build a Navigation component

Features 
- Must support NavItems
- Must support Nested Navigation
- With Animation
*/


