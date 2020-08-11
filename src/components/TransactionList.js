import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, SafeAreaView} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import {Body, Card, CardItem} from 'native-base';

export default function TransactionList() {
    const [listData, setListData] = useState(
        Array(10)
            .fill('')
            .map((_, i) => ({key: `${i}`, text: `Text ${i}`})),
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
        >
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            {data.item.text}
                        </Text>
                    </Body>
                    <Body style={{left: 115}}>
                        <Text>
                            $ 250
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (

            <CardItem>
                <Body style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
                style={styles.backRightBtn}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Image source={require('../assets/icons8-supprimer-pour-toujours-48.png')}/>
            </TouchableOpacity>
                </Body>
            </CardItem>

    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        left: 100,
    },
});
