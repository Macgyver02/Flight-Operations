// src/App.js
import React from 'react';
import { Text, View } from 'react-native';
import FlightScheduleList from './FlightScheduleList';
import Wallpaper from './Wallpaper';

const App = () => {
  return (
    <Wallpaper>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          Flight Scheduler
        </Text>
        <FlightScheduleList />
      </View>
    </Wallpaper>
  );
};

export default App;