import React, { useState, useRef, useEffect, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, themesOptions } from "./style/theme";
import { GlobalStyles } from "./style/global";
import TypeBox from "./components/features/TypeBox/TypeBox";
import Logo from "./components/common/Logo";
import FooterMenu from "./components/common/FooterMenu";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  GAME_MODE,
  GAME_MODE_DEFAULT,
} from "./constants/Constants";
import useLocalPersistState from "./hooks/useLocalPersistState";
import DefaultKeyboard from "./components/features/Keyboard/DefaultKeyboard";

function App() {
  const [theme, setTheme] = useState(() => {
    const stickyTheme = window.localStorage.getItem("theme");
    if (stickyTheme !== null) {
      const localTheme = JSON.parse(stickyTheme);
      const upstreamTheme = themesOptions.find(
        (e) => e.label === localTheme.label
      ).value;
      const isDeepEqual = localTheme === upstreamTheme;
      return isDeepEqual ? localTheme : upstreamTheme;
    }
    return defaultTheme;
  });

  const [gameMode, setGameMode] = useLocalPersistState(
    GAME_MODE_DEFAULT,
    GAME_MODE
  );

  const [isTrainerMode, setIsTrainerMode] = useState(false);
  const [isWordsCardMode, setIsWordsCardMode] = useLocalPersistState(
    false,
    "IsInWordsCardMode"
  );

  const isWordGameMode =
    gameMode === GAME_MODE_DEFAULT &&
    !isTrainerMode &&
    !isWordsCardMode;

  const handleThemeChange = (e) => {
    window.localStorage.setItem("theme", JSON.stringify(e.value));
    setTheme(e.value);
  };

  const toggleTrainerMode = () => {
    setIsTrainerMode(!isTrainerMode);
    setIsWordsCardMode(false);
  };

  const textInputRef = useRef(null);
  const focusTextInput = () => {
    textInputRef.current && textInputRef.current.focus();
  };

  useEffect(() => {
    if (isWordGameMode) {
      focusTextInput();
    }
  }, [isWordGameMode]);

  const [init, setInit] = useState(false);

  useEffect(() => {
    let unmounted = false;
    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine);
        if (!unmounted) {
          setInit(true);
        }
      } catch (error) {
        console.error("Error initializing particles:", error);
        // Handle error appropriately
      }
    });

    return () => {
      unmounted = true;
    };
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: theme,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme.label==="Light" ? "#000000" : "#ffffff",
        },
        links: {
          color: theme.label==="Light" ? "#000000" : "#ffffff",
          distance: 150,
          enable: true,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (init) {
    return (
      <ThemeProvider theme={theme}>
        <>
          <div className="canvas">
            <GlobalStyles />
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
            <Logo />
            {isWordGameMode && (
              <TypeBox
                textInputRef={textInputRef}
                key="type-box"
                handleInputFocus={() => focusTextInput()}
              ></TypeBox>
            )}
            {isTrainerMode && !isWordsCardMode && (
              <DefaultKeyboard />
            )}
            <FooterMenu
              themesOptions={themesOptions}
              theme={theme}
              handleThemeChange={handleThemeChange}
              isTrainerMode={isTrainerMode}
              toggleTrainerMode={toggleTrainerMode}
            ></FooterMenu>
          </div>
        </>
      </ThemeProvider>
    );
  }

  return null;
}

export default App;
