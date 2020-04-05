import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function LinksScreen() {
  return (
      <WebView source={{ uri: 'https://abnamro.nl' }} />
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
