import React from 'react';
import { View } from 'react-native';
import { ColorTxtWhite } from './ColorTxtComponent';

const data = [
    {id: 'a', name : 'Esteban'},
    {id: 'b', name : 'Yann'},
    {id: 'c', name : 'Benjamin'}
]

export function ListPerso() {
    return(
        <View>
            {data.map((item) => (
                <ColorTxtWhite key={(item.id)}>{item.name}</ColorTxtWhite>
            ))}
        </View>
    )
}
