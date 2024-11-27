import React from 'react'
import { Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import {
    Collection,
    Friendship,
    Introduction,
    Join,
    Responsive,
    Theme
} from './Home.styled'
import Container from '@/components/Container'
import Button from '@/components/Button'
import LogoIcon from '@/images/LogoIcon'

const Home = () => {
    return (
        <Responsive>
            <Theme.Container>
                <Theme.RedBlock />

                <Theme.Image>
                    <img src='/images/theme_tank.png' alt='' />
                </Theme.Image>

                <Theme.Title>
                    <span>TANK</span>WAR&nbsp;
                </Theme.Title>
            </Theme.Container>

            <Container>
                <Introduction.Container id='introduction'>
                    <Introduction.Left>
                        <Introduction.TitleSmall>
                            Tank War
                        </Introduction.TitleSmall>
                        <Introduction.Title>Introduction</Introduction.Title>
                        <Introduction.TitleWeight className='gradient-text'>
                            TANK WAR
                        </Introduction.TitleWeight>

                        <Introduction.Text>
                            Immerse yourself in a world where battles against
                            zombies bring peace to the world, a decision to
                            share everything. Each Tank War is a digital
                            masterpiece, handcrafted to embody rebellion and
                            individuality. This collection features 5 types of
                            combat vehicles, each with its own distinct
                            characteristics.
                        </Introduction.Text>

                        <Button size='lg' outline='dark'>
                            Join Now
                        </Button>
                    </Introduction.Left>

                    <Introduction.Right>
                        <Introduction.RightBg>
                            <Introduction.RightImage>
                                <LogoIcon />
                            </Introduction.RightImage>
                        </Introduction.RightBg>
                    </Introduction.Right>
                </Introduction.Container>
            </Container>

            <Container>
                <Join.Container id='join-us'>
                    <Join.Title>
                        Are You Ready <br /> to Play?
                    </Join.Title>

                    <Join.Box>
                        <Join.BoxLeft>
                            <p>Open the Box to get a Tank</p>
                            <Button size='lg'>LET'S GO</Button>
                        </Join.BoxLeft>

                        <Join.BoxRight>
                            <img src='/images/black_box.png' alt='' />
                        </Join.BoxRight>
                    </Join.Box>
                </Join.Container>
            </Container>

            <Container>
                <Collection.Container id='collection'>
                    <Collection.SmallTitle>Collection</Collection.SmallTitle>
                    <Collection.Title>
                        <span className='gradient-text'>TANK WAR</span>
                    </Collection.Title>

                    <Swiper
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        modules={[Autoplay]}
                        breakpoints={{
                            993: {
                                slidesPerView: 4
                            },
                            500: {
                                slidesPerView: 2
                            }
                        }}
                    >
                        <Collection.Slide>
                            <img src='/images/tank_01.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_02.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_03.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_04.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_05.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_06.png' />
                        </Collection.Slide>
                    </Swiper>
                </Collection.Container>
            </Container>

            <Container>
                <Friendship.Container>
                    <Friendship.Background>
                        <Friendship.Image>
                            <img src='/images/tank_isolation.png' alt='' />
                        </Friendship.Image>
                        <Friendship.Text>JOIN THE FRIENDSHIP</Friendship.Text>
                        <Friendship.Button size='lg'>
                            LET'S GO
                        </Friendship.Button>
                    </Friendship.Background>
                </Friendship.Container>
            </Container>
        </Responsive>
    )
}

export default Home
