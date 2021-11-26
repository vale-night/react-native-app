import React, {useCallback, useState} from 'react'
import {Text, View, StyleSheet} from "react-native";
import { TextInput } from 'react-native-paper';
import ChipField from '../components/ChipField';
import { Button } from 'react-native-paper';

export const Search = () => {

    const [priceGroup] = useState([
        '$',
        '$$',
        '$$$',
        '$$$$',
        '$$$$$',
    ]);

    const [ageGroup] = useState([
      '16-18',
      '18-25',
      '25-30',
      '30-45',
      '45+'
    ]);

    const [price, setPrice] = useState(null);
    const [age, setAge] = useState(null);

    const handleOnCompletedPrice = useCallback((index) => {
        setPrice(priceGroup[index]);
    }, [priceGroup]);

    const handleOnCompletedAge = useCallback((index) => {
        setAge(ageGroup[index]);
    }, [ageGroup]);

    return(
        <View style={styles.container}>

            <Text style={styles.title}>Encontre sua Festa</Text>

            <TextInput
                label="Nome da Festa/local"
                name="search"
                selectionColor="#444444"
                underlineColor="#9C3687"
                activeUnderlineColor="#9C3687"
                right={<TextInput.Icon name="magnify" color={'#e87496'} />}

            />

            <ChipField data={[
                '$',
                '$$',
                '$$$',
                '$$$$',
                '$$$$$',
            ]} title={'Faixa etaria'} itemColor={"#267408"} onCompleted={handleOnCompletedAge} />

            <ChipField data={[
                '16-18',
                '18-25',
                '25-30',
                '30-45',
                '45+'
            ]} title={'Quer gastar quanto ?'} itemColor={"#267408"} onCompleted={handleOnCompletedPrice} />

            <Button style={styles.button} icon="filter" mode="contained" onPress={() => console.log('Pressed')}>
                Aplicar filtros
            </Button>


        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#9C3687',
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    button:{
      backgroundColor: '#9C3687',
      marginTop: 20,
      padding: 15
    },
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
    }
})

export default Search;