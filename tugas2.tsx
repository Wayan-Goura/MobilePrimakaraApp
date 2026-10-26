import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class TugasMandiriApp extends Component<{}, {
  showHello: boolean;
  inputText: string;
  submittedText: string;
}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showHello: false,
      inputText: '',
      submittedText: '',
    };
  }

  // Method untuk Tugas Mandiri 1: Toggle Tampilkan/Sembunyikan teks Hello World
  toggleHello = () => {
    this.setState((prevState) => ({
      showHello: !prevState.showHello,
    }));
  };

  // Method untuk Tugas Mandiri 2: Submit teks input
  handleSubmit = () => {
    this.setState({ submittedText: this.state.inputText });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>

        {/* TUGAS MANDIRI 1 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tugas Mandiri 1: Toggle Teks</Text>
          <Button
            title={this.state.showHello ? "Sembunyikan" : "Tampilkan"}
            color="#16834A"
            onPress={this.toggleHello}
          />
          {this.state.showHello && (
            <Text style={styles.helloText}>Hello World</Text>
          )}
        </View>

        {/* TUGAS MANDIRI 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tugas Mandiri 2: Input & Submit Text</Text>
          <TextInput
            style={styles.input}
            placeholder="Ketik teks di sini..."
            placeholderTextColor="#888"
            onChangeText={(text) => this.setState({ inputText: text })}
            value={this.state.inputText}
          />
          <View style={{ marginTop: 10 }}>
            <Button
              title="Submit"
              color="#16834A"
              onPress={this.handleSubmit}
            />
          </View>
          {this.state.submittedText !== '' && (
            <Text style={styles.resultText}>
              Hasil Input: {this.state.submittedText}
            </Text>
          )}
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#F5F7F5',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#183B2A',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  helloText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16834A',
    textAlign: 'center',
    marginTop: 12,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  resultText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },
});