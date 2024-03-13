// src/Wallpaper.js
import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import wallpaperImage from './assets/wallpaper.jpg';

const Wallpaper = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={wallpaperImage} style={styles.background}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Wallpaper;