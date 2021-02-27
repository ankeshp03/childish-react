/** @jsx ChildishReact.createElement */

class ClassComponent extends ChildishReact.Component {
	constructor(props) {
		super(props);
		this.state = {
			isStateImplemented: false
		};
	}
	
	render() {
		return (
			<div className="classComponent" style={{padding: "10px"}}>
				<p>Hi! I am the First Childish Class Component. 👦🏻 🙌🏻</p>
				{
				this.props.age >= 21 &&
				<p style={{margin: 0}}>Look I grew up to be an amazing Class Component. 👨🏻 🙌🏻</p>
				}
				{
					// this.state.isStateImplemented &&
					// 	<p>Yay! my state is working. 🕺🏻</p>
				}
			</div>
		);
	}
}

export default ClassComponent;