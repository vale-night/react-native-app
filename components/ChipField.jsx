import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Chip from 'react-native-material-chip';

export default  ({title, data, itemColor, onCompleted}) => {

    const [checked, setChecked] = useState(null);

    const handleOnPress = useCallback(
        (chip) => {
            setChecked(chip);

            if(typeof onCompleted === 'function') {
                onCompleted(chip);
            }
        }, [checked]
    );

    return (
        <View>
            <Text style={styles.labelText}> {title} </Text>

            <View style={styles.chipContainer}>
                {data.map((item, index) => {
                    return (
                        <Chip
                            key={index}
                            checked={checked === index}
                            text={item}
                            style={ checked === index ? styles.chipSelected : styles.chip }
                            onPress={() => handleOnPress(index)}
                            selectedColor={itemColor}
                        />
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    chip: {},
    labelText: {
        marginTop: 20,
        color: '#777777',
        fontSize: 14,
        marginBottom: 5
    },
    chipSelected: {
        backgroundColor: '#FF6969',
        color: '#fff',
    },
    chipContainer: {
        flexDirection: 'row',
    }
})