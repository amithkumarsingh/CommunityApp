import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20
  }, TopBar: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 1,
    backgroundColor: '#009858'
  },
  leftContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginStart: 8,
  },
  middleContainer: {
    flex: 2,
    flexDirection: 'row',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginEnd: 16,
  },
  rightIcon: {
    paddingHorizontal: 20,
    resizeMode: 'contain',
    backgroundColor: 'white',
    marginEnd: 8,
  },
  
});