import { View, Text, StyleSheet, Animated, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { constant } from '../assets/constants';

const Login = ({navigation}) => {
  const [isFocusedID, setIsFocusedID] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const animatedValueID = useRef(new Animated.Value(0)).current;
  const animatedValuePassword = useRef(new Animated.Value(0)).current;

  const handleFocus = (animatedValue, setFocus) => {
    setFocus(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = (animatedValue, setFocus, value) => {
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
    setFocus(false);
  };

  const animatedStyle = (animatedValue) => ({
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10],
    }),
    left: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 0],
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
  });

  const [loginID, setLoginID] = useState('');
  const [password, setPassword] = useState('');

  function navigationToNext() {
    navigation.navigate('Profile');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Input Field for Login ID */}
      <View style={styles.inputContainer}>
        <Animated.Text style={[styles.placeholder, animatedStyle(animatedValueID)]}>
          Login ID
        </Animated.Text>
        <TextInput
          style={styles.textInput}
          value={loginID}
          onFocus={() => handleFocus(animatedValueID, setIsFocusedID)}
          onBlur={() => handleBlur(animatedValueID, setIsFocusedID, loginID)}
          onChangeText={setLoginID}
        />
      </View>

      {/* Input Field for Password */}
      <View style={styles.inputContainer}>
        <Animated.Text
          style={[styles.placeholder, animatedStyle(animatedValuePassword)]}>
          Password
        </Animated.Text>
        <TextInput
          style={styles.textInput}
          value={password}
          secureTextEntry
          onFocus={() => handleFocus(animatedValuePassword, setIsFocusedPassword)}
          onBlur={() => handleBlur(animatedValuePassword, setIsFocusedPassword, password)}
          onChangeText={setPassword}
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Terms and Services */}
      <Text style={styles.terms}>
        By continuing, you agree to our <Text style={styles.link}>terms and services</Text>.
      </Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={navigationToNext}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
  },
  placeholder: {
    position: 'absolute',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    left: 10,
    color: '#888',
  },
  textInput: {
    height: '100%',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingTop: 18,
    paddingBottom: 5,
  },
  forgotPassword: {
    color: constant.blue,
    marginVertical: 10,
  },
  terms: {
    fontSize: 14,
    marginVertical: 20,
  },
  link: {
    color: constant.blue,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: constant.blue,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});