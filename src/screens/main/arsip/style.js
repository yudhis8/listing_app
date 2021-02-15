import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {fontSize, wp, hp} from '../../../helper';

export default StyleSheet.create({
  flyImage: {
    position: 'absolute',
    top: wp(18.5),
    right: 0,
    left: 0,
    width: wp(100),
    height: hp(25),
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
