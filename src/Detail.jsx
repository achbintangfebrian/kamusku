import React, { Component } from 'react';
import {View, StatusBar, Text, TextInput, Clipboard, FlatList, TouchableOpacity, ToastAndroid, Touchable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Detail = ({route, navigation}) => {
  const {indonesia} = route.params;
  const {english} = route.params;
    return (
        <View style={{flex: 1}}>
          <StatusBar backgroundColor="#0288d1" barStyle="light-content" />
          
          <View style={{padding: 20, backgroundColor: '#03a9f4', elevation: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="arrow-left" size={25} color="white"  style={{marginRight: 13}} onPress={() => navigation.goBack()}/>
            <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}}>Detail</Text>
          </View>
          <View style={{backgroundColor: '#BDBDBD', paddingBottom: 10, margin: 5, borderRadius: 10}}>
          <Text style={{textAlign: 'center', marginTop: 20, fontWeight: 'bold', fontSize: 20, color: 'white'}}>{indonesia}</Text>
          <Text style={{textAlign: 'center', marginTop: 5, fontSize: 17, color:'white'}}>{english}</Text>
          </View>
          
        </View>
    );
};

export default Detail;