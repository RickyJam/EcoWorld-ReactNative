import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Header from './Commons/Components/Header'

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <Header/>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({

});

export default App;
