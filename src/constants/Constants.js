const DEFAULT_WORDS_COUNT = 200;
const COUNT_DOWN_90 = 90;
const COUNT_DOWN_60 = 60;
const COUNT_DOWN_30 = 30;
const COUNT_DOWN_15 = 15;
const DEFAULT_COUNT_DOWN = COUNT_DOWN_30;
const DEFAULT_DIFFICULTY = "normal";
const HARD_DIFFICULTY = "hard";
const PUNCT_DIFFICULTY = "punctuation";
const CODE_DIFFICULTY = "coding";
const RESTART_BUTTON_TOOLTIP_TITLE = "[Tab] + [Enter] to quickly restart";
const REDO_BUTTON_TOOLTIP_TITLE = "[Tab] + [Space] to quickly redo";
const RESTART_BUTTON_TOOLTIP_TITLE_WORDSCARD = "[Tab] + [Enter] to quick restart the chapter";
const SELECT_ONE_OR_MORE_CHAPTERS = "Open to select one or more chapters. Pick the chapters in the typing area."
const DEFAULT_DIFFICULTY_TOOLTIP_TITLE =
  "normal mode generates random words from top 1000 most frequently used words in English dataset.";
const HARD_DIFFICULTY_TOOLTIP_TITLE =
  "hard mode generates random words from blog posts words data, so you may encounter longer and less frequently used word.";

const PUNCT_DIFFICULTY_TOOLTIP_TITLE =
  "punctuation mode generates more random and difficult words with punctuation, so you may encounter longer and less frequently used word.";

const CODE_DIFFICULTY_TOOLTIP_TITLE =
  "coding mode generates more random and difficult programming language snippets, so you may encounter longer and most frequently used coding snippets.";

const CHAR_TOOLTIP_TITLE =
  "correct/incorrect/missing/extra\n extras are recorded even if deleted.";
const SENTENCE_CHAR_TOOLTIP_TITLE = "correct/incorrect/extra\n";
const ENGLISH_MODE_TOOLTIP_TITLE = "English Mode";

const GITHUB_TOOLTIP_TITLE =
"Hello, Dear visitors! Welcome to my Website TypeSpeed. The Following are my GitHub account and respected repository. If you find value in my work, kindly consider starring the project. Your support is truly appreciated. Thank you! \n"

const AUTHOR = "Author: Jayant Singh Bhadauria \n";
const GITHUB_REPO_LINK = "project: @Github\n";


const ENGLISH_MODE = "ENGLISH_MODE";

const GAME_MODE = "GAME_MODE";
const GAME_MODE_DEFAULT = "WORD_MODE";
const WORD_MODE_LABEL = "word";
const TRAINER_MODE = "QWERTY keyboard practice mode";

const PACING_CARET = "caret";
const PACING_PULSE = "pulse";

const PACING_CARET_TOOLTIP = "type the word with a caret \"|\" , character by character.";
const PACING_PULSE_TOOLTIP = "type the word with a pulse \"____\", this helps improving wpm and your speed typing pace habit.";

export {
  DEFAULT_WORDS_COUNT,
  DEFAULT_COUNT_DOWN,
  COUNT_DOWN_60,
  COUNT_DOWN_30,
  COUNT_DOWN_15,
  COUNT_DOWN_90,
  DEFAULT_DIFFICULTY,
  HARD_DIFFICULTY,
  PUNCT_DIFFICULTY,
  CODE_DIFFICULTY,
  DEFAULT_DIFFICULTY_TOOLTIP_TITLE,
  HARD_DIFFICULTY_TOOLTIP_TITLE,
  PUNCT_DIFFICULTY_TOOLTIP_TITLE,
  CODE_DIFFICULTY_TOOLTIP_TITLE,
  CHAR_TOOLTIP_TITLE,
  SENTENCE_CHAR_TOOLTIP_TITLE,
  GITHUB_TOOLTIP_TITLE,
  ENGLISH_MODE,
  RESTART_BUTTON_TOOLTIP_TITLE,
  REDO_BUTTON_TOOLTIP_TITLE,
  ENGLISH_MODE_TOOLTIP_TITLE,
  GAME_MODE,
  GAME_MODE_DEFAULT,
  WORD_MODE_LABEL,
  AUTHOR,
  GITHUB_REPO_LINK,
  TRAINER_MODE,
  RESTART_BUTTON_TOOLTIP_TITLE_WORDSCARD,
  SELECT_ONE_OR_MORE_CHAPTERS,
  PACING_CARET,
  PACING_PULSE,
  PACING_CARET_TOOLTIP,
  PACING_PULSE_TOOLTIP
};
