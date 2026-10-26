import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

// 1. Komponen Praktikum Props
class Greeting extends Component<{ name: string }> {
  render() {
    return (
      <View style={{ alignItems: 'center', marginVertical: 4 }}>
        <Text style={styles.textNormal}>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
        <Greeting name="Valeera" />
      </View>
    );
  }
}

// 2. Komponen Praktikum State & Method (Blink dengan method terpisah)
class Blink extends Component<{ text: string }, { isShowingText: boolean }> {
  constructor(props: { text: string }) {
    super(props);
    this.state = { isShowingText: true };
    this.setStateEverySecond();
  }

  setStateEverySecond = () => {
    // Toggle the state every second[cite: 24]
    setInterval(() => {
      this.setState((previousState) => ({
        isShowingText: !previousState.isShowingText,
      }));
    }, 1000); // in millisecond format[cite: 24]
  };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return <Text style={styles.blinkText}>{this.props.text}</Text>;
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
      </View>
    );
  }
}

export default class PracticalApp extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Praktikum: Props (Greeting)</Text>
          <LotsOfGreetings />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Praktikum: State & Method (Blink)</Text>
          <BlinkApp />
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
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
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
  textNormal: {
    fontSize: 14,
    color: '#333',
  },
  blinkText: {
    fontSize: 14,
    color: '#007AFF',
    marginVertical: 2,
  },
});