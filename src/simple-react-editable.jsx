import React from 'react';

export default class SimpleReactEditable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			content: '',
			element_class = 'sre';
		};
		this.toggleEditing = this.toggleEditing.bind(this);
		this.changeContent = this.changeContent.bind(this);
		this.renderEditable = this.renderEditable.bind(this);
		this.renderPreview = this.renderPreview.bind(this);
	}

	componentDidMount() {
		this.setState({
			content: this.props.content ? this.props.content: ''
		});
	}

	toggleEditing () {
		let editing = this.state.editing;
		this.setState({
			editing: !editing
		})
	}

	changeContent (e) {
		let content = e.target.value;
		this.setState({
			content: content
		})
	}

	renderEditable () {
		return (
			<div>
				<textarea className={this.state.element_class + "-edit-area"} onChange={this.changeContent} value={this.state.content}/>
				<div>
					<button className={this.state.element_class + "-close-btn"} onClick={this.toggleEditing} type="button">Close</button>
				</div>
			</div>
		)
	}

	renderPreview () {
		return (
			<span className={this.state.element_class + "-preview"} onClick={this.toggleEditing}>
				{this.state.content}
			</span>
		)
	}

	render() {
		return(
			<div>
				{this.state.editing ? (this.renderEditable()) : (this.renderPreview())}
			</div>
		)
	}
}