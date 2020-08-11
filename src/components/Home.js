import React, {Component} from 'react';
import {Container, Content, Footer, FooterTab, Button} from 'native-base';
import {Image} from 'react-native';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Balance/>
                    <IncomeExpenses/>
                </Content>
                <Content padder>
                    <TransactionList/>
                </Content>
                <Content/>
                <Footer>
                    <FooterTab style={{backgroundColor: '#f8c851'}}>
                        <Button vertical onPress={() => this.props.navigation.navigate('AddTransaction')}>
                            <Image source={require('../assets/icons8-ajouter-48.png')}/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
