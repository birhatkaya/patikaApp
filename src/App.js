import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
} from "react-native";
import StoreCard from "./storeCard/storeCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput style={styles.textIpnut} placeholder="Ara..." />
      <StoreCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
  },
  headerText: {
    color: "purple",
    fontSize: 30,
  },
  textIpnut: {
    backgroundColor: "#DFDBDB",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
