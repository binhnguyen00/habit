import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("https://gist.githubusercontent.com/binhnguyen00/8109814e8ac0251d51e8e3d8d6b7a49e/raw/2b525896da25786dfd8e832e55bf5ad2ac149603/users.json").then((res) => res.json()),
  });

  return (
    <ScrollView>
      <Text> Test </Text>
      <Button
        title="Press Me"
        onPress={() => alert("You pressed")}
      />

      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error...</Text>}
      {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
