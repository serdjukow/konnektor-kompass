import { extendTheme } from "@chakra-ui/react"

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E",
  },
}

const customTheme = extendTheme({ colors })

export default customTheme

const colortSheme = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
  "gray",
  "linkedin",
]

export { colortSheme }

export const projectColorScheme = {
  nebensatz: "blue",
  "hauptsatz-position-0": "yellow",
  "hauptsatz-position-1": "green",
  infinitivgruppe: "violet",
  "besonderer-position": "gray",
  "mit Genitiv": "blue",
  "mit Dativ": "yellow",
  "mit Akkusativ": "green",
  "mit Dativ oder Akkusativ": "violet",
  Dativ: "yellow",
  Akkusativ: "green",
}
