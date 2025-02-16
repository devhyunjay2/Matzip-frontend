import {StyleSheet} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MapHomeScreen = () => {
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton
    />
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
export default MapHomeScreen;
