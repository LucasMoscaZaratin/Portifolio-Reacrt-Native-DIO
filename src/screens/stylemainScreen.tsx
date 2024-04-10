import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile:{
    width:'80%',
    padding:10,
  },
  image:{
    alignSelf:'center',
    width: 128,
    height: 128,
    borderRadius: 512,
    marginBottom: 10
  },
  name:{
    alignSelf:'center',
    color: '#fff',
    fontSize: 24
  },
  links:{
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    width:'80%',
    marginTop:40,
    padding: 20
  },
  textLinks:{
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center'
  }
});