import { IPresentationTexts } from "../models/presentation";

export const createPresentation = (texts: IPresentationTexts): string => {
  let presentation = "";

  for (const key in texts) {
    const array = texts[key as keyof typeof texts];
    const randomIndex = Math.floor(Math.random() * array.length);
    presentation += array[randomIndex];
  }

  return presentation;
};
