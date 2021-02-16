import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {fontSize, wp, hp} from '../../../helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#828282CC',
    justifyContent: 'flex-end',
  },
  modalBottom: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalItem: {
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    height: 40,
    marginVertical: 10,
  },
  icon: {
    width: wp(10),
    height: wp(10),
  },
  text: {
    marginLeft: 20,
  },
  divider: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
