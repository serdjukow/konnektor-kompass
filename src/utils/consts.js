export const HOME_ROUTE = "/"

export const KONNEKTOREN_ROUTE = "/konnektoren"
export const KONNEKTOREN_UEBERSICHT_ROUTE = "/konnektoren-uebersicht"
export const KONNEKTOREN_TEST_ROUTE = "/konnektoren-test"
export const KONNEKTOREN_TEST_START_ROUTE = "/konnektoren-test/start"
export const RESULT_ROUTE = "/test/result"

export const NOMEN_ROUTE = "/nomen"
export const NOMEN_UEBERSICHT_ROUTE = "/konnektoren-uebersicht"

export const PREPOSITIONEN_ROUTE = "/prepositionen"
export const PREPOSITIONEN_UEBERSICHT_ROUTE = "/prepositionen-uebersicht"
export const NOMEN_MIT_PREPOSITIONEN_ROUTE = "/nomen-mit-prepositionen"
export const VERBEN_MIT_PREPOSITIONEN_ROUTE = "/verben-mit-prepositionen"
export const ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE = "/adjektive-mit-prepositionen"

export const menuList = [
  {
    itemName: "Home",
    itemLink: HOME_ROUTE,
  },
  {
    itemName: "Konnektoren",
    itemLink: KONNEKTOREN_ROUTE,
    subItems: [
      {
        itemName: "Konnektoren Übersicht",
        itemLink: KONNEKTOREN_UEBERSICHT_ROUTE,
      },
      { itemName: "Konnektoren Test", itemLink: KONNEKTOREN_TEST_ROUTE },
    ],
  },
  {
    itemName: "Präpositionen",
    itemLink: PREPOSITIONEN_ROUTE,
    subItems: [
      {
        itemName: "Präpositionen Übersicht",
        itemLink: PREPOSITIONEN_UEBERSICHT_ROUTE,
      },
      {
        itemName: "Nomen mit Präpositionen",
        itemLink: NOMEN_MIT_PREPOSITIONEN_ROUTE,
      },
      {
        itemName: "Verben mit Präpositionen",
        itemLink: VERBEN_MIT_PREPOSITIONEN_ROUTE,
      },
      {
        itemName: "Adjektive mit Präpositionen",
        itemLink: ADJEKTIVE_MIT_PREPOSITIONEN_ROUTE,
      },
    ],
  },
  // {
  //   itemName: "Nomen",
  //   itemLink: NOMEN_ROUTE,
  //   subItems: [
  //     {
  //       itemName: "Nomen Übersicht",
  //       itemLink: NOMEN_UEBERSICHT_ROUTE,
  //     },
  //     { itemName: "Nomen Test", itemLink: "/nomen-test" },
  //   ],
  // },
]
