import React, {Fragment, Component} from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet
} from 'react-native';

//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

import Header from './Commons/Components/Header'
import FirstLogin from "./Commons/Components/FirstLogin"
import HomePage from "./Commons/Components/HomePage"
import MenuRight from "./Commons/Components/MenuRight"

export default class App extends Component {

    constructor(props) {
        super(props)
        this.isFirstLog()
    }

    state = {
        isFirstLogin: undefined,
        city: '',
        modalVisible: false
    }

    changeView = (city) => {
        AsyncStorage.setItem("city", city);
        this.setState({
            city: city,
            isFirstLogin: false
        })

    }

    showModal = () => {
        this.setState({
          modalVisible: !this.state.modalVisible
        })
    }

    componentDidMount(): void {
    }



    isFirstLog = async () => {
        try {
            await AsyncStorage.getItem("city").then((city) => {
                if (city !== undefined && city !== null && city !== '') {
                   this.changeView(city)
                } else {
                    this.setState({
                        isFirstLogin: true
                    })
                }
            }).done();
        } catch (e) {
            console.log('error logged in isAlreadyJoined()')
        }
    }


    render() {

        let mainComponent = null
        if(this.state.isFirstLogin)
            mainComponent = (
                <View style={styles.firstLoginContainer} >
                    <FirstLogin style={styles.firstLogin} changeView={this.changeView}/>
                </View>)
            ;
        else if(this.state.isFirstLogin === false) {
            mainComponent = (
                <HomePage style={styles.firstLogin} city={this.state.city}/>
            )
        }

        return (
            <Fragment>
              <SafeAreaView style={styles.SafeAreaMain}>
                  <Header showModal={this.showModal}/>
                  {mainComponent}

                  <MenuRight showModal={this.showModal} modalVisible={this.state.modalVisible}/>

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
    menu:{
        position: 'absolute',
        top: 0,
        right: 0
    }
});
