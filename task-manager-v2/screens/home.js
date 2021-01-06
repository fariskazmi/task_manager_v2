import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import TaskList from '../screens/task_list'

export default function Home() {
  return (
      <View style={styles.container}>
        <Header></Header>
        <TaskList></TaskList>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
