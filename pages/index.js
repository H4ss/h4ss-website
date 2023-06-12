import {
    Button,
    Box,
    Container,
    Heading,
    Image,
    SimpleGrid,
    useColorModeValue,
    List,
    ListItem,
    Link,
    Icon
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { BioSection, BioYear } from "../components/bio"
import { GridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"
import {
    IoLogoGithub,
    IoLogoLinkedin,
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a french security analyst!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flewGrow={1} pr={5}>
                        <Heading as="h2" variant="page-title">
                            Hassan Zabatt
                        </Heading>
                        <p>
                            IT enthusiast ( Developper / Security Analyst )
                        </p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
                        <Image
                            marginTop={0}
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/hass.jpeg" />
                    </Box>
                </Box>

                {/* INTRODUCTION */}
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Myself
                    </Heading>
                    <Paragraph>
                        I&apos;m Hassan, a computer science student, a learner and a traveler. I&apos;m going over every aspect of
                        my domain with a never ending curiosity, and a passion for learning and creating.
                        I believe that we learn the most through practicing, and that&apos;s why I&apos;m always trying
                        to create new projects, and to learn new technologies. I&apos;m especially interested in backend
                        development and cybersecurity. Currently I&apos;m working on a series of projects that I will
                        be showing on this website.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My projects
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                {/* CHRONOLOGY */}
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        My career
                    </Heading>
                    <BioSection>
                        <BioYear> 2001 </BioYear>
                        Born in Conakry, Guinea.
                    </BioSection>
                    <BioSection>
                        <BioYear> 2020 - 2022 </BioYear>
                        Worked as a system administrator for EcranBleuXV.
                    </BioSection>
                    <BioSection>
                        <BioYear> 2022 </BioYear>
                        Worked as a security analyst for United Mining Supply.
                    </BioSection>
                    <BioSection>
                        <BioYear> 2022 </BioYear>
                        Completed the Epitech Bachelor cycle after 3 years.
                    </BioSection>
                    <BioSection>
                        <BioYear> [SOON] 2023 </BioYear>
                        Completing the 1st year of Calabria university Master&apos;s cycle.
                    </BioSection>
                    <BioSection>
                        <BioYear> [SOON] 2024 </BioYear>
                        Completing the Epitech Master&apos;s cycle.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        What I love
                    </Heading>
                    <Paragraph>
                        Sports, Hiking, Traveling, Reading,
                        Photography,
                        Research in Computer Science,
                        Cybersecurity & CTFs,
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        More about me
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/H4ss" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme={'teal'}
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @H4ss
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/hassan-zabatt-105471198/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme={'teal'}
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    Hassan Zabatt
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page