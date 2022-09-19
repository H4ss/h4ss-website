import {
    Container, Box, Heading,
    SimpleGrid,
    Divider,
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbMario from '../public/images/projects/mario-remake.png'

const Projects = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mt={6} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="super-mario-remake" title="Mario Remake" thumbnail={thumbMario}>
                            A super mario remake made in lua using the love2d game engine.
                            The goal was to learn the basis of game mechanics, animations and collisions.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.4}>
                    <Divider my={6} />
                    <Heading as="h2" fontSize={20} mt={6} mb={4}>
                        Website in construction, coming soon ...
                    </Heading>
                </Section>
            </Container>
        </Layout>
    )
}

export default Projects