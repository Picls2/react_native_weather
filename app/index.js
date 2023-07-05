import {React} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {Stack} from 'expo-router';
import {Current} from '../components';
import {COLORS, SIZES} from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.primaryBackground}}>
      <Stack.Screen options=
        {{
          headerStyle: {backgroundColor: COLORS.primaryBackground},
          headerShadowVisible: false,
          headerTitle: '',
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: COLORS.primaryBackground}}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primaryBackground,
            padding: SIZES.medium,
          }}
        >

          <Current />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
