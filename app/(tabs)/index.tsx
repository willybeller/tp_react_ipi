import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ColorTxtRed } from '@/components/ColorTxtComponent';
import { HelloButton } from '@/components/HelloButton';
import { Card } from '@/components/TextConditionnal';
import { ListPerso } from '@/components/ListPerso';
import { LoaderComponent } from '@/components/useEffect';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        <Text
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            <ColorTxtRed>
            Ceci est mon texte utilisant le component ColorTxtComponent.tsx
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
            Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
            Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. 
            Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
            Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. 
            Praesent egestas leo in pede. Praesent blandit odio eu enim. 
            Pellentesque sed dui ut augue blandit sodales. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
            Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
            Maecenas adipiscing ante non diam sodales hendrerit.
            </ColorTxtRed> 
        </Text>
        <HelloButton
          title='Click HERE to say hello'
          sayHello={() => console.warn('Hello !')}
        />
        <Card
          loading={false}
          error={false}>
        </Card>
        <ListPerso>
        </ListPerso>
        <LoaderComponent></LoaderComponent>
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
