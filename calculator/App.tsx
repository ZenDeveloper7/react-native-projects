import React, { useState, Key } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Dimensions
} from "react-native";

import NumberPad from "./components/NumberPad";
import ButtonTheme from "./components/ButtonTheme";

var screenHeight = Dimensions.get("window").height / 3;

const App = (): JSX.Element => {
  const [output, setOutput] = useState(0);

  const isDarkMode = useColorScheme() === "dark";

  const onButtonPress = (id: string) => {};

  const keys: (string | number)[] = [
    "c",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "x",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "="
  ];

  return (
    <SafeAreaView>
      <View style={styles.resultScreen}>
        <Text
          style={[styles.resultText, { color: isDarkMode ? "white" : "black" }]}
        >
          {output}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        {keys.map((value) => {
          return (
            <NumberPad
              key={value}
              value={value}
              theme={
                typeof value == "number" || value == "."
                  ? ButtonTheme.primary
                  : value == "/" ||
                    value == "x" ||
                    value == "-" ||
                    value == "+" ||
                    value == "="
                  ? ButtonTheme.tertiary
                  : ButtonTheme.secondary
              }
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  resultScreen: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: screenHeight,
    paddingEnd: 20,
    paddingBottom: 20
  },
  resultText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white"
  },
  numberPad: {
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 100,
    fontSize: 30,
    marginStart: 5,
    marginTop: 10,
    height: 80,
    width: 80
  }
});

export default App;
