import React, { Component } from 'react';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import './ControlPanel.css';

class ControlPanel extends Component {
    format(action, value = null) {
        document.execCommand(action, false, value);
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={() => this.format('bold')}><b>B</b></button>
                    <button className="format-action" type="button" onClick={() => this.format('italic')}><i>I</i></button>
                    <button className="format-action" type="button" onClick={() => this.format('underline')}><u>U</u></button>
                    <ColorPicker
                        className="format-action"
                        color={"#369"}
                        onChange={data => this.format('forecolor', data.color)}
                    />
                    <button className="format-action" type="button" onClick={() => this.format('outdent')}>&lt;</button>
                    <button className="format-action" type="button" onClick={() => this.format('indent')}>&gt;</button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
