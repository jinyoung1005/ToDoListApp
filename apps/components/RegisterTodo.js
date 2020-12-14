/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View,Text, SafeAreaView, ScrollView, KeyboardAvoidingView, TextInput, StyleSheet, Alert} from 'react-native';
import MyButton from '../controls/MyButton';

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'Todo.db'});

const RegisterToDo = ({navigation}) => {
    let [todo, setTodo ] = useState('');
    let [date, setDate ] = useState('');

    const registerToDo = () => {
        // alert(`${userName}, ${userContact}, ${userAddress}`);
        if(todo.length === 0){
            alert('할일을 입력하세요');
            return;
        }
        if(date.length === 0){
            alert('날짜를 입력하세요');
            return;
        }
        console.log(todo);
        //DB처리
        db.transaction(function(txn){
            txn.executeSql(
                `INSERT INTO TODOLIST
                    (todo,date)
                 VALUES
                    (?,?)`,
                [todo,date],
                function (tx, res) {
                    console.log('res',res.rowsAffected);
                    if(res.rowsAffected > 0){
                        Alert.alert(
                            '등록 성공',
                            '할일 등록 성공했습니다',
                            [
                                {text: 'OK', onPress:() => navigation.navigate('HomeScreen')},
                            ],
                        );
                    }else{
                        alert('등록 실패!');
                    }
                }
            );
        });
    };

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <ScrollView>
                    <KeyboardAvoidingView>
                        <Text children="등록화면" style={{textAlign:'center', fontSize: 20 }}/>
                        <TextInput placeholder="할일입력"
                            onChangeText={(todo) => setTodo(todo)}
                            maxLength={20}
                            style={styles.textInput} />
                        <TextInput placeholder="날짜입력"
                            onChangeText={(date) => setDate(date)}
                            maxLength={20}
                            style={styles.textInput} />
                        <MyButton
                            title="저장"
                            onButtonClick={registerToDo}/>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput:{borderBottomWidth:1, borderBottomColor:'#1877f2', margin:10, fontSize: 20},
});

export default RegisterToDo;
