/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//require('material-design-icons/iconfont/material-icons.css');
import MyIconComplex from './icon-complex.js';
import MyIcon from './icon-simple.js';

const styles = {
    container: {
        textAlign: 'left',
        paddingTop: 100,
    },
};

var mystyle={ backgroundColor:'yellow' };

const muiTheme = getMuiTheme( {
        palette: {
                    accent1Color: deepOrange500,
                        },
});

class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }


    render() {
        return (
                <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                <h1>material-ui</h1>
                <h2>icon example simple</h2>
                <MyIcon />
                <h2>icon example complex</h2>
                <MyIconComplex />

                </div>
                </MuiThemeProvider>
               );
    }
}

export default Main;
