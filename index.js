'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleReactEditable = function (_React$Component) {
	_inherits(SimpleReactEditable, _React$Component);

	function SimpleReactEditable(props) {
		_classCallCheck(this, SimpleReactEditable);

		var _this = _possibleConstructorReturn(this, (SimpleReactEditable.__proto__ || Object.getPrototypeOf(SimpleReactEditable)).call(this, props));

		_this.state = {
			editing: false,
			content: ''
		};
		_this.toggleEditing = _this.toggleEditing.bind(_this);
		_this.changeContent = _this.changeContent.bind(_this);
		_this.renderEditable = _this.renderEditable.bind(_this);
		_this.renderPreview = _this.renderPreview.bind(_this);
		return _this;
	}

	_createClass(SimpleReactEditable, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				content: this.props.content ? this.props.content : ''
			});
		}
	}, {
		key: 'toggleEditing',
		value: function toggleEditing() {
			var editing = this.state.editing;
			this.setState({
				editing: !editing
			});
		}
	}, {
		key: 'changeContent',
		value: function changeContent(e) {
			var content = e.target.value;
			this.setState({
				content: content
			});
		}
	}, {
		key: 'renderEditable',
		value: function renderEditable() {
			return _react2.default.createElement(
				'div',
				{ className: 'editable-content' },
				_react2.default.createElement('textarea', { onChange: this.changeContent, value: this.state.content, onBlur: this.toggleEditing }),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'button',
						{ onClick: this.toggleEditing, type: 'button' },
						'Close'
					)
				)
			);
		}
	}, {
		key: 'renderPreview',
		value: function renderPreview() {
			return _react2.default.createElement(
				'span',
				{ className: 'editable-preview', onClick: this.toggleEditing },
				this.state.content
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.state.editing ? this.renderEditable() : this.renderPreview()
			);
		}
	}]);

	return SimpleReactEditable;
}(_react2.default.Component);

exports.default = SimpleReactEditable;
