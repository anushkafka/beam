import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import MapView from "react-native-maps";

export default class MyLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },

      error: null
    };
  }

  componentDidMount() {
    const { WIDTH, HEIGHT } = Dimensions.get("window");
    const ASPECT_RATIO = WIDTH / HEIGHT;

    this.watchId = navigator.geolocation.watchPosition(
      position => {
        let region_copy = { ...this.state.region };
        region_copy.latitude = position.coords.latitude;
        region_copy.longitude = position.coords.longitude;
        region_copy.latitudeDelta = 0.00922 * 1.5;
        region_copy.longitudeDelta = region_copy.latitudeDelta * ASPECT_RATIO;
        this.setState({
          region_copy
        });
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView initialRegion={this.state.region} />

        <MapView
          style={styles.map}
          showsUserLocation={true}
          region={this.state.region}
          onRegionChange={region => this.setState({ region })}
          onRegionChangeComplete={region => this.setState({ region })}
        >
          <MapView.Marker coordinate={this.state.region} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
