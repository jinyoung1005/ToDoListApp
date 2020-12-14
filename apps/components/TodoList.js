/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, FlatList, ScrollView, TextInput, StyleSheet} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';


var db = openDatabase({name: 'Todo.db'});

const TodoList = ({navigation}) => {
    let [ID, setId] = useState(''); //string
    let [todoData, setTodoData] = useState({}); //object
    

    const searchUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
            'SELECT * FROM TODOLIST WHERE ID = ?',
            [ID],
            (txn,res) => {
                console.log('record num :', res.rows.length);
                if (res.rows.length === 1){//어차피 한건만 들고올거니깐
                    setTodoData(res.rows.item(0));
            } else {
                alert("유저정보 없음");
                setTodoData({});
            }
            }
        );
    });
}; //재확인...

const todoInfo = todoData.ID ? (
    <View>
            <Text children={`아이디 : ${todoData.ID}`} />
            <Text children={`할일 : ${todoData.TODO}`} />
    </View>
) : (
    <View />
);

return (
    <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
               <TextInput placeholder="아이디 입력" 
                style={styles.textInput} 
                onChangeText={(userId) => setId(ID)}/>
               <MyButton title="검색" onButtonClick={searchUser} />
            {todoInfo}               
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
            </SafeAreaView>
         );

};

const styles = StyleSheet.create({
    textInput:{borderBottomWidth:1, borderBottomColor:'#1877f2', margin:10, fontSize: 20},
});

export default TodoList;