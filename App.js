import React, {Fragment, Component} from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';

import Header from './Commons/Components/Header'
import FirstLogin from "./Commons/Components/FirstLogin"
import HomePage from "./Commons/Components/HomePage";

export default class App extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        isFirstLogin: true,
        city: ''
    }

    promisedSetState = (newState) => {
        return new Promise((resolve) => {
            this.setState(newState, () => {
                resolve()
            });
        });
    }

    changeView = (city) => {
        this.setState({
            isFirstLogin: false,
            city: city
        },() => {
            alert('you did it, call back')
        })

    }

    render() {

        let mainComponent = null
        if(this.state.isFirstLogin)
            mainComponent = (<View style={styles.firstLoginContainer} >
                <FirstLogin style={styles.firstLogin} changeView={this.changeView}/>
                </View>);
        else
            mainComponent = (
                <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.scrollViewArea}>
                    <HomePage city={this.state.city}/>
                </ScrollView>
            )

        return (
            <Fragment>
              <SafeAreaView style={styles.SafeAreaMain}>
                  <Header/>
                  {mainComponent}
              </SafeAreaView>
            </Fragment>
        );
    }
};

const styles = StyleSheet.create({
    SafeAreaMain: {
        flex:1,
        flexDirection : 'column',
        justifyContent: 'flex-start'
    },
    Header: {
        flex: 1
    },
    scrollViewArea: {
        marginTop: 24,
        marginBottom: 24,
    },
    firstLoginContainer: {
        flex:6,
        flexDirection : 'column',
        justifyContent: 'flex-start',
        marginTop: 100
    },
    firstLogin: {
        flex:5,
    },
});