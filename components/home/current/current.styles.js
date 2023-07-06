import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../../constants';

const styles = StyleSheet.create({
  locationText: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    alignSelf: 'center',
    paddingTop: SIZES.medium,
  },
  tempText: {
    color: COLORS.primary,
    fontSize: SIZES.xxLarge,
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: COLORS.primaryBackground,
  },
  textInput: {
    height: SIZES.medium,
    width: SIZES.xxxLarge,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.primaryBackground,
    padding: SIZES.small,
    textAlign: 'center',
    color: COLORS.primary,
    margin: SIZES.medium,
  },

  searchBtn: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: '70%',
    backgroundColor: 'blue',
    borderRadius: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchBtnImg: {
    width: '50%',
    height: '50%',
    tintColor: 'white',
  },
});

export default styles;
