/* eslint-disable prettier/prettier */
import React, {Component,useState} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TodoList from './components/TodoList';
import HomeScreen from './components/HomeScreen';
import RegisterTodo from './components/RegisterTodo';
import TodoAllList from './components/TodoAllList';
import TodoDelete from './components/TodoDelete';

const Stack = createStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} //components 폴더에 만들어줌
          options={{
            title:'메인',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle:{
              backgroundColor: '#1877f2',
            }
          }}
          />
          <Stack.Screen
          name="Register"
          component={RegisterTodo} //components 폴더에 만들어줌
          options={{
            title:'할일 등록',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle:{
              backgroundColor: '#1877f2',
            }
          }}
          />
          <Stack.Screen
          name="TodoAllList"
          component={TodoAllList} //components 폴더에 만들어줌
          options={{
            title:'할일 전체조회',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle:{
              backgroundColor: '#1877f2',
            }
          }}
          />
          <Stack.Screen
          name="TodoList"
          component={TodoList} //components 폴더에 만들어줌
          options={{
            title:'할일 조회',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle:{
              backgroundColor: '#1877f2',
            }
          }}
          />
          {/* <Stack.Screen
          name="TodoUpdate"
          component={TodoUpdate} //components 폴더에 만들어줌
          options={{
            title:'할일 수정',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle:{
              backgroundColor: '#1877f2',
            }
          }}
          /> */}
          <Stack.Screen
          name="TodoDelete"
          component={TodoDelete} //components 폴더에 만들어줌
          options={{
            title:'할일 삭제',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle:{
              backgroundColor: '#1877f2',
            }
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3142e8',
//   },
//   appTitle: {
//     color: '#ffffff',
//     fontSize: 36,
//     //fontFamily: italic,
//     textAlign: 'center',
//     marginTop: 30,
//     marginBottom: 30,
//     fontWeight: 'bold',
//   },
//   card : {
//     backgroundColor: '#ffffff',
//     marginLeft: 10,
//     marginRight: 10,
//     flex: 1, //입력창이 가득차게 됨
//     borderTopLeftRadius: 10, //좌측상단 둥글게해줌
//     borderTopRightRadius: 10, //우측상단 둥글게해줌
//   },

//   input : {
//     padding: 20,
//     borderBottomColor: '#9E9E9E', //회색
//     borderBottomWidth: 1, //밑줄그었음
//     fontSize: 24,
//     margin: 20,
//     width: '75%',
//   },
// });
};
export default App;
