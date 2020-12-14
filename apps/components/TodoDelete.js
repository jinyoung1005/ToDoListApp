/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, FlatList, ScrollView, TextInput, StyleSheet, Alert} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Todo.db'});

const TodoDelete = ({navigation}) => {
    let [id, setId] = useState(''); //string

    const TodoDelete = () => {
        db.transaction((txn) => {
            
            txn.executeSql(
            'DELETE FROM TODOLIST WHERE ID = ?',
            [id],
            (txn,res) => {
                console.log('res :', res.rowsAffected);
                if (res.rowsAffected > 0){
                    Alert.alert(
                        '삭제성공',
                        '사용자 삭제했습니다',
                        [
                            {text:'OK', onPress:() => navigation.navigate('HomeScreen')},
                        ]
                    );
                } else {
                alert("삭제 실패");
            }
            }
        );
    });
}; //재확인...


return (
    <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                        <Text children="삭제화면" style={{textAlign:'center', fontSize: 20 }}/>

               <TextInput placeholder="아이디 입력" 
                style={styles.textInput} 
                onChangeText={(id) => setId(id)}/>
               <MyButton title="삭제" onButtonClick={TodoDelete} />
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
            </SafeAreaView>
         );

};

const styles = StyleSheet.create({
    textInput:{borderBottomWidth:1, borderBottomColor:'#1877f2', margin:10, fontSize: 20},
});

export default TodoDelete;