import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.600', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
            p={2}
            bg={active ? 'glassTeal' : undefined }
            color={active ? '#202023' : inactiveColor }
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path } = props 

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        
        bg={useColorModeValue('#ffffff40', '#20202380')}
        // initial #20202380, trial ff22dd
        style={{backdropFilter: 'blur(10px'}}
        zIndex={1}
        {...props}
        > 
            <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between" 
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                direction={{
                    base:'column',
                    md:'row'
                }}
                display={{
                    base:'none', md:'flex'
                }}
                width={{
                    base: 'full',
                    md: 'auto'
                }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, nmd: 0}}

                >
            
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                
                    {/* <LinkItem href="/Others" path={path}>
                        Others
                    </LinkItem> */}
                
                </Stack>

        <Box flex={1} align="right">
            <ThemeToggleButton />
            <Box ml={2} display={{ base : 'inline-block', md: 'none' }}/>
            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label="Options"/>
                <MenuList>
                    <NextLink href="/" passHref>
                        <MenuItem as={Link}> About </MenuItem>
                    </NextLink>
                    <NextLink href="/projects" passHref>
                        <MenuItem as={Link}> Projects </MenuItem>
                    </NextLink>
    
                    {/* <NextLink href="/others" passHref>
                        <MenuItem as={Link}> Others </MenuItem>
                    </NextLink> */}
                    {/* Rajouter ici un lien pour le github */}
                </MenuList>
            </Menu>
        </Box>
            </Container>
        </Box>
    )
}

export default Navbar
