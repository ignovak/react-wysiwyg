import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            text: ''
        };
        this.getText();
    }

    getText() {
        getMockText().then((result) => {
            this.setState({
                text: result
            });
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel/>
                    <FileZone text={this.state.text}/>
                </main>
            </div>
        );
    }
}

export default App;
