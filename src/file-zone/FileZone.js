import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import fetchSynonyms from '../api';
import './FileZone.css';

class FileZone extends Component {
    constructor(props, context) {
        super(props, context);
        document.execCommand('styleWithCss', false, true);
        this.state = {
            isLoading: false,
            selection: {},
            word: '',
            synonyms: []
        };
    }

    async onContextMenu() {
        const { focusNode, anchorOffset, focusOffset } = getSelection();
        this.setState({
            isLoading: true,
            selection: { focusNode, anchorOffset, focusOffset },
            synonyms: []
        });
        const word = focusNode.data ? focusNode.data.slice(anchorOffset, focusOffset) : '';
        const synonyms = await fetchSynonyms(word);
        this.setState({
            isLoading: false,
            word,
            synonyms
        });
    }

    onMenuItemClick(e, { word }) {
        const { focusNode, anchorOffset, focusOffset } = this.state.selection;
        focusNode.textContent = focusNode.textContent.slice(0, anchorOffset) +
            word +
            focusNode.textContent.slice(focusOffset);
    }

    render() {
        return (
            <div id="file-zone">
                <ContextMenuTrigger id="context-menu-trigger">
                    <div id="file" contentEditable={true}>
                        {this.props.text}
                    </div>
                </ContextMenuTrigger>
                <ContextMenu id="context-menu-trigger" onShow={this.onContextMenu.bind(this)}>
                    <MenuItem disabled>
                        {
                            this.state.isLoading ?
                                'Loading synonyms...' :
                                this.state.synonyms.length ?
                                    `Synonyms for "${this.state.word}":` :
                                    `No synonyms found for "${this.state.word}"`
                        }
                    </MenuItem>
                    {
                        this.state.synonyms.length ? [
                            <MenuItem key={'_divider'} divider />,
                            this.state.synonyms.map(
                                word => <MenuItem key={word} data={{word}} onClick={this.onMenuItemClick.bind(this)}>
                                    {word}
                                </MenuItem>
                            )
                        ] : ''
                    }
                </ContextMenu>
            </div>
        );
    }
}

export default FileZone;
