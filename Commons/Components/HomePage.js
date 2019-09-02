import React, {Component} from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import DayCmp from "./DayCmp";

import {ReactNavigation} from 'react-navigation'


export default class HomePage extends Component {

    constructor(){
        super()
    }

    render() {
        return (
            <View style={styles.homePageContainer}>
                <View style={styles.cityContainer}>
                    <Text style={styles.city}>
                       {this.props.city}
                    </Text>
                </View>

                <View style={styles.scrollViewContainer}>
                    <ScrollView contentContainerStyle={{flexGrow: 8}} style={styles.scrollViewArea}>
                        <DayCmp/>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const AppDrawerNavigation = createDrawerNavigation({

})

const styles = StyleSheet.create({
    homePageContainer:{
        justifyContent:'center',
        flex: 1
    },
    cityContainer:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    city:{
        fontWeight: 'bold',
        fontSize: 20
    },
    scrollViewArea:{
        //flex:8,
        borderColor: 'red',
        borderWidth: 2
    },
    scrollViewContainer:{
        flex:8
    }
})
