import { SectionList } from 'react-native';
import {Text, TextProps, View} from './Themed';
import { ColorTxtRed } from './ColorTxtComponent';
const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto']
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimp']
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer']
    },
  ];
export function StyledSectionList() {
    return <>
    <SectionList sections={DATA} keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <ColorTxtRed>{title}</ColorTxtRed>
      )}></SectionList></>
}