import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

const App = (): JSX.Element => {

  const [result, setResult] = useState(0)

  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <View style={{backgroundColor:'black'}}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  resultText: {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "poppins",
    color: "white",
    alignItems:'flex-end'
  },
  verticalArthmeticButtons: {
    backgroundColor: "#f09a36",
    color: "white",
    padding: 10
  },
  horizontalArthmeticButtons: {
    backgroundColor: "#a6a6a6",
    color: "black",
    padding: 10
  }
});

export default App;
