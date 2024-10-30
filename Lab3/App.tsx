import React, {useState} from 'react';
import ProductList from './src/Product';
import ProductAdd from './src/Add';
import ProductSearch from './src/Product_Search';
import ProductDetail from './src/Product_Detail';
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';

type RouteType = {
  key: string;
  title: string;
  focusedIcon: string;
  unfocusedIcon: string;
};

const App: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const routes: RouteType[] = [
    {
      key: 'productList',
      title: 'Products',
      focusedIcon: 'folder',
      unfocusedIcon: 'folder-outline',
    },
    {
      key: 'productAdd',
      title: 'Add',
      focusedIcon: 'add',
      unfocusedIcon: 'add-circle-outline',
    },
    {
      key: 'productSearch',
      title: 'Search',
      focusedIcon: 'search',
      unfocusedIcon: 'search-off',
    },
    {
      key: 'productDetail',
      title: 'Detail',
      focusedIcon: 'info',
      unfocusedIcon: 'info-outline',
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
    const iconName = focused ? route.focusedIcon : route.unfocusedIcon;

    return (
      <Icon
        name={iconName}
        type="material"
        size={24}
        color={focused ? 'blue' : 'gray'}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
        shifting={true}
        style={{zIndex: 1}}
      />
    </SafeAreaProvider>
  );
};

export default App;
