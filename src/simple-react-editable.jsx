import React from 'react';

export default class SimpleReactEditable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			content: ''
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
			<div className="editable-content">
				<textarea onChange={this.changeContent} value={this.state.content} onBlur={this.toggleEditing} />
				<div>
					<button onClick={this.toggleEditing} type="button">Close</button>
				</div>
			</div>
		)
	}

	renderPreview () {
		return (
			<span className="editable-preview" onClick={this.toggleEditing}>
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