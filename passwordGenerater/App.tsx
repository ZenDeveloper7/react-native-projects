import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function App() {
  const [passwordLength, setPasswordLength] = useState(6);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*(){}[]:;<>,.?/-_=+";

  function reset() {
    setPasswordLength(6);
    setHasLowercase(false);
    setHasUppercase(false);
    setHasNumbers(false);
    setHasSymbols(false);
    setPassword("");
  }

  function generate() {
    var temp = "";
    for (let i = 0; i < passwordLength; i++) {
      temp = temp.concat(getCharacter());
    }
    setPassword(temp);
  }

  function getCharacter(): string {
    switch (getRandomNumber(4)) {
      case 1:
        if (hasNumbers) {
          return numbers.charAt(getRandomNumber(numbers.length));
        }
      case 2:
        if (hasSymbols) {
          return symbols.charAt(getRandomNumber(symbols.length));
        }
      case 3:
        if (hasLowercase) {
          return lowerCaseAlphabets.charAt(
            getRandomNumber(lowerCaseAlphabets.length)
          );
        }
      case 4:
        if (hasUppercase) {
          return upperCaseAlphabets.charAt(
            getRandomNumber(upperCaseAlphabets.length)
          );
        }
      default:
        return lowerCaseAlphabets.charAt(
          getRandomNumber(lowerCaseAlphabets.length)
        );
    }
  }

  function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.mainHeading}>Password Generator</Text>
      <View style={styles.lengthRow}>
        <Text style={{ flex: 2 }}>Password Length</Text>
        <TextInput
          style={styles.textInput}
          placeholder="eg: 8"
          keyboardType="numeric"
          // defaultValue="6"
          // value={passwordLength.toString()}
          onChangeText={(text) => setPasswordLength(Number(text))}
        />
      </View>

      <View style={[styles.lengthRow, { marginTop: 10 }]}>
        <Text style={{ flex: 2 }}>Include Lowercase letters</Text>
        <BouncyCheckbox
          fillColor="skyblue"
          onPress={(isChecked: boolean) => {
            setHasLowercase(isChecked);
          }}
        />
      </View>

      <View style={[styles.lengthRow, { marginTop: 10 }]}>
        <Text style={{ flex: 2 }}>Include Uppercase letters</Text>
        <BouncyCheckbox
          fillColor="#FDD36A"
          onPress={(isChecked: boolean) => {
            setHasUppercase(isChecked);
          }}
        />
      </View>
      <View style={[styles.lengthRow, { marginTop: 10 }]}>
        <Text style={{ flex: 2 }}>Include Numbers</Text>
        <BouncyCheckbox
          fillColor="#4E31AA"
          onPress={(isChecked: boolean) => {
            setHasNumbers(isChecked);
          }}
        />
      </View>
      <View style={[styles.lengthRow, { marginTop: 10 }]}>
        <Text style={{ flex: 2 }}>Include Symbols</Text>
        <BouncyCheckbox
          fillColor="#EB455F"
          onPress={(isChecked: boolean) => {
            setHasSymbols(isChecked);
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-evenly"
        }}
      >
        <Pressable
          style={[
            styles.button,
            { flex: 1, marginEnd: 5, backgroundColor: "#2F58CD" }
          ]}
          onPress={generate}
        >
          <Text style={styles.buttonText}>Generate</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { flex: 1, marginStart: 5 }]}
          onPress={reset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>

      <Text style={[styles.output, { marginTop: 20 }]}>
        Password : {password}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20
  },
  mainHeading: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30
  },
  lengthRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    height: 45,
    width: 70,
    padding: 10,
    borderRadius: 7
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  },
  button: {
    backgroundColor: "skyblue",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center"
  },
  output: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  }
});
