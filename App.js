import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider as AuthProvider} from './src/providers/AuthContext'
import {Provider as RecordingProvider} from './src/providers/RecordingContext'
import {Provider as ProjectProvider} from './src/providers/ProjectContext'
import Navigation from './src/navigation/'
import LongTimers from './src/utils/LongTimer';
import {Provider as ThemeProvider} from './src/providers/ThemeContext';


export default function App() {
  LongTimers();
  
  return (
    <SafeAreaProvider>
    <ThemeProvider>
      <AuthProvider>
        <ProjectProvider>
          <RecordingProvider>
                <Navigation/>
          </RecordingProvider>
        </ProjectProvider>
      </AuthProvider>
    </ThemeProvider>
    </SafeAreaProvider>
    
  );
}
