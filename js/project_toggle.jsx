var React = require('react');
var ReactDOM = require('react-dom');

export default function (props) {

    var style = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '1px'
    };

    return (
        <div style={style}>
            <select className="form-control">
                <option> Test </option>
            </select>
        </div>
    );
};