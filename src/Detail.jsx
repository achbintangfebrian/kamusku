import React, { Component } from 'react';
import {View, StatusBar, Text, TextInput, Clipboard, FlatList, TouchableOpacity, ToastAndroid, Touchable} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class Detail extends Component {
    constructor(props) {
        super(props);
       
    }

   salin = (value) => {
     Clipboard.setString(value);
     console.warn(value)
     ToastAndroid.show(value, ToastAndroid.SHORT)
   }

    render() {
      const indonesia = this.props.navigation.getParam('indonesia', 'no-indonesia');
      const english = this.props.navigation.getParam('english', 'no-english');
        return (
            <View style={{flex: 1}}>
              <StatusBar backgroundColor="#0288d1" barStyle="light-content" />
              
              <View style={{padding: 20, backgroundColor: '#03a9f4', elevation: 1, flexDirection: 'row', alignItems: 'center' }}>
                 <Icon name="arrow-left" size={25} color="white"  style={{marginRight: 10}} onPress={() => this.props.navigation.pop()}/>;
                <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}}>{indonesia}</Text>
              </View>
              <Text style={{textAlign: 'center', marginTop: 20, fontWeight: 'bold', fontSize: 20}}>{indonesia}</Text>
              <Text style={{textAlign: 'center', marginTop: 5, fontSize: 17}}>{english}</Text>

              <TouchableOpacity onPress={() => this.salin(english)} style={{justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#4caf50', margin: 10, borderRadius: 6}}>
                <Text style={{color: 'white', textAlign: 'center'}}>Salin</Text>
              </TouchableOpacity>
              
            </View>
        );
    }
}

export default Detail;