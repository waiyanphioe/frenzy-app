import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SignIn, SignUp} from '../components';

const Auth = () => {
  const [create, setCreate] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text>Auth</Text>
      {create ? <SignUp /> : <SignIn />}
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
