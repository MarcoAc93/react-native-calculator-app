import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/AppTheme';
import { useCalculator } from '../hooks/useCalculator';

export const Calculator = () => {
  const {
    prevNumber, state, handleClean, positiveNegative,
    removeOne, divide, buildNumber, multiply,
    sum, extract, calculation,
  } = useCalculator();

  return (
    <View style={styles.innerContainer}>
      <Text style={styles.smallText}>{prevNumber}</Text>
      <Text style={styles.bigText} adjustsFontSizeToFit numberOfLines={1}>{state}</Text>

      <View style={styles.row}>
        <Button text='C' color='#9B9B9B' handler={handleClean} />
        <Button text='+/-' color='#9B9B9B' handler={positiveNegative} />
        <Button text='del' color='#9B9B9B' handler={removeOne} />
        <Button text='/' color='#ff9427' handler={divide} />
      </View>

      <View style={styles.row}>
        <Button text='7' handler={buildNumber} />
        <Button text='8' handler={buildNumber} />
        <Button text='9' handler={buildNumber} />
        <Button text='X' color='#ff9427' handler={multiply} />
      </View>

      <View style={styles.row}>
        <Button text='4' handler={buildNumber} />
        <Button text='5' handler={buildNumber} />
        <Button text='6' handler={buildNumber} />
        <Button text='-' color='#ff9427' handler={extract} />
      </View>

      <View style={styles.row}>
        <Button text='1' handler={buildNumber} />
        <Button text='2' handler={buildNumber} />
        <Button text='3' handler={buildNumber} />
        <Button text='+' color='#ff9427' handler={sum} />
      </View>

      <View style={styles.row}>
        <Button text='0' handler={buildNumber} expand />
        <Button text='.' handler={buildNumber} />
        <Button text='=' handler={calculation} />
      </View>
    </View>
  );
};
