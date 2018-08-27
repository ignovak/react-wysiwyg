import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    format(action) {
        document.execCommand(action, false, null);
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={() => this.format('bold')}><b>B</b></button>
                    <button className="format-action" type="button" onClick={() => this.format('italic')}><i>I</i></button>
                    <button className="format-action" type="button" onClick={() => this.format('underline')}><u>U</u></button>
                    <button className="format-action" type="button" onClick={() => this.format('outdent')}>&lt;</button>
                    <button className="format-action" type="button" onClick={() => this.format('indent')}>&gt;</button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
