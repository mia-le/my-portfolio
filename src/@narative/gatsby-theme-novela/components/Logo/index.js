import React from 'react';
import { useColorMode } from "theme-ui";
import logo from "../../../../assets/mia-logo.png"
import logoLight from "../../../../assets/mia-logo-light.png"

export default function Logo({ fill }) {
  const [colorMode] = useColorMode();
  return (
    <div>
      {colorMode === 'light' ? 
      <img className="Image__Small" height="60" alt="Logo" src={logo} />
      : <img className="Image__Small" height="60" alt="Logo" src={logoLight} />
    }
      </div>
  );
}