import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './src/navigation/homeStack'
import {Provider as AuthProvider} from './src/providers/AuthContext'
export default function App() {
  return (
    <AuthProvider>
      <Navigator/>
    </AuthProvider>
  );
}
