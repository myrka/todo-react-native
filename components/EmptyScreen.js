import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'expo';
import Colors from '../constants/Colors';

export class EmptyScreen extends Component {
    render() {
        return (
            <View style={{display: 'flex', alignItems: 'center'}}>
                <Icon.Ionicons
                    name='logo-tux'
                    size={150}
                    style={{ marginTop: 50, marginBottom: 10}}
                    color={Colors.warningBackground}
                />
                <Text style={{fontSize: 18}}>There is no todos in this section</Text>
            </View>
        )
    }
}
