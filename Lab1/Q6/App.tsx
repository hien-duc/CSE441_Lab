import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import EmployeeInfoScreen from './EmployeeInfoScreen';
import SumFirstLastDigit from './SumFirstLastDigit';
import MinimumOfThree from './MinimumOfThree';
import HailstoneSequence from './HailstoneSequence';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{padding: 10}}>
        <EmployeeInfoScreen />
        <SumFirstLastDigit />
        <MinimumOfThree />
        <HailstoneSequence />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
