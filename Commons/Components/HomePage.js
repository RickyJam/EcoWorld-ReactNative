import React, {Component} from 'react'
import {View} from 'react-native'
import {Text} from "react-native-elements";

export default class HomePage extends Component {

    constructor(){
        super()
    }

    render() {
        return (
            <View>
                <Text> Per il comune di {this.props.city}, domani GG si raccogliera':</Text>
                <Text> miele </Text>
            </View>
        );
    }

}