import React from 'react'
import {View, Text,
    Modal,
    TouchableHighlight,
    StyleSheet
} from 'react-native'

export default  class  MenuRight extends React.Component {

    constructor(props){
        super(props)
    }

    setModalVisible = () => {
        this.props.showModal()
    }

    render(){
        return(
            <View style={styles.mainContainer}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => this.setModalVisible()}
                   >
                    <View style={styles.infoContainer}>
                        <View style={styles.noticeBorder}>
                            <Text>Hello World!</Text>
                        </View>
                        <TouchableHighlight
                            style={styles.noticeBorder}
                            onPress={() => {
                                this.setModalVisible();
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>


                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    noticeBorder: {
        borderColor: 'red',
        borderWidth: 2
    }
})
