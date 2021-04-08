import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import {Provider as AuthProvider} from './src/providers/AuthContext'
import {Provider as RecordingProvider} from './src/providers/RecordingContext'
import Navigation from './src/navigation/'
export default function App() {
  
  return (
    <AuthProvider>
      <RecordingProvider>
        <Navigation/>
      </RecordingProvider>
    </AuthProvider>
  );
}
