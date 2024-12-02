import React from 'react'

import { About, Banner, Introduction, Responsive } from './WhiteHome.styled'
import Container from '@/components/Container'

import { useGlobalContext } from '@/context/GlobalContext'
import Button from '@/components/Button'

const WhiteHome = () => {
    const { t, isMobile } = useGlobalContext()

    const getImage = (imageName) => `./images/white_home/${imageName}.png`

    return (
        <Container>
            <Responsive>
                {!isMobile ? (
                    <Banner.Container>
                        <Banner.Top>
                            <Banner.TopLeft>
                                <p>{t('Join the revolution with')}</p>
                                <h1>{t('AZChain')}</h1>
                                <span>{t('Multi Chain - Multi Services')}</span>
                            </Banner.TopLeft>

                            <Banner.TopRight>
                                <div>
                                    <img src={getImage('banner-3')} />
                                    <span>{t('Shareholders NFT')}</span>
                                </div>
                            </Banner.TopRight>
                        </Banner.Top>

                        <Banner.Bottom>
                            <img
                                src={getImage('banner-1')}
                                className='theme-bottom-1'
                            />
                            <img
                                src={getImage('banner-2')}
                                className='theme-bottom-2'
                            />
                            <Button
                                size='lg'
                                outline='white'
                                className='theme-button'
                            >
                                {t('JOIN NOW')}
                            </Button>
                        </Banner.Bottom>
                    </Banner.Container>
                ) : (
                    <Banner.Container>
                        <Banner.TopLeft>
                            <p>{t('Join the revolution with')}</p>
                            <h1>{t('AZChain')}</h1>
                            <span>{t('Multi Chain - Multi Services')}</span>
                        </Banner.TopLeft>

                        <Banner.Bottom>
                            <img
                                src={getImage('banner-1')}
                                className='theme-bottom-1'
                            />
                            <img
                                src={getImage('banner-2')}
                                className='theme-bottom-2'
                            />
                            <Button
                                size='lg'
                                outline='white'
                                className='theme-button'
                            >
                                {t('JOIN NOW')}
                            </Button>
                        </Banner.Bottom>

                        <Banner.TopRight>
                            <div>
                                <img src={getImage('banner-3')} />
                                <span>{t('Shareholders NFT')}</span>
                            </div>
                        </Banner.TopRight>
                    </Banner.Container>
                )}

                {!isMobile ? (
                    <Introduction.Container>
                        <Introduction.ImageBlock>
                            <img src={getImage('about-1')} />
                            <Introduction.ImageText>
                                <div>
                                    <p>10k+</p>
                                    <span>{t('reviews')}</span>
                                </div>
                                <div>
                                    <p>1k+</p>
                                    <span>{t('users')}</span>
                                </div>
                                <div>
                                    <p>500+</p>
                                    <span>{t('rate NFTs')}</span>
                                </div>
                            </Introduction.ImageText>
                        </Introduction.ImageBlock>

                        <Introduction.Content>
                            <h2>{t('Introduction')}</h2>
                            <h1>{t('AZCHAIN NFT')}</h1>
                            <p>
                                {t(
                                    'We are excited to present the AZChain NFT collection, where the NFT Shareholders play a pivotal role in the foundation of our entire ecosystem.'
                                )}
                            </p>
                            <h3>{t('Safety - Security - Transparency')}</h3>
                        </Introduction.Content>

                        <Introduction.ImageBlock>
                            <img src={getImage('about-2')} />
                        </Introduction.ImageBlock>
                    </Introduction.Container>
                ) : (
                    <Introduction.Container>
                        <Introduction.Content>
                            <h2>{t('Introduction')}</h2>
                            <h1>{t('AZCHAIN NFT')}</h1>
                            <p>
                                {t(
                                    'We are excited to present the AZChain NFT collection, where the NFT Shareholders play a pivotal role in the foundation of our entire ecosystem.'
                                )}
                            </p>
                            <h3>{t('Safety - Security - Transparency')}</h3>
                        </Introduction.Content>

                        <Introduction.ImageBlock>
                            <img src={getImage('about-1')} />
                            <Introduction.ImageText>
                                <div>
                                    <p>10k+</p>
                                    <span>{t('reviews')}</span>
                                </div>
                                <div>
                                    <p>1k+</p>
                                    <span>{t('users')}</span>
                                </div>
                                <div>
                                    <p>500+</p>
                                    <span>{t('rate NFTs')}</span>
                                </div>
                            </Introduction.ImageText>
                        </Introduction.ImageBlock>

                        <Introduction.ImageBlock>
                            <img src={getImage('about-2')} />
                        </Introduction.ImageBlock>
                    </Introduction.Container>
                )}

                <About.Container>
                    <About.Background />

                    <img src='./images/logo-dark.png' />

                    <p>
                        {t(
                            'Explore the brilliant minds behind NFT AZChain and how they have transformed the AZChain ecosystem, seamlessly combining innovation with sustainable and engaging investment opportunities.'
                        )}
                    </p>

                    <About.Wrapper>
                        <img src={getImage('about-3')} />

                        <About.ListBlock>
                            <div>
                                <About.Block>
                                    <p>{t('NFT Collection')}</p>
                                    <span>
                                        {t(
                                            'Showcasing all collections on the Blockchain with continuous analysis.'
                                        )}
                                    </span>
                                </About.Block>
                            </div>
                            <div>
                                <About.Block>
                                    <p>{t('Address Profile')}</p>
                                    <span>
                                        {t(
                                            'Easily access and view personal NFT data on-chain through convenient lookups.'
                                        )}
                                    </span>
                                </About.Block>
                            </div>
                        </About.ListBlock>

                        <About.ListBlock>
                            <div>
                                <About.Block>
                                    <p>{t('Initial Launch')}</p>
                                    <span>
                                        {t(
                                            'Established presence on social media platforms (Discord, Telegram, X...).'
                                        )}
                                    </span>
                                </About.Block>
                            </div>
                            <div>
                                <About.Block>
                                    <p>{t('Contract Verification')}</p>
                                    <span>
                                        {t(
                                            'Ongoing development and expansion of the NFT marketplace.'
                                        )}
                                    </span>
                                </About.Block>
                            </div>
                        </About.ListBlock>
                    </About.Wrapper>
                </About.Container>
            </Responsive>
        </Container>
    )
}

export default WhiteHome
