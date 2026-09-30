import { Text, View, StyleSheet, TextInput, ActivityIndicator, Button } from "react-native";
import {Image } from "expo-image"
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Image source={{uri: "https://tenor.com/HHZOPnpoWPMAAAAe/why-you-lying.png"}} style={styles.image}/>
      <TextInput placeholder="Email" />
      <ActivityIndicator size={"large"}/>
      <Link href={"/about"}>Go to about screen</Link>
      <Button title="Navigate" onPress={() => router.push("/about")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  }
});
