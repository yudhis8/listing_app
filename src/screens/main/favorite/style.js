import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {fontSize, wp, hp} from '../../../helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  itemArea: {
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
