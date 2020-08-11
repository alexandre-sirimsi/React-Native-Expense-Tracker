import React, {Component} from 'react';
import {Body, Card, CardItem, Text} from 'native-base';
import {Image} from 'react-native';

export default class IncomeExpenses extends Component {
    render() {
        return (

            <Card>
                <CardItem>
                    <Body style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text>
                            INCOME
                        </Text>
                        <Text>
                            $ 400
                        </Text>
                    </Body>
                    <Body style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/icons8-ligne-verticale-48.png')}/>
                    </Body>
                    <Body style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text>
                            EXPENSE
                        </Text>
                        <Text>
                            $ 50
                        </Text>
                    </Body>
                </CardItem>
            </Card>

        );
    }
}
