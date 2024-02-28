import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { StyledSectionList } from '@/components/SectionListPerso';
import { IncrementCptUseState } from '@/components/UseState';
import { IncrementCptUseRef } from '@/components/UseRef';
import { IncrementCptUseReducer } from '@/components/UseReducer';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/two.tsx" />
        {/* <StyledSectionList/> */}
        <IncrementCptUseRef/>
        <IncrementCptUseState/>
        <IncrementCptUseReducer/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
