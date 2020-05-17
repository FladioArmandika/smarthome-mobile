import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/template/StyledText';
import Container from '../components/template/Container';
import Padding from '../components/template/Padding';
import Room from '../components/Room';


export default function HomeScreen() {
  return (
    <Container>
      <ScrollView style={styles.container}>
        <Padding all={10}>
          <Room/>
        </Padding>
      </ScrollView>
    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
});
