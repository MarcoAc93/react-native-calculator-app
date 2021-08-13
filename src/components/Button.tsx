import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/AppTheme';

interface ButtonType {
  text: string;
  color?: string;
  expand?: boolean;
  handler: (stringNumber: string) => void;
}

export const Button = ({ text, color = '#2d2d2d', expand = false, handler }: ButtonType) => {
  return (
    <TouchableOpacity onPress={() => handler(text)}>
      <View style={{
        ...styles.btnShape,
        backgroundColor: color,
        width: (expand ? 180 : 80)
      }}
      >
        <Text style={{
          ...styles.btnText,
          color: (color === '#9B9B9B' ? 'black' : 'white')
        }}
      >
        {text}
      </Text>
      </View>
    </TouchableOpacity>
  );
};
