### ChildishReact 👶

It is a small JavaScript library mockup of **ReactJS,** for building User Interfaces.
It is a basic library to understand the working of React under the hood.

###### Available methods:

```javascript
/**
     * Create the Virtual DOM Object
     * @param {string} type - type of the element
     * @param {object} props - attributes of the element
     * @param {array} children - list the child elements
     * @returns {object} - returns the virtual DOM Object
*/

createElement(type, props, ...children)
```

```javascript
/**
     * Render vdom in the container
     * @param {object} vdom - the virtual DOM object
     * @param {HTMLElement} container - DOM element to put the vdom elements
*/

render(vdom, container)
```

###### Internal methods:

```javascript
/**
   * Create the actual DOM elements
   * @param {object} vdom - the virtual DOM object
   * @returns - returns the DOM element created from the vdom object
*/

createDom(vdom)
```

```javascript
/**
   * Set the attributes of the actual DOM Element
   * @param {HTMLElement} element - actual DOM Element
   * @param {object} props - attributes to set
*/

setElementProps(element, props)
```