import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

class AddTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: 'cyan'}}>{this.state.username}</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={username => this.setState({username})}
                    placeholder={'Username'}
                    style={styles.input}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#ecf0f1',
    },
});


export default AddTransaction;
