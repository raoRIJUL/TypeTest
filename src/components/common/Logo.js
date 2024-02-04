import React from "react";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";

const Logo = ({ isFocusedMode, isMusicMode }) => {
  return (
    <div className="header" style={{visibility: isFocusedMode ? 'hidden' : 'visible' }}>
      <h1>
        TypeSpeed <KeyboardAltIcon fontSize="large" />
      </h1>
      <span className="sub-header">
      Type Faster, Type Smarter: Your Path to Keyboard Mastery
      </span>
    </div>
  );
};

export default Logo;
