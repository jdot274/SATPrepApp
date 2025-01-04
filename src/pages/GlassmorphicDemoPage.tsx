import React from 'react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';

const GlassmorphicDemoPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <PageLogo />
      <Navigation />
      
      <div className="flex-1 w-full">
        <iframe 
          src="https://linearoriginal.trickle.host"
          className="w-full h-full border-0"
          title="Linear Original Demo"
        />
      </div>
    </div>
  );
};

export default GlassmorphicDemoPage;