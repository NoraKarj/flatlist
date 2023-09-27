import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { DATA } from './DATA';
import Row from "./components/Row";
import { StatusBar } from "expo-status-bar";

export default function App() {
 

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        
          <FlatList
          data={DATA}
          renderItem={({item}) => (
           <Row item={item}/>
                   
          )}
            
          >
          </FlatList>
          <StatusBar style="light" />
      </SafeAreaView>
      </View>
  ); }

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingTop: 30,
   
  },
  
});
