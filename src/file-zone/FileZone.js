import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import './FileZone.css';

class FileZone extends Component {
    constructor(props, context) {
        super(props, context);
        document.execCommand('styleWithCss', false, true);
        this.state = {
            word: ''
        };
    }

    onContextMenu() {
        const { focusNode, anchorOffset, focusOffset } = getSelection();
        const word = focusNode.data.slice(anchorOffset, focusOffset);
        this.setState({
            word
        });
    }

    render() {
        return (
            <div id="file-zone">
                <ContextMenuTrigger id="context-menu-trigger">
                    <div id="file" contentEditable={true}></div>
                </ContextMenuTrigger>
                <ContextMenu id="context-menu-trigger" onShow={this.onContextMenu.bind(this)}>
                    <MenuItem disabled>Synonyms for "{this.state.word}":</MenuItem>
                    <MenuItem divider />
                </ContextMenu>
            </div>
        );
    }
}

export default FileZone;
