import React, {useState, Key} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const App = (): JSX.Element => {
  const [result, setResult] = useState('0');

  const isDarkMode = useColorScheme() === 'dark';

  const onButtonPress = (id: string) => {
    if (id == 'c' || id =='+/-') {
      setResult('Arithemtic Operation');
    } else {
      setResult('Number')
    }
  };

  const keys: string[] = [
    'c',
    '+/-',
    '%',
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
  ];

  return (
    <SafeAreaView>
      <View style={styles.resultScreen}>
        <Text
          style={[styles.resultText, {color: isDarkMode ? 'white' : 'black'}]}>
          {result}
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        {keys.map(value => {
          return (
            <TouchableOpacity
              style={[
                styles.horizontalArthmeticButtons,
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    value == 'c' || value == '+/-' || value == '%'
                      ? '#a6a6a6'
                      : value == '/' ||
                        value == 'x' ||
                        value == '-' ||
                        value == '+'
                      ? '#f09a36'
                      : 'black',
                },
              ]}
              onPress={() => onButtonPress(value)}
              key={value}>
              <Text
                style={{
                  color:
                    value == 'c' || value == '+/-' || value == '%'
                      ? 'black'
                      : 'white',
                  fontSize: 30,
                }}>
                {value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const height = Dimensions.get('window').height * 0.25;

const styles = StyleSheet.create({
  resultScreen: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: height,
    paddingEnd: 20,
    paddingBottom: 20,
  },
  resultText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  verticalArthmeticButtons: {
    backgroundColor: '#f09a36',
    color: 'white',
    marginEnd: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    fontSize: 30,
    height: 80,
    width: 80,
  },
  horizontalArthmeticButtons: {
    backgroundColor: '#a6a6a6',
    marginTop: 10,
    borderRadius: 100,
    height: 80,
    width: 80,
  },
});

export default App;
