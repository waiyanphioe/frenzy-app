import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import axios from 'axios';

const SignIn = () => {
  const [handle, setHandle] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = async () => {
    await fetch('http://localhost:5000/auth/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        handle,
        password,
      }),
    })
      .then(res => console.log(res.json()))
      .catch(err => console.log(err));
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={text => setHandle(text)}
        value={handle}
        placeholder="username or email"
        placeholderTextColor={'rgba(107 ,114 ,128,1)'}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="password"
        placeholderTextColor={'rgba(107 ,114 ,128,1)'}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    width: 250,
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    borderRadius: 5,
    color: '#000',
    backgroundColor: 'rgba(226 ,232 ,240,1)',
  },
  btn: {
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(30 ,41 ,59 ,0.9)',
  },
  btnTxt: {
    color: '#fff',
  },
});
