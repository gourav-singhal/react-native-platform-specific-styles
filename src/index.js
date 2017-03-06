/**
 * @flow
 */
import {
  Platform,
  StyleSheet,
} from 'react-native';

/**
 * create platform specific styles
 */
export default {
  create(styles) {
    const keys = Object.keys(styles);
    const newStyles = {};

    keys.forEach(key => {
      const {ios, android, ...style} = styles[key];
      newStyles[key] = {...style, ...Platform.select({ios, android})};
    });

    return StyleSheet.create(newStyles);
  },
};