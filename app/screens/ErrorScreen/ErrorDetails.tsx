import React, { ErrorInfo } from "react";
import { ScrollView, View, Text, Button } from "react-native";

export interface ErrorDetailsProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

export function ErrorDetails(props: ErrorDetailsProps) {
  return (
    <View>
      <ScrollView>
        <Text style={{ fontSize: 16, color: "#333", textAlign: "center" }}>"Oops! Something went wrong. Please try again."</Text>
        
      </ScrollView>

      <Button title="Try Again" color="#4A90E2" onPress={props.onReset} />
    </View>
  );
}
