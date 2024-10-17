import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Register = () => {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (!mobile) {
      newErrors.mobile = 'Mobile number is required';
      valid = false;
    } else if (mobile.length !== 10) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters';
      valid = false;
    }

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (validate()) {
      const requestData = {
        username,
        dob,
        mobile,
        email,
        address,
        password,
      };
  
      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        Alert.alert('Registration Successful!', `Response: ${data.message || 'User registered successfully!'}`);
  
        // Reset input fields after success
        setUsername('');
        setMobile('');
        setPassword('');
        setEmail('');
        setDob('');
        setAddress('');
        setErrors({});
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    } else {
      Alert.alert('Error', 'Please fill out all required fields correctly');
    }
  };
  

  const handleUsernameChange = (value) => {
    setUsername(value);
    if (value) {
      setErrors((prev) => ({ ...prev, username: null }));
    }
  };

  const handleMobileChange = (value) => {
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobile(value);
      if (value.length === 10) {
        setErrors((prev) => ({ ...prev, mobile: null }));
      }
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value.length >= 6) {
      setErrors((prev) => ({ ...prev, password: null }));
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({ ...prev, email: null }));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Username *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={handleUsernameChange}
          />
          {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Mobile Number *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            keyboardType="numeric"
            value={mobile}
            maxLength={10}
            onChangeText={handleMobileChange}
          />
          {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}
        </View>

        {/* Email Field */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePasswordChange}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        {/* Optional Fields */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your date of birth"
            value={dob}
            onChangeText={setDob}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
          />
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
  title: {
    fontSize: width * 0.07, // Responsive font size
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: height * 0.03,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.045, // Responsive font size
    color: '#333',
    marginBottom: height * 0.01,
  },
  input: {
    height: height * 0.06, // Responsive height
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '100%',
    backgroundColor: '#2284c4',
    height: height * 0.07, // Responsive height
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  buttonText: {
    fontFamily: 'Roboto-Bold',
    fontSize: width * 0.045, // Responsive font size
    color: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: height * 0.005, // Responsive margin
  },
});
