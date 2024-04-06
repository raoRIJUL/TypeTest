import randomWords from "random-words";
import {
  COMMON_WORDS, Punct_words , CODE_WORDS
} from "../constants/WordsMostCommon";
import {
  DEFAULT_DIFFICULTY,
  PUNCT_DIFFICULTY,
  CODE_DIFFICULTY,ENGLISH_MODE,DEFAULT_WORDS_COUNT,
} from "../constants/Constants";
import { randomIntFromRange } from "./randomUtils";

const wordsGenerator = (wordsCount, difficulty, languageMode) => {
  if (languageMode === ENGLISH_MODE) {
    if (difficulty === DEFAULT_DIFFICULTY) {
        const EnglishWordList = [];
        for (let i = 0; i < DEFAULT_WORDS_COUNT; i++) {
          const rand = randomIntFromRange(0, 550);
          EnglishWordList.push(COMMON_WORDS[rand]);
        }
        return EnglishWordList;
    }

    if( difficulty ===  PUNCT_DIFFICULTY) {
        const PunctWordsList = [];
        for(let i=0; i<DEFAULT_WORDS_COUNT; i++)
        {
          const rand = randomIntFromRange(0,200);
          PunctWordsList.push(Punct_words[rand]);
        }
        return PunctWordsList;
    }

    if( difficulty === CODE_DIFFICULTY) {
        const CodeWordList = [];
        for(let i=0; i<100 ; i++) {
          const rand = randomIntFromRange(1, Object.keys(CODE_WORDS).length);
          CodeWordList.push(CODE_WORDS[rand.toString()]);
        }
        return CodeWordList;
    }

    const randomWordsGenerated = randomWords({ exactly: wordsCount, maxLength: 7 });
    const words = [];
    for (let i = 0; i < wordsCount; i++) {
        words.push({key: randomWordsGenerated[i], val: randomWordsGenerated[i]});
      }
    return words;
  }
  return ["something", "went", "wrong"];
};

export { wordsGenerator};
