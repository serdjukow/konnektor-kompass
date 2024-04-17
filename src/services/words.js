import words from "./../db/words.json"
import { v4 as uuidv4 } from "uuid"

export function fetchWords() {
  const newData = words
  return newData
}
