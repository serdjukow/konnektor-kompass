import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-2.png'
import { HOME_ROUTE } from '../../utils/consts'
import './header.scss'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Flex } from "@chakra-ui/react";

const Header = (props) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={3}
            bg="teal.500"
            color="#333"
            zIndex="10"
            {...props}
            sx={{
                position: "-webkit-fixed",
                position: "fixed",
                top: "0"
            }}
        >
            <Link to={HOME_ROUTE} className="logo">
                <img src={Logo} alt="Konnektor Kompas Logo" />
            </Link>
            <Sidebar />
        </Flex>
    );
}
export default Header