import React, {Component} from 'react'
import {View, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native'
import {Button, Text} from "react-native-elements";

export default class FirstLogin extends Component {

    constructor(){
        super();
        this.state = {
            city: '',
            br:"\n"
        }
    }

    componentDidMount(): void {
    }

    validateChangeView = () => {
        //controlli sul comune inserito
        this.props.changeView(this.state.city)
    }

    render() {
        const br = "\n"
        return (
            <KeyboardAvoidingView style={styles.homePageContainer}
                                  behavior="padding">
                <View style={styles.textInputContainer}>
                    <Text style={styles.presentationText}>
                        Benvenuto nella nostra applicazione!{br}
                        Comunicandoci il vostro comune di residenza,{br}
                        noi potremo fornirle tutte le informazioni{br}
                        riguardanti la raccolta dei rifiuti.

                        {br}{br}{br}
                        Iniziamo:
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(city) => {this.setState({city})}}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.button}
                        onPress={this.validateChangeView}
                        title="Avanti"
                        accessibilityLabel="Vai Alla HomePage"/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    homePageContainer:{
        margin: 20,
        justifyContent: 'center',
        flex:1
    },
    textInputContainer:{
        flex: 1,
        alignItems: 'center'
    },
    presentationText:{
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 17,
    },
    textInput: {
        height: 35,
        minWidth: 250,
        maxWidth: 250,
        borderColor: '#299A02',
        borderWidth: 2,
        borderRadius: 3
    },
    button: {
        //flex:1,
        backgroundColor: '#299A02',
        //alignSelf: 'flex-end',
        //position: 'absolute',
        //bottom: 35,
    },
    buttonContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
})