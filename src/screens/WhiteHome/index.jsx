import React, { useRef } from 'react'
import { Navigation } from 'swiper/modules'

import {
    About,
    Banner,
    Collection,
    FAQ,
    Introduction,
    Responsive,
    Roadmap,
    Title
} from './WhiteHome.styled'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Question from './Question'
import FacebookIcon from '@/images/FacebookIcon'
import InstagramIcon from '@/images/InstagramIcon'
import TwitterIcon from '@/images/TwitterIcon'
import YoutubeIcon from '@/images/YoutubeIcon'
import WhiteArrow from '@/images/WhiteArrow'

import { useGlobalContext } from '@/context/GlobalContext'

const WhiteHome = () => {
    const { t, isMobile } = useGlobalContext()
    const prevButtonRef = useRef(null)
    const nextButtonRef = useRef(null)

    const getImage = (imageName) => `./images/white_home/${imageName}.png`

    const goToAzchain = () =>
        (window.location.href = 'https://nft.azchain.app/')

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
                                onClick={goToAzchain}
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
                                onClick={goToAzchain}
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
                    <Introduction.Container id='about-us'>
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
                    <Introduction.Container id='about-us'>
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

                <Roadmap.Container id='roadmap'>
                    <Title style={{ maxWidth: 400 }}>
                        {t('AZCHAIN NFT ROADMAP')} <div />
                    </Title>

                    <p>
                        {t(
                            'Follow our roadmap to discover what lies ahead in the AZChain NFT collection.'
                        )}
                    </p>

                    <Roadmap.StepContainer>
                        <Roadmap.Step>
                            <div>
                                <div>
                                    {t('STAGE')} <div />
                                </div>

                                <span>01</span>
                            </div>

                            <p>
                                {t(
                                    'We are releasing a limited edition of Shareholder NFTs, exclusively for angel investors, offering unique rights and attractive benefits.'
                                )}
                            </p>
                        </Roadmap.Step>
                        <Roadmap.Step>
                            <div>
                                <div>
                                    {t('STAGE')} <div />
                                </div>

                                <span>02</span>
                            </div>

                            <p>
                                {t(
                                    'We release NFTs for the ownership community, with a limited quantity.'
                                )}
                            </p>
                        </Roadmap.Step>
                    </Roadmap.StepContainer>
                </Roadmap.Container>

                <Collection.Container id='collection'>
                    <Title>
                        {t('Collection')} <div />
                    </Title>

                    <Collection.SlideShow
                        slidesPerView={2}
                        breakpoints={{
                            992: {
                                slidesPerView: 3
                            },
                            1300: {
                                slidesPerView: 5
                            }
                        }}
                        spaceBetween={20}
                        centeredSlides={true}
                        loop={true}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevButtonRef.current,
                            nextEl: nextButtonRef.current
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl =
                                prevButtonRef.current
                            swiper.params.navigation.nextEl =
                                nextButtonRef.current
                        }}
                    >
                        {[...Array(9)].map((_, idx) => (
                            <Collection.Slide>
                                <img
                                    src={getImage(
                                        `collection-${(idx % 5) + 1}`
                                    )}
                                />
                            </Collection.Slide>
                        ))}
                    </Collection.SlideShow>

                    <Collection.Button size='lg' onClick={goToAzchain}>
                        {t('JOIN NOW')}
                    </Collection.Button>

                    <Collection.Pagination>
                        <button ref={prevButtonRef}>
                            <WhiteArrow />
                        </button>
                        <button ref={nextButtonRef}>
                            <WhiteArrow />
                        </button>
                    </Collection.Pagination>
                </Collection.Container>

                <FAQ.Container id='faq'>
                    <Title>
                        {t('FAQs')} <div />
                    </Title>

                    <FAQ.Wrapper>
                        <div>
                            <img src={getImage('question-1')} />
                        </div>
                        <div>
                            <Question
                                title={t('What is AZChain?')}
                                description={t(
                                    'AZChain is a specialized blockchain platform designed to enable the tokenization of real-world assets and facilitate transparent financial transactions. Combining advanced technology with the trends of the digital and green economy, AZChain offers secure and efficient solutions in fields such as Carbon Credits, e-commerce, real estate, GameFi, and more.'
                                )}
                            />
                            <Question
                                title={t('What is AZChain NFT?')}
                                description={t(
                                    'AZChain NFT is a unique digital asset that represents ownership of tokenized real-world assets or access to exclusive features within the AZChain ecosystem.'
                                )}
                            />
                            <Question
                                title={t('How to join AZChain NFT?')}
                                description={t(
                                    'To join AZChain NFT, you need to create an AZChain wallet, purchase AZC tokens, and use them to acquire the desired NFTs through the AZChain marketplace.'
                                )}
                            />
                            <Question
                                title={t(
                                    'What are the benefits of owning AZChain NFT?'
                                )}
                                description={t(
                                    'Owning AZChain NFTs provides access to exclusive features, secure investments in tokenized assets, and opportunities for passive income through staking and rewards.'
                                )}
                            />
                            <Question
                                title={t('Is AZChain transparent and secure?')}
                                description={t(
                                    'Yes, AZChain prioritizes transparency and security through advanced blockchain technology, encrypted transactions, and regular audits by leading security firms.'
                                )}
                            />
                        </div>
                    </FAQ.Wrapper>

                    <img src={getImage('question-2')} />

                    <FAQ.SocialList>
                        <div>
                            <FacebookIcon color='#171717' />
                            <span>@azchain</span>
                        </div>
                        <div>
                            <InstagramIcon color='#171717' />
                            <span>@azchain</span>
                        </div>
                        <div>
                            <TwitterIcon color='#171717' />
                            <span>@azchain</span>
                        </div>
                        <div>
                            <YoutubeIcon color='#171717' />
                            <span>@azchain</span>
                        </div>
                    </FAQ.SocialList>
                </FAQ.Container>
            </Responsive>
        </Container>
    )
}

export default WhiteHome
