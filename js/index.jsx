var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

import ProjectToggle from './project_toggle.jsx';

var Board = React.createClass({
    render: function() {

        var style = {
            border: '1px solid grey',
            padding: '10px',

            // Remove this later
            height: '100px'
        };

        return (
            <div style={style} className="board">
                <ProjectToggle />
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});