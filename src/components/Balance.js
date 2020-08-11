import React, {Component} from 'react';
import {Body, Card, CardItem, Text} from 'native-base';

export default class Balance extends Component {
    render() {
        return (

            <Card>
                <CardItem>
                    <Body style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text>
                            YOUR BALANCE : $ 350.00
                        </Text>
                    </Body>
                </CardItem>
            </Card>

        );
    }
}
