import React, { useContext, useEffect } from 'react';
import {Provider as AuthProvider} from './src/providers/AuthContext'
import {Provider as RecordingProvider} from './src/providers/RecordingContext'
import {Provider as ProjectProvider} from './src/providers/ProjectContext'
import Navigation from './src/navigation/'
export default function App() {
  
  return (
    <AuthProvider>
      <ProjectProvider>
        <Navigation/>
      </ProjectProvider>
    </AuthProvider>
  );
}
