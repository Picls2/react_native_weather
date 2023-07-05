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
  },

  searchBtn: {
    backgroundColor: COLORS.primary,
  },

  searchBtnImg: {

  },
});

export default styles;
