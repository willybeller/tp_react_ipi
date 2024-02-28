import React, {useRef, useState} from "react";
import {View, Button} from 'react-native';
import { ColorTxtWhite, ColorTxtRed, ColorTxtBlack } from "./ColorTxtComponent";

export function IncrementCptUseRef() {
    let cpt = useRef(0);
    let [temp, setTemp] = useState(0);

    return(
        <View>
            <ColorTxtBlack>Compteur avec useRef :</ColorTxtBlack>
            <Button title="+1" onPress={() => {
                cpt.current++
            }}
            ></Button>
            <Button title="-1" onPress={() => {
                cpt.current--
            }}
            ></Button>
            <Button title="RAZ" onPress={() => {
                cpt.current = 0
            }}
            ></Button>
            <Button title="Mettre à jour" onPress={() => {
                setTemp(cpt.current);
            }}
            ></Button>
            <ColorTxtBlack>{temp}</ColorTxtBlack>
        </View>
    )
}