import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Form from "./srcx/Components/Form";
import Title from "./srcx/Components/Title"

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
