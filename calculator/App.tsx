import React, { useState, Key } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";

import NumberPad from "./components/NumberPad";
import ButtonTheme from "./components/ButtonTheme";

var screenHeight = Dimensions.get("window").height / 3;

var first = "";
var second = "";
var operation = "";

const App = (): JSX.Element => {
  const [output, setOutput] = useState(0);

  let isDarkMode = useColorScheme() === "dark";

  const onButtonPress = (value: string | number) => {
    if (typeof value == "number") {
      if (operation == "") {
        first = first + value.toString();
        setOutput(Number(first));
        console.log("first - %s", first);
      } else {
        second += value.toString();
        setOutput(Number(second));
        console.log("secondary - %s", second);
      }
    } else if (value == "c") {
      first = "";
      second = "";
      operation = "";
      setOutput(0);
    } else if (value != "=") {
      operation = value;
      console.log("Operation - %s", operation);
    } else {
      var a = doOperation(operation);
      setOutput(a);
      console.log(output);
    }
  };

  const doOperation = (operation: string): number => {
    if (operation == "+") {
      var answer = Number(first) + Number(second);
      console.log("Answer - %s", answer);
      return answer;
    } else if (operation == "-") {
      return Number(first) - Number(second);
    } else if (operation == "x") {
      return Number(first) * Number(second);
    } else if (operation == "/") {
      return Number(first) / Number(second);
    } else if (operation == "%") {
      return Number(first) % Number(second);
    } else {
      return Number(first) + Number(second);
    }
  };

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
    <SafeAreaView >
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
              onPress={() => onButtonPress(value)}
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
    height: screenHeight,
    padding: 20
  },
  resultText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    alignSelf: "flex-end",
    justifyContent: "flex-end"
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
