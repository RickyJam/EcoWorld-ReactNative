import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import {Icon, Image} from "react-native-elements";

const types = {
    VETRO: 'Vetro',

    PLASTICA: 'Plastica',

    UMIDO: 'Umido',
}

export default class DayCmp extends Component {

    state:{
        title: undefined,
        path: undefined,
        date: undefined
    }

    constructor(props){
        super(props)
        this.popolateState(this.props.dayCmp.title)
    }

    popolateState = (name) => {
        let path = null
        switch(name){
            case types.VETRO:
                path = require('../Graphics/vetro.png')
                break
            /*case types.PLASTICA:
                path = require('../Graphics/plastica.png')
                break
            */
            case types.UMIDO:
                 path = require('../Graphics/umido.png')
                break
            default:
                console.log('missing image...')
        }
        this.state = {
            title: this.props.dayCmp.title,
            path: path,
            date: this.props.dayCmp.date
        }
    }

    showPopupMessage = () => {

    }

    render () {
        return(
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image source={this.state.path} style={styles.image}>
                    </Image>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>
                        {this.state.title}
                    </Text>
                    <View style={styles.infoAndDate}>
                        <Text>
                            {this.state.date}
                        </Text>
                        <Icon name='info-outline' size={35} style={styles.infoIcon} onPress={() => alert('info')}/>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        maxHeight: 120,
        marginRight: 10,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'green'
    },
    imageContainer:{
        flex: 4,
        marginLeft: 5
    },
    image: {
        width: 118,
        height: 118,
        resizeMode: 'contain'
    },
    infoContainer:{
        flex: 6,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    infoAndDate:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 15,
        marginBottom: 15
    },
    infoIcon:{
    },
    title: {
        marginTop: 15,
        fontSize: 16
    }
})


