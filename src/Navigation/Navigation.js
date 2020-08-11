import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../components/Home';
import AddTransaction from '../components/AddTransaction';
import Transaction from '../components/Transaction';
import TransactionList from '../components/TransactionList';
import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';



const AppStackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Expense Tracker',
            headerStyle: {backgroundColor: '#f8c851'},
            headerTintColor: '#ffffff',
        },
    },
    AddTransaction: {
        screen: AddTransaction,
        navigationOptions: {
            title: 'Add new transaction',
            headerStyle: {backgroundColor: '#f8c851'},
            headerTintColor: '#ffffff',
        },
    },
    Transaction: {
        screen: Transaction,
        navigationOptions: {
            title: 'Transaction',
            headerStyle: {backgroundColor: '#f8c851'},
            headerTintColor: '#ffffff',
        },
    },
    TransactionList: {
        screen: TransactionList,
        navigationOptions: {
            title: 'Transaction List',
            headerStyle: {backgroundColor: '#f8c851'},
            headerTintColor: '#ffffff',
        },
    },
    Balance: {
        screen: Balance,
        navigationOptions: {
            title: 'Balance',
            headerStyle: {backgroundColor: '#f8c851'},
            headerTintColor: '#ffffff',
        },
    },
    IncomeExpenses: {
        screen: IncomeExpenses,
        navigationOptions: {
            title: 'Income & Expenses',
            headerStyle: {backgroundColor: '#f8c851'},
            headerTintColor: '#ffffff',
        },
    },
})


export default createAppContainer(AppStackNavigator)
