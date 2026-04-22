import { Separator } from "@/components/ui";
import { GlobalStyles } from "@/styles/global";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, Button, FlatList, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("https://gist.githubusercontent.com/binhnguyen00/8109814e8ac0251d51e8e3d8d6b7a49e/raw/2b525896da25786dfd8e832e55bf5ad2ac149603/users.json").then((res) => res.json()),
  });

  return (
    <ScrollView>
      <Text style={GlobalStyles.title}> Habits </Text>
      <Button
        title="Press Me"
        onPress={() => alert("You pressed")}
      />

      {isLoading && <ActivityIndicator size="large" />}

      {isError && <Text>Error...</Text>}

      {data && (
        <FlatList
          data={data}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
        />
      )}
    </ScrollView>
  );
}