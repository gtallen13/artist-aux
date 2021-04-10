import React, { useContext, useEffect } from 'react';
import {Provider as AuthProvider} from './src/providers/AuthContext'
import {Provider as ProjectProvider} from './src/providers/ProjectContext'
import Navigation from './src/navigation/'
import LongTimers from './src/utils/LongTimer';

export default function App() {
  LongTimers();
  
  return (
    <AuthProvider>
      <ProjectProvider>
        <Navigation/>
      </ProjectProvider>
    </AuthProvider>
  );
}
