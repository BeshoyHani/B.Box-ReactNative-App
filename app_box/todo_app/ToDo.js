/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from './Card';


export default function ToDo() {
  const [task, set_task] = useState('');
  const [task_array, set_task_array] = useState([]);
  const [text_input, set_text_input] = useState('');

  function delete_item(index) {
    let tasks = [...task_array];
    tasks.splice(index, 1);
    set_task_array(tasks);
  }


  return (
    <View style={style.container}>
      <Text style={style.title}>ToDo List</Text>

      <TextInput
        value={text_input}
        style={style.input_field}
        placeholder="Type New Task"
        onChangeText={(value) => {
          set_task(value);
          set_text_input(value);
        }}

        onSubmitEditing={() => {
          if (task === "")
            return ""
          let tasks = [...task_array];
          tasks.push(task);
          set_task_array(tasks);
          set_text_input("");
          set_task("");
        }} />

      <FlatList
        data={task_array}
        renderItem={({ item, index }) => {
          return (
            <Card task={item} delete={() => delete_item(index)} />
          )
        }} />
    </View>
  );

}


const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: 34,
    color: "lightblue",
    fontWeight: "bold",
    marginBottom: 15,

  },

  input_field: {
    //backgroundColor:"gray",
    width: "95%",
    height: 40,
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 15
  },
});