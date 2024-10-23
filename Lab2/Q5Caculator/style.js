import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  display: {
    fontSize: 48,
    marginBottom: 20,
    width: '80%',
    textAlign: 'right',
    paddingRight: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 50,
    width: '22%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
  operatorButton: {
    backgroundColor: '#f2f2f2',
  },
  equalsButton: {
    backgroundColor: '#FF9500',
  },
  zeroButton: {
    width: '48%', // Larger button for "0"
  },
  clearButton: {
    width: '80%', // Clear button spans full width
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 50,
  },
});
