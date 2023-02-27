import React from "react";
import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from "react-native";

import ButtonTheme from "./ButtonTheme";

type NumberPadProps = {
  value: string | number;
  theme: ButtonTheme;
  onPress(): void;
};

var numberWidth = Dimensions.get("window").width / 5;

const NumberPad = (props: NumberPadProps): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Text
        style={[
          styles.default,
          {
            color:
              props.theme == ButtonTheme.primary ||
              props.theme == ButtonTheme.tertiary
                ? "white"
                : "black",
            fontSize: 30,
            backgroundColor:
              props.theme == ButtonTheme.primary
                ? "black"
                : props.theme == ButtonTheme.secondary
                ? "#a6a6a6"
                : "#f09a36",
            width: props.value == "0" ? numberWidth * 2.25 : numberWidth
          }
        ]}
      >
        {props.value}
      </Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  default: {
    borderRadius: Math.floor(numberWidth),
    fontSize: 30,
    textAlignVertical: "center",
    textAlign: "center",
    marginStart: 5,
    marginTop: 10,
    height: numberWidth
  }
});

export default NumberPad;
