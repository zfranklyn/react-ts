import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppComponent from './components/AppComponent';
import './index.scss';
import '!style-loader!css-loader!../node_modules/@blueprintjs/core/dist/blueprint.css';

ReactDOM.render(<AppComponent/>, document.getElementById('root'));

