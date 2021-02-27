/** @jsx ChildishReact.createElement */

const FunctionalComponent = (props) => {
	return (
		<div className="functionalComponent" style={{padding: "10px"}}>
			<p style={{margin: 0}}>
				Hi! I am the First Childish Functional Component. 👶🏻 🙌🏻
			</p>
			{props.age > 15 && props.age < 21 && (
				<p style={{margin: 0}}>
					Look I grew up to be an amazing Functional Component.👦🏻 🙌🏻
				</p>
			)}
		</div>
	);
};

export default FunctionalComponent;
