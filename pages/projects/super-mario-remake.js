import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Super Mario Lua">
            <Container>
                <Title>
                    Super Mario Lua <Badge> 2022 </Badge>
                </Title>
                <P>
                    A super mario remake made in lua using the love2d game engine.
                    The goal was to learn the basis of game mechanics, animations and collisions.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta> Github </Meta>
                        <Link href="https://github.com/H4ss/super_mario_remake_lua">
                            https://github.com/H4ss/super_mario_remake_lua/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta> Platform </Meta>
                        <span> All 32/64 bit</span>
                    </ListItem>

                    <ListItem>
                        <Meta> Stack </Meta>
                        <span> Lua, Love2D </span>
                    </ListItem>
                </List>
                <WorkImage src="/images/projects/mario-remake.png"/>
                <WorkImage src="/images/projects/mario-remake-lvl1.png"/>
                <WorkImage src="/images/projects/mario-remake-lvl2.png"/>
            </Container>
        </Layout>
    )
}

export default Work