import {Text, StyleSheet, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import NoteModel from '../models/NoteModel';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Card = (note: NoteModel): JSX.Element => {
  return (
    <View style={styles.card}>
      <Text style={[styles.text, styles.cardTitle]}>{note.title}</Text>
      <Text style={[styles.text, styles.cardContent]}>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  card: {
    width: width,
    height: 150,
    marginTop: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default Card;
