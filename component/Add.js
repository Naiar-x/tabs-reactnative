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

class Add extends Component {
    render() {
        return (
            <View>
                 <Icon name="plus" size={24} color="#cc5500"     />
            </View>
        );
    }
}

export default Add;
