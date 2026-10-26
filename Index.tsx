import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  state = {
    titleText: "Bird's Nest",
    bodyText: 'This is not really a bird nest.',
    textInputVal: 'Useless Placeholder',
  };

  onPressTitle = () => {
    alert("Title pressed!");
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>

        {/* 1. STYLING */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Styling (StyleSheet)</Text>
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigblue}>just bigblue</Text>
          <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
          <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        </View>

        {/* 2. HEIGHT DAN WIDTH (FIXED DIMENSIONS) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Height dan Width (Fixed Dimensions)</Text>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue', marginBottom: 5 }} />
          <View style={{ width: 100, height: 100, backgroundColor: 'skyblue', marginBottom: 5 }} />
          <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
        </View>

        {/* 3. FLEX DIMENSIONS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Flex Dimensions</Text>
          <View style={{ height: 150, flexDirection: 'column' }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
          </View>
        </View>

        {/* 4. FLEX DIRECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4.
          Layout dengan Flexbox (FlexDirection)</Text>
          <View style={{ flexDirection: 'row', height: 60 }}>
            <View style={{ width: 50, height: 50, backgroundColor:
                'powderblue', marginRight: 5 }} />
            <View style={{ width: 50, height: 50, backgroundColor:
                'skyblue', marginRight: 5 }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
          </View>
        </View>

        {/* 5. JUSTIFY CONTENT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Justify Content</Text>
          <View style={{
            height: 140,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#f0f0f0',
            padding: 5,
          }}>
            <View style={{ width: 50, height: 50,
                backgroundColor: 'powderblue' }} />
            <View style={{ width: 50, height: 50,
                backgroundColor: 'skyblue' }} />
            <View style={{ width: 50, height: 50,
                backgroundColor: 'steelblue' }} />
          </View>
        </View>

        {/* 6. ALIGN ITEMS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Align Items</Text>
          <View style={{
            height: 140,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            backgroundColor: '#f0f0f0',
            padding: 5,
          }}>
            <View style={{ height: 30, backgroundColor:
                'powderblue', marginBottom: 5 }} />
            <View style={{ height: 30, backgroundColor:
                'skyblue', marginBottom: 5 }} />
            <View style={{ height: 30, backgroundColor:
                'steelblue' }} />
          </View>
        </View>

        {/* 7. BASIC COMPONENT: VIEW */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Basic Component: View</Text>
          <View style={{
            flexDirection: 'row',
            height: 80,
            padding: 10,
            backgroundColor: '#ddd',
            alignItems: 'center',
          }}>
            <View style={{ backgroundColor: 'blue', flex: 0.3, height: 40 }} />
            <View style={{ backgroundColor: 'red', flex: 0.5, height: 40 }} />
            <Text style={{ marginLeft: 10 }}>Hello World!</Text>
          </View>
        </View>

        {/* 8. BASIC COMPONENT: TEXT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. Basic Component: Text</Text>
          <Text style={styles.baseText}>
            <Text style={styles.titleText} onPress={this.onPressTitle}>
              {this.state.titleText}{'\n'}
            </Text>
            <Text numberOfLines={5}>
              {this.state.bodyText}
            </Text>
          </Text>
        </View>

        {/* 9. BASIC COMPONENT: IMAGE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>9. Basic Component: Image</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row',
              justifyContent: 'space-around' }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
            <Image
              style={{ width: 66, height: 58 }}
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAZCAYAAAAGOTACAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaDE5MQG6ycEAAAHJSURBVGje7d5xCQBACARB+2/ab8BEeQNnFL6WSYZYLYudDQVGBQYGBYGBgYGBgYGBgZmcvDqYGBmhvGQYGBgYGBgYGBgYGBqYGBgbmQw+P/eMFCSUTVAAAAABJRkJggg=='
              }}
            />
          </View>
        </View>

        {/* 10. BASIC COMPONENT: TEXTINPUT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>10. Basic Component: TextInput</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1,
                paddingHorizontal: 10, borderRadius: 5 }}
            onChangeText={(text) => this.setState({ textInputVal: text })}
            value={this.state.textInputVal}
          />
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
  },
  red: {
    color: 'red',
  },
  baseText: {
    fontFamily: 'System',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});