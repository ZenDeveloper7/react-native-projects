import React from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  SafeAreaView,
  FlatList
} from "react-native";
import Card from "./components/Card";
import NoteModel from "./models/NoteModel";

const Notes = (): JSX.Element => {
  var myNotes: NoteModel[] = [
    {
      id: 1,
      title: "Note 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 2,
      title: "Note 2",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
    },
    { id: 3, title: "Note 3", content: "Hey! nice working with you" },
    { id: 4, title: "Note 4", content: "Hey! nice working with you" },
    { id: 5, title: "Note 5", content: "Hey! nice working with you" },
    { id: 6, title: "Note 6", content: "Hey! nice working with you" },
    { id: 7, title: "Note 7", content: "Hey! nice working with you" },
    { id: 8, title: "Note 8", content: "Hey! nice working with you" }
  ];

  return (
    <SafeAreaView style={styles.background}>
      <Text style={[styles.heading, styles.text]}>{"My\nNotes"}</Text>
      {myNotes.length == 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.text}>No Notes</Text>
        </View>
      ) : (
        <FlatList
          data={myNotes}
          renderItem={(item) => (
            <Card
              key={item.item.id}
              id={item.item.id}
              title={item.item.title}
              content={item.item.content}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  text: {
    color: "black"
  },
  heading: {
    fontSize: 40,
    marginVertical: 20,
    marginHorizontal: 10,
    fontFamily: "montserrat"
  },
  container: {}
});

export default Notes;
