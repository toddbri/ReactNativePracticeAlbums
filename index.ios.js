

//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a component (a component is a JS function that returns some amount of JSX)
const App = () => (

    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
  );


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
