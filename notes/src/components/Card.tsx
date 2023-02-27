import { Text, StyleSheet, View, Dimensions } from "react-native";
import React, { Component } from "react";
import NoteModel from "../models/NoteModel";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Card = (note: NoteModel): JSX.Element => {
  return (
    <View style={[styles.card]}>
      <Text style={[styles.text, styles.cardTitle, {flex: 1}]}>{note.title}</Text>
      <Text style={[styles.text, styles.cardContent, {flex: 3}]}>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black"
  },
  card: {
    height: 130,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#ECF2FF",
    borderRadius: 20
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  cardContent: {
    fontSize: 14,
    marginTop: 10
  }
});

export default Card;
