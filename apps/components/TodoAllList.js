/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, FlatList, ScrollView} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Todo.db'});

const TodoAllList = ({navigation}) => {   
    let [listItems, setListItems] = useState([]);

    useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
            'SELECT * FROM TODOLIST',
            [],
            (txn,res) => {
                console.log('record num :', res.rows.length);
                var temp = [];
                for (var i = 0; i < res.rows.length; i++){
                    temp.push(res.rows.item(i));
                }
                setListItems(temp);
            }
            );
        });
    }, []); //재확인...
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
            <View style={{flex:1}}>
                {listItems.map((item,index) => {
                // <Text key={index} children={item.user_name} /> 
                    return (
                        <View key={index} style={{borderBottomColor:'#0000ff' , borderBottomWidth: 1}}>
                            <Text children={item.TODO} />
                            <Text children={item.DATE} />
                        </View>
                    );
                })}
                {/* <Text children={'Test'} /> */}
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default TodoAllList;