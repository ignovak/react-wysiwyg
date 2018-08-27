import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
    constructor(props, context) {
        super(props, context);
        document.execCommand('styleWithCss', false, true);
    }

    render() {
        return (
            <div id="file-zone">
                <div id="file" contentEditable={true}>

                </div>
            </div>
        );
    }
}

export default FileZone;
