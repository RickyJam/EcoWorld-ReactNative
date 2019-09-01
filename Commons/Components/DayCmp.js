import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import {Icon, Image} from "react-native-elements";

export default class DayCmp extends Component {


    render () {
        return(
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image>

                    </Image>
                </View>
                <View style={styles.infoContainer}>
                    <Text>
                        Umidiccio e vetrino
                    </Text>
                    <View style={styles.infoAndDate}>
                        <Text>
                            30/11/2019
                        </Text>
                        <Icon name='info-outline' size={35}/>
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
        maxHeight: 100,
        marginRight: 5,
        marginLeft: 5
    },
    imageContainer:{
        flex: 4
    },
    infoContainer:{
        flex: 6,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    infoAndDate:{
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})
