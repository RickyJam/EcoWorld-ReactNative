import React, {Fragment, Component} from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import Header from './Commons/Components/Header'
import FirstLogin from "./Commons/Components/FirstLogin"
import HomePage from "./Commons/Components/HomePage";

export default class App extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        //isFirstLogin: true,
        city: ''
    }

    changeView = (city) => {
        AsyncStorage.setItem("city", city);
        this.setState({
            city: city
        })

    }

    isAlreadyJoined = () =>{
        try {

            AsyncStorage.getItem("city").then((city) => {
                if(city !== undefined && city !== null && city !== '')
                    this.setState({
                        city: city
                    })
                else
                    return null
            }).done();

        }catch (e) {
            return false;
        }
    }

    render() {

        let mainComponent = null
        if(this.isAlreadyJoined())
            mainComponent = (
                <View style={styles.firstLoginContainer} >
                <FirstLogin style={styles.firstLogin} changeView={this.changeView}/>
                </View>)
            ;
        else
            mainComponent = (
                <HomePage style={styles.firstLogin} city={this.state.city}/>
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