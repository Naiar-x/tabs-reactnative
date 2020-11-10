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

class ProfileScreen extends Component {
    render() {
        return (
            <View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text>ProfileScreen</Text>
                </View>
            </View>
        );
    }
}

export default ProfileScreen;
