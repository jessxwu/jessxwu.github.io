import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, file) {
    const textOnly = toString(tree);
    const readingTime = getReadingTime(textOnly);

    const filePath = file.history?.[0] || '';
    const isCannesPost = filePath.includes('2025-07-20-cannes-lions');

    
    if (isCannesPost) {
      console.log("📚 Setting minutesRead to:", file.data.astro.frontmatter.minutesRead);
      file.data.astro.frontmatter.minutesRead = '13 min read';
    } else {
      file.data.astro.frontmatter.minutesRead = `${Math.ceil(readingTime.minutes)} min read`;
    }
  };
}