import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Register = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
      valid = false;
    } else if (mobileNumber.length !== 10) {
      newErrors.mobileNumber = 'Mobile number must be exactly 10 digits';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
      valid = false;
    }

    if (!emailAddress) {
      newErrors.emailAddress = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (validate()) {
      const requestData = {
        regId: 0,
        name,
        emailAddress,
        mobileNumber,
        password
      };
  
      try {
        const response = await fetch('http://13.201.123.93/api/UserRegistration/Register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
          },
          body: JSON.stringify(requestData),
        });
  
        // Check if the response body exists
        const contentLength = response.headers.get('content-length');
        const hasBody = contentLength && contentLength !== '0';
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        // Only attempt to parse JSON if the body exists
        if (hasBody) {
          const data = await response.json();
          Alert.alert('Registration Successful!', `Response: ${data.message || 'User registered successfully!'}`);
        } else {
          Alert.alert('Registration Successful!', 'User registered successfully!');
        }
  
        // Reset input fields after success
        setName('');
        setMobileNumber('');
        setPassword('');
        setEmailAddress('');
        setErrors({});
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    } else {
      Alert.alert('Error', 'Please fill out all required fields correctly');
    }
  };
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Name <Text style={styles.requiredField}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Mobile Number <Text style={styles.requiredField}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            keyboardType="numeric"
            value={mobileNumber}
            maxLength={10}
            onChangeText={setMobileNumber}
          />
          {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email <Text style={styles.requiredField}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={emailAddress}
            onChangeText={setEmailAddress}
          />
          {errors.emailAddress && <Text style={styles.errorText}>{errors.emailAddress}</Text>}
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password<Text style={styles.requiredField}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.045,
    color: '#333',
    marginBottom: height * 0.01,
  },
  input: {
    height: height * 0.06,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
  },
  button: {
    width: '100%',
    backgroundColor: '#2284c4',
    height: height * 0.07,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  buttonText: {
    fontSize: width * 0.045,
    color: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: height * 0.005,
  },
  requiredField: {
    color: 'red',
  },
});
