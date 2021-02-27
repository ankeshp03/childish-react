/** @jsx ChildishReact.createElement */
/*** @jsxFrag ChildishReact.createFragment */
// import BaseComponent from "./components/BaseComponent.js";
// import FunctionalComponent from "./components/FunctionalComponent.js";
// import ClassComponent from './components/ClassComponent.js';

// console.log(ChildishReact);

const RenderAll = (
	<div className="wrapper">
		{/* <div className="component-container">{BaseComponent}</div>
		<div className="component-container">
			<FunctionalComponent age={16} />
		</div>
		<div className="component-container">
			<ClassComponent age={21} />
		</div> */}
	</div>
);

ChildishReact.render(RenderAll, document.getElementById("root"));
