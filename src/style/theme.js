const lightTheme = {
  label: "Light",
  background: "#F5F5F5",
  text: "#000000",
  gradient: "linear-gradient(315deg, #74ebd5 0%, #ACB6E5 94%)",
  title: "#2979ff",
  textTypeBox: "#9E9E9E",
  stats: "#3D5AFE",
  fontFamily: "sans-serif",
};

const darkTheme = {
  label: "Dark",
  background: "#121212",
  text: "#FAFAFA",
  gradient: "linear-gradient(315deg, #F7971E 0%, #FFD200 94%)",
  title: "#ffc107",
  textTypeBox: "#706d6d",
  stats: "#BB86FC",
  fontFamily: "sans-serif",
};

const cyberTheme = {
  label: "Cyber",
  background: "#272932",
  text: "#CB1DCD",
  gradient: "linear-gradient(315deg, #FDF500 0%, #CB1DCD 94%)",
  title: "#FDF500",
  textTypeBox: "#D1C5C0",
  stats: "#00ff9f",
  fontFamily: "Tomorrow",
};

const monkeTypeTheme = {
  label: "MonkeType",
  background: "#1F1F1F",
  text: "#FFFFFF",
  gradient: "linear-gradient(315deg, #9D50BB 0%, #6E48AA 74%)",
  title: "#FFD600",
  textTypeBox: "#D1C5C0",
  stats: "#64FC9C",
  fontFamily: "Roboto, sans-serif",
};

const defaultTheme = cyberTheme;

const themesOptions = [
  { value: darkTheme, label: "Dark" },
  { value: cyberTheme, label: "Cyber" },
  { value: lightTheme, label: "Light" },
  { value: monkeTypeTheme, label: "MonkeType" }
];

export {
  lightTheme,
  darkTheme,
  cyberTheme,
  monkeTypeTheme,
  defaultTheme,
  themesOptions
};
