import React from 'react';
import ReactDOM from 'react-dom';

export default class SimpleReactEditable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			content: '',
			element_class: 'sre'
		};
		this.openEditing = this.openEditing.bind(this);
		this.closeEditing = this.closeEditing.bind(this);
		this.changeContent = this.changeContent.bind(this);
		this.renderEditable = this.renderEditable.bind(this);
		this.renderPreview = this.renderPreview.bind(this);
	}

	componentDidMount() {
		this.setState({
			content: this.props.content ? this.props.content: ''
		});
	}

	closeEditing (e) {
		let editing = this.state.editing;
		this.setState({
			editing: false
		})

		// if props are passed call them
		if(this.props.onEditingClose){
			this.props.onEditingClose(e, this.state.content);
		}
	}

	openEditing (e) {
		let editing = this.state.editing;
		this.setState({
			editing: true
		})

		// if props are passed call them
		if(this.props.onEditingOpen){
			this.props.onEditingOpen(e, this.state.content);
		}
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
				<textarea autoFocus className={this.state.element_class + "-edit-area"} onChange={this.changeContent} value={this.state.content} onBlur={this.closeEditing}/>
				<div>
					<button className={this.state.element_class + "-close-btn"} onClick={this.closeEditing} type="button">Close</button>
				</div>
			</div>
		)
	}

	renderPreview () {
		return (
			<span className={this.state.element_class + "-preview"} onClick={this.openEditing}>
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