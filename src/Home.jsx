import React, { Component } from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {View, StatusBar, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from '../node_modules/react-native-gesture-handler/lib/typescript/index';

let database = [
  { indonesia: 'Ayam', english: 'Chiken'},
  { indonesia: 'Absen', english: 'Absent'},
  { indonesia: 'Laci', english: 'Drawer'},
  { indonesia: 'Lalat', english: 'Files'},
  { indonesia: 'Wajah', english: 'Face'},
  { indonesia: 'Fisik', english: 'Physikal'},
  { indonesia: 'Fakultas', english: 'College'},
  { indonesia: 'Halaman', english: 'Lawn'},
  { indonesia: 'Hadiah', english: 'Gift'},
  { indonesia: 'Dahi', english: 'Forehead'},
  { indonesia: 'Galeri', english: 'Gallery'},
  { indonesia: 'Jahat', english: 'Bad'},
  { indonesia: 'Jagung', english: 'Corn'},
  { indonesia: 'Keris', english: 'Kris'},
  { indonesia: 'Kadal', english: 'Lizard'},
  { indonesia: 'Madu', english: 'Honey'},
  { indonesia: 'Mahal', english: 'Expensive'},
  { indonesia: 'Naga', english: 'Dragon'},
  { indonesia: 'Nanas', english: 'Pineapple'},
  { indonesia: 'Zaitun', english: 'Olive'},
]

// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: '',
//             data: database
//         };
//     }

//     search = () => {
//       let data = database

//       data = data.filter(item => item.indonesia.toLocaleLowerCase().includes(this.state.text.toLocaleLowerCase()));

//       this.setState({
//         data: data
//       })
//     }

//     render() {
//         return (
//             <View style={{flex: 1}}>
//               <StatusBar backgroundColor="#0288d1" barStyle="light-content" />
              
//               <View style={{padding: 20, backgroundColor: '#03a9f4', elevation: 1}}>
//                 <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}}>My Kamus</Text>
//               </View>

//               <TextInput
//                 style={{ height: 40, borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginVertical: 20, marginHorizontal: 10, borderRadius: 10}}
//                 onChangeText={text => this.setState({text: text})}
//                 value={this.state.text}
//                 placeholder='Masukkan Kata Kunci'
//                 onKeyPress={() => this.search()}
//               />

//               <FlatList
//               data={this.state.data}
//               renderItem={({ item }) => 
//                 <TouchableOpacity style={{borderWidth: 1, borderRadius: 5, marginVertical: 10, marginHorizontal: 20, padding: 10}} 
//                   onPress={() => this.props.navigate('Detail', {indonesia: item.indonesia, english: item.english})} >
//                   <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.indonesia}</Text>
//                   <Text style={{fontSize: 17, marginTop: 5}}>{item.english}</Text>
                    
//                 </TouchableOpacity>
//               }
//               keyExtractor={item => item.indonesia}
//              />
//             </View>
//         );
//     }
// }

const Home = ({navigation}) => {
  const state = {
                text: '',
                data: database
            };
    
  const search = () => {
          let data = database
    
          data = data.filter(item => item.indonesia.toLocaleLowerCase().includes(this.state.text.toLocaleLowerCase()));
    
          this.setState({
            data: data
          })
        }
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#0288d1" barStyle="light-content" />
      
      <View style={{padding: 20, backgroundColor: '#03a9f4', elevation: 1}}>
        <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}}>My Kamus</Text>
      </View>

      <TextInput
        style={{ height: 40, borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginVertical: 20, marginHorizontal: 10, borderRadius: 10}}
        onChangeText={text => this.setState({text: text})}
        value={state.text}
        placeholder='Masukkan Kata Kunci'
        onKeyPress={() => search()}
      />

      <FlatList
      data={state.data}
      renderItem={({ item }) => 
        <TouchableOpacity style={{borderWidth: 1, borderRadius: 5, marginVertical: 10, marginHorizontal: 20, padding: 10}} 
          onPress={() => navigation.navigate('Detail', {indonesia: item.indonesia, english: item.english})} >
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.indonesia}</Text>
          <Text style={{fontSize: 17, marginTop: 5}}>{item.english}</Text>
            
        </TouchableOpacity>
      }
      keyExtractor={item => item.indonesia}
     />
    </View>
);
}

export default Home;