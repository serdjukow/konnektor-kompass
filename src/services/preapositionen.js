import prepositionen from "./../db/prepositionen.json"
import nomenPrepositionen from "./../db/nomen_mit_preapositionen.json"
import verbenPrepositionen from "./../db/verben_mit_preaposition.json"
import adjektivePrepositionen from "./../db/adjektiv_mit_preaposition.json"
import { v4 as uuidv4 } from "uuid"

export function fetchPrepositionen() {
  const newData = prepositionen.map((el) => {
    return {
      ...el,
      id: uuidv4(),
      read: false,
      learned: false,
      answer: "",
    }
  })
  return newData
}

export function fetchNomenPrepositionen() {
  const newData = nomenPrepositionen.map((el) => {
    return {
      ...el,
      id: uuidv4(),
      read: false,
      learned: false,
      answer: "",
    }
  })
  return newData
}

export function fetchVerbenPrepositionen() {
  const newData = verbenPrepositionen.map((el) => {
    return {
      ...el,
      id: uuidv4(),
      read: false,
      learned: false,
      answer: "",
    }
  })
  return newData
}

export function fetchAdjektivePrepositionen() {
  const newData = adjektivePrepositionen.map((el) => {
    return {
      ...el,
      id: uuidv4(),
      read: false,
      learned: false,
      answer: "",
    }
  })
  return newData
}
