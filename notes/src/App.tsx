import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Card from './components/Card';
import NoteModel from './models/NoteModel';

const Notes = (): JSX.Element => {
  var myNotes: NoteModel[] = [
    {id: 1, title: 'Note 1', content: 'Hey! nice working with you'},
    {id: 2, title: 'Note 2', content: 'Hey! nice working with you'},
    {id: 3, title: 'Note 3', content: 'Hey! nice working with you'},
    {id: 4, title: 'Note 4', content: 'Hey! nice working with you'},
    {id: 5, title: 'Note 5', content: 'Hey! nice working with you'},
    {id: 6, title: 'Note 6', content: 'Hey! nice working with you'},
    {id: 7, title: 'Note 7', content: 'Hey! nice working with you'},
    {id: 8, title: 'Note 8', content: 'Hey! nice working with you'},
  ];

  return (
    <SafeAreaView style={styles.background}>
      <Text style={[styles.heading, styles.text]}>Notes</Text>
      <ScrollView>
        {myNotes.map(e => (
          <Card key={e.id} id={e.id} title={e.title} content={e.content} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 20,
  },
  container: {},
});

export default Notes;
