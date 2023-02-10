import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, FAB, Card, Button } from "react-native-paper";
import { StyleSheet, ScrollView, Dimensions, View } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Notes = (): JSX.Element => {
  var myNotes = [
    {
      id: 1,
      title: "Note 1",
      content: "Hey! This is my new react-native app"
    },
    {
      id: 2,
      title: "Note 2",
      content: "Hey! This is my new react-native app"
    },
    {
      id: 3,
      title: "Note 3",
      content: "Hey! This is my new react-native app"
    },
    {
      id: 4,
      title: "Note 4",
      content: "Hey! This is my new react-native app"
    },
    {
      id: 5,
      title: "Note 5",
      content: "Hey! This is my new react-native app"
    }
  ];

  return (
    <SafeAreaView style={[styles.background]}>
      <Text variant="labelLarge" style={{ marginBottom: 10 }}>
        My Notes
      </Text>
      <View style={styles.cardParent}>
        {myNotes.map((note: { id: number; title: string; content: string }) => (
          <Card style={styles.noteCard} key={note.id}>
            {/* <Card.Cover
              source={{
                uri: "https://images.pexels.com/photos/15265348/pexels-photo-15265348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }}
            /> */}
            <Card.Title title={note.title} />
            <Card.Content>
              <Text>{note.content}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 5
  },
  noteCard: {
    width : width / 2.25,
    marginBottom: 10,
  },
  cardParent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf:'flex-start',
    alignItems:'flex-start',
    justifyContent: "space-evenly"
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});

export default Notes;
