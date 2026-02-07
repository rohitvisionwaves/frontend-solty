/**
 * Data and helpers for Valentine's Week (7–14 Feb).
 * Days 1–6 (7–12 Feb): one simple page each (theme + shayari + message).
 * Day 7 (14 Feb): full experience (welcome → memories → thank you → proposal).
 */
export interface ValentineDay {
  date: number; // 7–14
  name: string;
  theme: string;
  /** Emoji or symbol for the day (used in card visual and decorations). */
  icon: string;
  title: string;
  message: string;
  shayari: string;
  /** True only for 14 Feb; unlocks memory cards, thank you, and proposal flow. */
  fullExperience: boolean;
}

const FEBRUARY = 1; // JS month 0-indexed

/** Returns the day of Valentine's Week (7–14) for the given date, or 14 if not in range. */
export function getValentineWeekDay(d: Date): number {
  if (d.getMonth() !== FEBRUARY) return 14;
  const day = d.getDate();
  if (day >= 7 && day <= 14) return day;
  return 14;
}

/** Valentine's Week content for each day (7–14 Feb). */
export const VALENTINE_WEEK_DAYS: ValentineDay[] = [
  {
    date: 7,
    name: 'Rose Day',
    theme: 'rose',
    icon: '🌹',
    title: 'Happy Rose Day',
    message: 'A rose for you, Solty—like our bond, beautiful and true.',
    shayari: 'Ek gulaab ki tarah ho tum,\nKhushbu se bhari har baat ho tum,\nZindagi ki har subah mein,\nMeri pehli muskurahat ho tum.',
    fullExperience: false
  },
  {
    date: 8,
    name: 'Propose Day',
    theme: 'propose',
    icon: '💝',
    title: 'Happy Propose Day',
    message: 'A friendly question from the heart—will you be my special buddy, Solty?',
    shayari: 'Dosti se badhkar kuch ho na ho,\nPar tum sa koi dost bhi nahi.\nAgar dil ki suno ek pal ke liye,\nKya tum meri special buddy banogi?',
    fullExperience: false
  },
  {
    date: 9,
    name: 'Chocolate Day',
    theme: 'chocolate',
    icon: '🍫',
    title: 'Happy Chocolate Day',
    message: 'You’re sweeter than chocolate, Solty. Here’s to our sweet bond.',
    shayari: 'Chocolate se bhi zyada meethi ho tum,\nHar baat mein ek mithaas ho tum,\nZindagi ke har taste mein,\nMeri favourite sweet si yaad ho tum.',
    fullExperience: false
  },
  {
    date: 10,
    name: 'Teddy Day',
    theme: 'teddy',
    icon: '🧸',
    title: 'Happy Teddy Day',
    message: 'Like a teddy, you make every day soft and warm. Thank you, Solty.',
    shayari: 'Ek teddy ki tarah soft ho tum,\nHar pal mein ek comfort ho tum,\nJab bhi udaas ho dil mera,\nMeri sabse pyari smile ho tum.',
    fullExperience: false
  },
  {
    date: 11,
    name: 'Promise Day',
    theme: 'promise',
    icon: '💜',
    title: 'Happy Promise Day',
    message: 'I promise to always be there for you, Solty. Today and every day.',
    shayari: 'Na zyada vaade, na badi baat,\nBas itna sa wada hai saath.\nMuskurahat ka reason banunga,\nJab tak rahegi dil mein yeh baat.',
    fullExperience: false
  },
  {
    date: 12,
    name: 'Hug Day',
    theme: 'hug',
    icon: '🤗',
    title: 'Happy Hug Day',
    message: 'Sending you a warm hug across the miles. You mean the world, Solty.',
    shayari: 'Ek hug mein jo sukoon milta hai,\nWoh lafzon mein kaha milta hai.\nKabhi paas ho ya door sahi,\nDil ka connection wahi milta hai.',
    fullExperience: false
  },
  {
    date: 13,
    name: 'Kiss Day',
    theme: 'kiss',
    icon: '💋',
    title: 'Happy Kiss Day',
    message: 'To the one who makes my heart skip a beat. Happy Kiss Day, Solty.',
    shayari: 'Pyaar ki mithas, ehsaas ki gehraai,\nKiss Day pe tumhe dil se salaam bheja hai.',
    fullExperience: false
  },
  {
    date: 14,
    name: "Valentine's Day",
    theme: 'valentine',
    icon: '❤️',
    title: "Happy Valentine's Day",
    message: 'Hello Solty, I have something for you. Will you be my Valentine?',
    shayari: 'Dosti se shuru hui yeh kahani,\nPata hi nahi chala kab dil ki zubani ban gayi.\nHar mulaqat ek yaad ban gayi,\nAur tum meri zindagi ki aadat ban gayi.',
    fullExperience: true
  }
];

/** Returns the Valentine day for the given date (7–14). */
export function getDayByDate(dateNum: number): ValentineDay | undefined {
  return VALENTINE_WEEK_DAYS.find(d => d.date === dateNum);
}

/** Returns true if the given date is Valentine's Day (14 Feb) and full experience is available. */
export function isFullExperienceDay(d: Date): boolean {
  return d.getMonth() === FEBRUARY && d.getDate() === 14;
}
