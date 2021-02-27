// --- Method ---
// createElement - create elements from JSX transpiled by Babel
// render - render the parent element to the container element
// diff - diffing the virtual doms before updation
// mount - mounting the component for the first time
// update - updating the component if already mounted

// render -> getComponentType -> diff | diffComponent -> update (simple | component) -> mount (simple | component)

const ChildishReact = (function () {
	// Create the vdom object
	function createElement(type, props, ...children) {
		let childrenList = [];
		children.forEach((child) => {
			if (child && typeof child !== "boolean") {
				if (typeof child === "string") {
					childrenList.push({
						type: "text",
						props: {
							textNode: child
						},
						children: []
					});
				} else {
					childrenList.push(child);
				}
			}
		});
		return {
			type,
			props,
			children: childrenList
		};
	}

	// Render vdom in the container
	// function render(vdom, container, oldDom = container.firstChild) {
	// 	const componentType = getComponentType(vdom);
	// 	if(componentType === "string") {
	// 		container.appendChild(createDom(vdom));
	// 	}
	// 	else if(componentType === "function") {
	// 		container.appendChild(createFunctionalComponentDom(vdom));
	// 	}
	// 	else {
	// 		container.appendChild(createClassComponentDom(vdom));
	// 	}
	// }

	function render(vdom, container, oldDom = container.firstChild) {
		console.log(vdom);
		diff(vdom, oldDom, container);
	}

	function diff(newDom, oldDom, container) {
		if (!oldDom) {
			mount(newDom, container);
		} else if (getComponentType(newDom) === "string") {
			diffComponent(newDom, oldDom, container);
		} else {
			diffElementNode(newDom, oldDom, container);
		}
	}

	function diffElementNode(newDom, oldDom, container) {
		
	}

	function diffComponent(newDom, oldDom, container) {
		
	}

	function getComponentType(vdom) {
		if (typeof vdom.type === "string") {
			return "string";
		}
		if (typeof vdom.type === "function") {
			if (
				vdom.type.prototype &&
				typeof vdom.type.prototype.render === "function"
			) {
				return "class";
			}
			return "functional";
		}
	}

	function mount(vdom, container) {
		const dom = mountNode(vdom, container);
		dom.__vdom__ = vdom;
	}
	
	function mountNode(vdom, container) {
		let dom = null;
		if (getComponentType(vdom) === "string") {
			dom = mountElementNode(vdom, container);
		} else {
			dom = mountComponent(vdom, container);
		}
		return dom;
	}

	function mountElementNode(vdom, container) {
		const dom = createDom(vdom);
		container.appendChild(dom);
		return dom;
	}

	function mountComponent(vdom, container) {
		let dom = null;
		const componentType = getComponentType(vdom);
		if(componentType === "string") {
			dom = mountElementNode(vdom, container);
		}
		else if(componentType === "functional") {
			dom = mountNode(vdom.type(vdom.props), container);
		}
		else {
			const component = new vdom.type(vdom.props);
			dom = mountNode(component.render(), container);
		}
		return dom;
	}

	function updateElementNode() {}

	function updateComponent() {}

	function unmountNode(element) {}

	// Create dom elements and set the attributes
	function createDom(vdom) {
		let newElement = null;
		// Create text node for text
		if (vdom.type === "text") {
			newElement = document.createTextNode(vdom.props.textNode);
		} else {
			// Create the dom element
			newElement = document.createElement(vdom.type);
			setElementProps(newElement, vdom.props);
		}

		// Iterate the children, create the element and set the attributes
		vdom.children.forEach((child) => mountNode(child, newElement));
		return newElement;
	}

	function createFunctionalComponentDom(vdom) {}

	function createClassComponentDom(vdom) {}

	// Set attributes to the element (special case value and checked attributes)
	function setElementProps(element, props) {
		for (let attr in props) {
			if (attr === "value" || attr === "checked") {
				element[attr] = vdom.props[attr];
			} else if (attr === "className") {
				element.setAttribute("class", props[attr]);
			} else if(attr === "style") {
				element.setAttribute("style", getStyleString(props[attr]));
			} else if(attr.slice(0,2) === "on") {
				element.addEventListener(attr.slice(2).toLowerCase(), props[attr], false);
			} else {
				element.setAttribute(attr, props[attr]);
			}
		}
	}
	
	function getStyleString(styleObject) {
		return JSON.stringify(styleObject).replace(/[{}"]/g, '').replace(/,/g, "; ").replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
	}

	function Component(props) {
			this.props = props;
			this.state = {};
			this.prevState = {};
		}

	return {
		createElement,
		render,
		Component
	};
})();

// export default ChildishReact;
