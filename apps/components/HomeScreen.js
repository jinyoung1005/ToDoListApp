/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Todo.db'});

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='TODOLIST'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS TODOLIST', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS TODOLIST (ID INTEGER PRIMARY KEY AUTOINCREMENT, TODO TEXT NOT NULL, DATE TEXT NOT NULL)',
              [],
            );
          }
        },
      );
    });
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM TODOLIST', [], function (tx, res) {
        console.log('item:', res.rows.item(0));
      });
    });
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text children="TODO" />
        <MyButton
          title="할일 등록"
          onButtonClick={() => navigation.navigate('Register')}
        />
        <MyButton
          title="할일 전체조회"
          onButtonClick={() => navigation.navigate('TodoAllList')}
        />
        {/* <MyButton
                        title="할일 조회"
                        onButtonClick={() => navigation.navigate('ViewToDo')} /> */}
        {/* <MyButton
                        title="할일 수정"
                        onButtonClick={() => navigation.navigate('TodoUpdate')} /> */}
        <MyButton
          title="할일 삭제"
          onButtonClick={() => navigation.navigate('TodoDelete')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
