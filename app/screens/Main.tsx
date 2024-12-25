import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import MessagesComponent from "../features/messages/MessagesComponent";

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <MessagesComponent textInputStyle={styles.textInputStyle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 16,
  },
  textInputStyle: {
    backgroundColor: "#E6F7FF",
  },
});
