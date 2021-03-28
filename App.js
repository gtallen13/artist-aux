import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import {Provider as AuthProvider} from './src/providers/AuthContext'
import Navigation from './src/navigation/'
export default function App() {
  
  return (
    <AuthProvider>
        <Navigation/>
    </AuthProvider>
  );
}
