import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ToDoItem from '../components/todoItem';
import AddToDo from '../components/addTodo';

export default function TaskList() {

    const [todos, setTodos] = useState([
        {text : 'Buy Coffee', key : '1'},
        {text : 'Create an app', key : '2'},
        {text : 'Play on the switch', key : '3'},
    ])

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        })
    }

    const submitHandler = (text) => {
        if(text.length > 0){
            setTodos((prevTodos) => {
                return [{text: text, key: Math.random().toString()}, ...prevTodos]
            })
        }
        else{
            Alert.alert('Oops!', "ToDos must contain characters", [
                {text: 'Understood', onPress: () => console.log('Alert Closed')}
            ])
        }
        
    }

    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <AddToDo submitHandler={submitHandler}></AddToDo>
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) => (
                                <ToDoItem item={item} pressHandler={pressHandler}></ToDoItem>
                            )}>

                        </FlatList>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>


        
        // <ScrollView>
        //     <View style={styles.container}>
        //         <View style={styles.header}>
        //             <Text style={styles.boldText}> Task Manager </Text>
        //         </View>
        //         <View style={styles.body}>
        //             <Text> Enter Name: </Text>
        //             <TextInput 
        //                 multiline
        //                 style={styles.input} 
        //                 placeholder='ex: Bob Jones'
        //                 onChangeText={(val) => setName(val)}>
        //             </TextInput>

        //             <Text> Enter Age: </Text>
        //             <TextInput 
        //                 keyboardType='numeric'
        //                 style={styles.input} 
        //                 placeholder='ex: 60'
        //                 onChangeText={(val) => setAge(val)}>
        //             </TextInput>
        //             <Text> The name is {name} and the age is {age} </Text>
        //         </View>
        //         {people.map(item => (
        //                 <View key={item.key}>
        //                     <Text style={styles.item}> {item.name} </Text>
        //                 </View>
        //             )
        //         )}
        //         <View style={styles.buttonContainer}>
        //             <Button title="Update Name" onPress={clickHandler}></Button>
        //         </View>
        //         <StatusBar style="auto" />
        //     </View>
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
        flex: 1,
    },
    list: {
        marginTop: 20,
        flex: 1,
    }
});
