import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItem';
import AddToDo from './components/addTodo';
import TaskList from './screens/task_list';
import Home from "./screens/home";

export default function App() {

    return (
        <Home></Home>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
