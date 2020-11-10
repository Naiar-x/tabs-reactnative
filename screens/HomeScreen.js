import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont();

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',marginVertical:'center'}}>
                    <Text style={{fontSize:24,marginTop:200,fontWeight:'bold'}}>HomeScreen</Text>
                </View>
            </View>
        );
    }
}

export default HomeScreen;
