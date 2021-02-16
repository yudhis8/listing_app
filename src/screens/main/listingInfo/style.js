import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import fonts from '../../../config/fonts';
import {fontSize, wp, hp} from '../../../helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  item: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageArea: {
    borderRadius: 20,
    width: wp(13),
    height: wp(13),
    borderWidth: 1.5,
    borderColor: '#E4E4E4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  image: {
    width: wp(8),
    height: wp(8),
    resizeMode: 'stretch',
  },
  title: {
    fontFamily: fonts.AVENIR_REGULAR,
    fontSize: fontSize(12),
    color: '#838383',
  },
  textRegular: {
    fontFamily: fonts.AVENIR_REGULAR,
    fontSize: fontSize(14),
  },
  value: {
    fontFamily: fonts.AVENIR_DEMI,
    fontSize: fontSize(16),
    color: colors.black,
    marginTop: 5,
  },
  divider: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 15,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    marginRight: 10,
  },
});
