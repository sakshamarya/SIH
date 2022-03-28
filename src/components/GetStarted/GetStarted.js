import React from "react";
import SearchBar from "material-ui-search-bar";
import styles from "./GetStarted.modules.css";
import TypeWriterEffect from 'react-typewriter-effect';

<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>

export default function GetStarted() {
  return (
    <>

    <div className={styles.introText}>
    <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '3em',
          margin: "5% 35%",

        }}
        startDelay={0}
        cursorColor="#3F3D56"
        multiText={[
          'Welcome to Tour Guide Finder',
          'Enter the City Name to Get Started ...',
          'Welcome to Tour Guide Finder',
          'Enter the City Name to Get Started ...',
          'Welcome to Tour Guide Finder',
          'Enter the City Name to Get Started ...'
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
    </div>

    <div>
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 30%',
          maxWidth: 800,
        }}
    />

    </div>

    </>
  );
}
