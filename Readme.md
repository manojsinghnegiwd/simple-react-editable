Simple React Editable
=====================
> Customizable , small and simple , Make every text editable

Installation
------------
```sh
npm install simple-react-editable --save
````
Usage
---
````javascript
import React from 'react';
import ReactDOM from 'react-dom';
import SimpleReactEditable from 'simple-react-editable';
ReactDOM.render(<SimpleReactEditable content="hello this thing is editable" />, document.getElementById('page'));
````
Props
-----
## Content
Takes your content to render inside the element

Customize look and feel
-----------------------
You can customize the look and feel of the element using css classes provide by the `<SimpleReactComponent />`

### .sre-edit-area
The textarea visible upon ediing the text

```html
<textarea class="sre-edit-area">hello this thing is editable</textarea>
```

### .sre-close-btn
Close button for closing visible textarea
```html
<button class="sre-close-btn" type="button">Close</button>
```

### .sre-preview
Your text is rendered inside this class
```html
<span class="sre-preview">hello this thing is editable</span>
```

### Todo
* Provide a onChange event with updated value
* New themes ( on the way )
