# react-native-platform-specific-styles

Add Platform specific styles to your react native app.

For Android use key 'android'
For Ios use key 'ios'

## Installation

```
npm install --save rn-pss
```

## Example

To add red color to Welcome text in Android and yellow color to Welcome text in Ios

```
import StyleSheet from 'rn-pss';

const styles = StyleSheet.create({
welcome: {
    fontSize: normalize(20),
    textAlign: 'center',
    margin: 10,
    android: {
      color: 'red',
    },
    ios: {
      color: 'yellow',
    },
  }
});
```

To use it with React Native StyleSheet import it with a different name

```
import PSS from 'rn-pss';
```