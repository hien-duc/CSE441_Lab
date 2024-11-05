import React, {useState} from 'react';
import ProductList from './src/Product';
import ProductAdd from './src/Add';
import ProductSearch from './src/Product_Search';
import ProductDetail from './src/Product_Detail';
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFolder,
  faPlus,
  faSearch,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, View} from 'react-native';

type RouteType = {
  key: string;
  title: string;
  focusedIcon: any; // Use any for FontAwesomeIcon
  unfocusedIcon: any;
};

const App: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const routes: RouteType[] = [
    {
      key: 'productList',
      title: 'Products',
      focusedIcon: faFolder,
      unfocusedIcon: faFolder,
    },
    {
      key: 'productAdd',
      title: 'Add',
      focusedIcon: faPlus,
      unfocusedIcon: faPlus,
    },
    {
      key: 'productSearch',
      title: 'Search',
      focusedIcon: faSearch,
      unfocusedIcon: faSearch,
    },
    {
      key: 'productDetail',
      title: 'Detail',
      focusedIcon: faInfoCircle,
      unfocusedIcon: faInfoCircle,
    },
  ];

  const renderScene = BottomNavigation.SceneMap({
    productList: ProductList,
    productAdd: ProductAdd,
    productSearch: ProductSearch,
    productDetail: ProductDetail,
  });

  const renderIcon = ({
    route,
    focused,
  }: {
    route: RouteType;
    focused: boolean;
  }) => {
    return (
      <FontAwesomeIcon
        icon={focused ? route.focusedIcon : route.unfocusedIcon}
        size={24}
        color={focused ? 'blue' : 'gray'}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
          renderIcon={renderIcon}
          shifting={true}
          style={{zIndex: 1}}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
