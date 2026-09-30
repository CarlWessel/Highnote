import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import {Image } from "expo-image"

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Hello Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
