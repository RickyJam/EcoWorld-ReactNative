import React, {Fragment} from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView
} from 'react-native';

import Header from './Commons/Components/Header'
import HomePage from "./Commons/Components/HomePage";

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.SafeAreaMain}>
        <Header/>
        <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.scrollViewArea}>
            <HomePage/>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
    SafeAreaMain : {
        flex:1,
        flexDirection : 'column',
        justifyContent: 'center'
    },
    Header:{
        flex: 1
    },
    scrollViewArea:{
        marginTop: 24,
        marginBottom: 24,
    }
});

export default App;
