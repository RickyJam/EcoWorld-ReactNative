import React, {Component} from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'

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

                <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.scrollViewArea}>

                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    homePageContainer:{
        justifyContent:'center',
        flex: 1
    },
    cityContainer:{
        alignItems: 'center',
        flex: 1,
        borderWidth: 2,
        borderColor: 'black'
    },
    city:{
        fontWeight: 'bold',
        flex: 1
    },
    scrollViewArea:{
        flex:8,
        borderColor: 'red',
        borderWidth: 2
    }
})