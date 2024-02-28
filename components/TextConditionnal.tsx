import React from "react";
import {View, Text} from 'react-native';

export function Card ({loading, error} : {loading:boolean, error:boolean}) {
    let content

    if(error){
        content = <Text style = {{fontSize:24, color: 'red'}}>Error</Text>
    } else if(loading){
        content = <Text style = {{fontSize:24, color: 'gray'}}>Loading..</Text>
    } else {
        content = <Text style = {{ fontSize: 24, color: 'green'}}>ça marche</Text>
    }
    return content
}