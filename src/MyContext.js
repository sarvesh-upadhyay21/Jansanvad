import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a context
const UserRoleContext = createContext();

// Create a custom hook to use the context
export const useUserRole = () => useContext(UserRoleContext);

// Create a provider component
export const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const loadUserRole = async () => {
      const role = await AsyncStorage.getItem('verifiedUserRole');
      setUserRole(role);
    };
    loadUserRole();
  }, []);

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};
