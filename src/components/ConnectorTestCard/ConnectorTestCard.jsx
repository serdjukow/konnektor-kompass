import { Stack, Grid, Heading, Block } from '@chakra-ui/react'
import './connector-test-card.scss'




const ConnectorTestCard = ({ connector={}, testCardButtonClick, buttonRef, buttonLock }) => {
    
    const buttonToHtml = (buttons = []) => buttons.map(button => {
        <button id='nebensatz' className="connector-test-card__button nebensatz">
            {button.title}
        </button>
    })
    return (
        <Stack p="4" boxShadow="lg" borderRadius="sm" w={'100%'}>
            <Heading lineHeight='tall' as='h3' size='lg' textAlign="center" mb={'3'}>
                {connector.connector}
            </Heading>
            <Grid
                w={'100%'}
                templateColumns='repeat(auto-fit, minmax(200px, 1fr))'
                gap={3}
                id={connector.id}
                onClick={testCardButtonClick}
                ref={buttonRef}
            >
                <Stack>
                    {buttonToHtml()}
                </Stack>
            </Grid>
        </Stack>
    );
}
export default ConnectorTestCard


// < button id = 'nebensatz' disabled = { buttonLock } className = "connector-test-card__button nebensatz" >
//     Nebensatz
//             </ >
//             <button id='hauptsatz-position-0' disabled={buttonLock} className="connector-test-card__button hauptsatz-position-0">
//                 Hauptsatz (Position 0)
//             </button>
//             <button id='hauptsatz-position-1' disabled={buttonLock} className="connector-test-card__button hauptsatz-position-1">
//                 Hauptsatz (Position 1)
//             </button>
//             <button id='infinitivgruppe' disabled={buttonLock} className="connector-test-card__button infinitivgruppe">
//                 Infinitivgruppe
//             </button>
//             <button id='besonderer-position' disabled={buttonLock} className="connector-test-card__button besonderer-position">
//                 Besonderer Position
//             </button>