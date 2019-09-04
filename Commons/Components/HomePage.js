import React, {Component} from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import DayCmp from "./DayCmp";


export default class HomePage extends Component {

    constructor(){
        super()

    }

    state ={
        dayCmp: [{
            title: 'Umido',
            date: '02/09/2019'
        },{
            title: 'Vetro',
            date: '03/09/2019'
        }]
    }


    render() {
        let dayList = []

        for(let i = 0; i < this.state.dayCmp.length; i++){
            dayList.push(
                <DayCmp dayCmp={this.state.dayCmp[i]} key={'cmp-' + i}/>
            )
        }

        return (
            <View style={styles.homePageContainer}>
                <View style={styles.cityContainer}>
                    <Text style={styles.city}>
                       {this.props.city}
                    </Text>
                </View>

                <View style={styles.scrollViewContainer}>
                    <ScrollView contentContainerStyle={{flexGrow: 8}} style={styles.scrollViewArea}>
                        {dayList}
                    </ScrollView>
                </View>
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
        justifyContent: 'center',
        borderColor: 'green',
        borderBottomWidth: 2,
        marginLeft: 5,
        marginRight: 5
    },
    city:{
        fontWeight: 'bold',
        fontSize: 20
    },
    scrollViewArea:{
        //flex:8,

    },
    scrollViewContainer:{
        flex:8
    }
})


