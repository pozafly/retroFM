import React, { useEffect, useRef, useState } from 'react';
import Typed from 'react-typed';
import { IntroDisplayBlock, Display } from './style';

const pictureText = [
  `<br/><br/>
  ⠀⠀⠀⠀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀<br/>
⠀⠀⠀⠀⣿⠀⢹⣷⡶⠶⣶⠀⠀⠀⣶⠶⢶⣾⡏⠀⣿<br/>
⠀⠀⢸⡟⠛⠛⢻⣿⡇⠀⢸⣤⣤⣤⡇⠀⢸⣿⡟⠛⠛⢻⡇<br/>
⣶⠶⢾⣇⣀⣶⠾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠷⣶⣀⣸⡷⠶⣶<br/>
⣿⠀⢸⣿⣿⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⡇⠀⣿<br/>
⣿⠀⢸⣿⣿⠀⠀⢰⣶⣶⠀⠀⠀⠀⠀⣶⣶⡆⠀⠀⣿⣿⡇⠀⣿<br/>
⠿⢶⡈⠉⠉⠀⠀⠸⠿⠿⠀⠀⠀⠀⠀⠿⠿⠇⠀⠀⠉⠉⢁⡶⠿<br/>
⠀⠈⠉⠉⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠉⠉⠁<br/>
⠀⠀⠀⠀⠿⠶⢶⡆⠀⠀⢰⠶⠶⠶⡆⠀⠀⢰⡶⠶⠿<br/>
⠀⠀⠀⠀⣤⣤⣼⣧⣤⣤⣾⠀⠀⠀⣷⣤⣤⣼⣧⣤⣤<br/>
⠀⠀⠀⠀⣿⣀⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⣀⣿<br/>
⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉<br/><br/><br/>
<br/>
Retro OS Copyright Pozafly. 2454 ⠀⠀⠀⠀⠀⠀⠀⠀⠀Version 1.1
<br/><br/><br/>

Checking----------------------------------<br/>
⠀⠀⠀⠀environment: ${navigator.userAgent}<br/>
⠀⠀⠀⠀date: ${new Date()}<br/>
⠀⠀⠀⠀bios: ... ready<br/>
⠀⠀⠀⠀settings: ... ready<br/>
⠀⠀⠀⠀modules: ... ready<br/>
⠀⠀⠀⠀desktop: ... ready<br/>
⠀⠀⠀⠀audio: ... ready<br/><br/><br/>
root@Retro> PRESS SPACE OR ENTER THE RETRO...
`,
];

function IntroDisplay() {
  const [nextCursor, setNextCursor] = useState(false);
  const blockRef = useRef();
  const onKeyPress = (e) => {
    console.log(e.key);
    if (e.key === 'Enter' || e.key === ' ') {
      console.log('눌림');
    }
  };

  useEffect(() => {
    blockRef.current.focus();
  }, []);

  return (
    <IntroDisplayBlock onKeyPress={onKeyPress} tabIndex={0} ref={blockRef}>
      <Display>
        <Typed
          strings={['Retro OS booting on...']}
          typeSpeed={10}
          onComplete={() => setTimeout(() => setNextCursor(true), 2000)}
          showCursor={false}
        />
        {nextCursor && <Typed strings={pictureText} typeSpeed={1} />}
      </Display>
    </IntroDisplayBlock>
  );
}

export default IntroDisplay;
