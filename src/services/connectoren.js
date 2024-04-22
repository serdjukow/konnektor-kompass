import connectorenDB from "../db/connectoren.json"
import { v4 as uuidv4 } from "uuid"

export function fetchConnectoren() {
  const newData = connectorenDB.map((el) => {
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

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

function getRandomQuestions(allQuestions, count) {
  const shuffledQuestions = shuffle([...allQuestions])
  return shuffledQuestions.slice(0, count)
}



export function fetchConnectorenForQuestions(numberOfQuestions='all', stack='new') {
  const newData = connectorenDB.map((el) => {
    return {
      ...el,
      id: uuidv4(),
      read: false,
      learned: false,
      answer: "",
    }
  })

  console.log(numberOfQuestions, stack)

  switch (true) {
    case !!(stack === "old"):
      console.log("old", JSON.parse(sessionStorage.getItem("oldQuestions")))
      return JSON.parse(sessionStorage.getItem("oldQuestions"))
    case !!((stack === "new") & (numberOfQuestions === "all")):
      const data = shuffle(newData)
      console.log("all", data)
      return data

    case !!((stack === "new") & (numberOfQuestions !== "all")):
      const randomData = getRandomQuestions(shuffle(newData), numberOfQuestions)
      console.log("else", randomData)
      return randomData

    default:
      console.log("default")
      return "default"
  }
}
