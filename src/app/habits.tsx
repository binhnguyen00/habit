import { GlobalStyles } from "@/styles/global";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.title}> List </Text>
      <Button title="Add Habit" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})