import React, {useState} from "react";
import {View, Text, Button} from 'react-native';
import { ColorTxtWhite, ColorTxtRed, ColorTxtBlack } from "./ColorTxtComponent";

export function IncrementCptUseState() {
    let [cpt, setCpt] = useState(0);

    return(
        <View>
            <ColorTxtBlack>Compteur avec useState :</ColorTxtBlack>
            <Button title="+1" onPress={() => {
                setCpt(cpt++)
            }}
            ></Button>
            <Button title="-1" onPress={() => {
                setCpt(cpt--)
            }}
            ></Button>
            <Button title="RAZ" onPress={() => {
                setCpt(0)
            }}
            ></Button>
            <ColorTxtBlack>{cpt}</ColorTxtBlack>
        </View>
    )
}