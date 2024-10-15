import React from 'react';
import {SafeAreaView} from 'react-native';
import EmployeeInfoScreen from './EmployeeInfoScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <EmployeeInfoScreen />
    </SafeAreaView>
  );
};

export default App;
