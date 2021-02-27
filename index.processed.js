/** @jsx ChildishReact.createElement */
const BaseComponent = ChildishReact.createElement("div", {
  className: "baseComponent",
  style: {
    padding: "10px"
  }
}, ChildishReact.createElement("p", {
  style: {
    margin: 0
  }
}, "Hi! I am the First Childish JSX. \uD83D\uDC76\uD83C\uDFFB \uD83D\uDE4C\uD83C\uDFFB"));

/** @jsx ChildishReact.createElement */
const FunctionalComponent = props => {
  return ChildishReact.createElement("div", {
    className: "functionalComponent",
    style: {
      padding: "10px"
    }
  }, ChildishReact.createElement("p", {
    style: {
      margin: 0
    }
  }, "Hi! I am the First Childish Functional Component. \uD83D\uDC76\uD83C\uDFFB \uD83D\uDE4C\uD83C\uDFFB"), props.age > 15 && props.age < 21 && ChildishReact.createElement("p", {
    style: {
      margin: 0
    }
  }, "Look I grew up to be an amazing Functional Component.\uD83D\uDC66\uD83C\uDFFB \uD83D\uDE4C\uD83C\uDFFB"));
};

var _ref = ChildishReact.createElement("p", null, "Hi! I am the First Childish Class Component. \uD83D\uDC66\uD83C\uDFFB \uD83D\uDE4C\uD83C\uDFFB");

/** @jsx ChildishReact.createElement */
class ClassComponent extends ChildishReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStateImplemented: false
    };
  }

  render() {
    return ChildishReact.createElement("div", {
      className: "classComponent",
      style: {
        padding: "10px"
      }
    }, _ref, this.props.age >= 21 && ChildishReact.createElement("p", {
      style: {
        margin: 0
      }
    }, "Look I grew up to be an amazing Class Component. \uD83D\uDC68\uD83C\uDFFB \uD83D\uDE4C\uD83C\uDFFB"));
  }

}

/** @jsx ChildishReact.createElement */
const RenderAll = ChildishReact.createElement("div", {
  className: "wrapper"
}, ChildishReact.createElement("div", {
  className: "component-container"
}, BaseComponent), ChildishReact.createElement("div", {
  className: "component-container"
}, ChildishReact.createElement(FunctionalComponent, {
  age: 16
})), ChildishReact.createElement("div", {
  className: "component-container"
}, ChildishReact.createElement(ClassComponent, {
  age: 21
})));
ChildishReact.render(RenderAll, document.getElementById("root")); // setTimeout(() => ChildishReact.render(RenderAll, document.getElementById("root")), 2000);
