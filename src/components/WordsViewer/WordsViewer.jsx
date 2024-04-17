import { Button, ButtonGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"

const WordsViewer = () => {
    const [view, setView] = useState("ru")

    return (
        <Stack>
            <ButtonGroup>
                <Button
                    variant={view === "ru" ? "solid" : "outline"}
                    onClick={() => setView("ru")}
                    colorScheme='teal'
                >
                    Russisch
                </Button>
                <Button
                    variant={view === "en" ? "solid" : "outline"}
                    onClick={() => setView("en")}
                    colorScheme='teal'
                >
                    Englisch
                </Button>                
            </ButtonGroup>
        </Stack>
    )
}

export { WordsViewer }