/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({id,textValue,checked, onRemove, onToggle}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        {checked ? (
          <View style={styles.checkedBoxIcon}>
            <Icon name="checkcircle" size={30} color="#0000ff"></Icon>
          </View>
        ) : (
          <View style={styles.circle}>
            
          </View>
        )}
      </TouchableOpacity>
      <Text 
        children={textValue} 
        style={[styles.itemText, 
            checked ? styles.strikeText : styles.unstrikeText ]} />
      
        {/* 삭제가능 */}
      <TouchableOpacity onPress={() => onRemove(id)}>
        <View style={styles.delete}>
          {/* 휴지통 */}
            <MatIcon name="delete-outline" size={30} color="#ff0000" />
        </View>
      </TouchableOpacity>  
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: 30,
    height: 30,
    borderColor: '#0000ff',
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  checkedCircle:{
    marginLeft:20,
    marginRight:20,
  },
  itemText: {
    fontSize: 20,
    marginVertical: 15,
    flex: 1,
  },
  strikeText: {
    color:'#9e9e9e',
    textDecorationLine:'line-through',
  },
  unstrikeText: {
    color:'#222222',
  },
  delete: {
    marginLeft: 20,
    marginRight: 20,
  },
  checkedBoxIcon: {
    marginLeft:20,
    marginRight:20,
  }
});

export default TodoItem;
