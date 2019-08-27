import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import {Icon, Text} from 'react-native-elements'


export default class Header extends Component {

    state = {
        iconSize: 30
    }


    render() {
        function openMenuSection(){
            ///*<Icon name='menu' onPress={openMenuSection()}/>  ICONA DELL'APPLICAZIONE*/
        }
        return (
            <View style={styles.Header}>
                <Icon style={styles.Icon} name='menu' size={this.state.iconSize}/>
                <View style={styles.Title}>
                    <Text style={styles.TitleText}> EcoWorld</Text>
                </View>
                <Icon style={styles.ButtonMenu} name='menu' size={this.state.iconSize} onPress={() => alert("menu openned!")}/>
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    Header : {
        flexDirection : 'row',
        minHeight: 50
    },
    Icon : {
        flex: 2
    },
    Title: {
        flex : 6,
        alignItems: 'center'
    },
    TitleText: {
        color: 'green',
        fontSize: 20
    },
    ButtonMenu: {
        flex : 2
    }
});
