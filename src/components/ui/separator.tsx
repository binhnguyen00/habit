import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface SeparatorProps {
  style?: ViewStyle;
}

export function Separator({ style }: SeparatorProps) {
  return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E5E5EA",
    width: "100%",
    marginVertical: 8,
  },
});
