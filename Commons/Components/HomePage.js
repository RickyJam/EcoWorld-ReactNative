import React, {Component} from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {Text} from "react-native-elements";

export default class HomePage extends Component {

    state = {
        text: 'Citta\'',
        comune: String,
        br:"\n"
    }

    render() {
        const br = "\n"
        return (
            <View style={styles.homePageContainer}>
                <Text style={styles.presentationText}>
                    Benvenuto nella nostra applicazione!{br}
                    Comunicandoci il vostro comune di residenza,{br}
                    noi potremo fornirle tutte le informazioni{br}
                    riguardanti la raccolta dei rifiuti.

                    {br}{br}
                    Iniziamo:
                </Text>
                <View>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuInsert: {
        flex: 5
    },
    homePageContainer:{
        margin: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
    textInputContainer: {

    },
    presentationText:{
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 15
    },
    textInput: {
        height: 35,
        minWidth: 250,
        maxWidth: 250,
        borderColor: '#299A02',
        borderWidth: 1,
        borderRadius: 3
    }
})