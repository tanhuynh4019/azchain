import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useRouter } from 'next/navigation'

import Container from '@/components/Container'
import {
    AZGPay,
    About,
    Banner,
    Benefit,
    Contract,
    DarkContainer,
    Ecosystem,
    GradientText,
    Partner,
    RoadMap,
    Token
} from './DarkHome.styled'
import Button from '@/components/Button'
import Slider from '@/components/Slider/Index'
import ArrowCircleIcon from '@/images/ArrowCricleIcon'

import { useGlobalContext } from '@/context/GlobalContext'

const DarkHome = () => {
    const { t, isMobile, language } = useGlobalContext()
    const router = useRouter()
    const prevButtonRef = useRef(null)
    const nextButtonRef = useRef(null)
    const swiperRef = useRef(null)

    const goToWhitePage = () => {
        router.push('/nft' + language === 'vi' ? '?lang=vi' : '')
    }

    useEffect(() => {
        if (swiperRef.current) {
            const slides = swiperRef.current.querySelectorAll('.swiper-slide')
            const maxHeight = Math.max(
                ...Array.from(slides).map((slide) => slide.offsetHeight)
            )
            slides.forEach((slide) => (slide.style.height = `${maxHeight}px`))
        }
    }, [])

    return (
        <DarkContainer>
            {/* Banner section */}
            <Banner.Container>
                <Container>
                    <Banner.Left>
                        <Banner.Title>{t('AZChain')}</Banner.Title>
                        <Banner.SmallTitle>
                            {t('Multi Chain - Multi Services')}
                        </Banner.SmallTitle>
                        <Banner.Description>
                            {t('Secure DeFi Infrastructure')}
                        </Banner.Description>
                        <Banner.ButtonList>
                            <Button size='lg' onClick={goToWhitePage}>
                                {t('JOIN NOW')}
                            </Button>
                            <Button
                                size='lg'
                                outline='gradient'
                                onClick={() =>
                                    language === 'en'
                                        ? (window.location.href =
                                              'https://docs.en.azchain.app/')
                                        : (window.location.href =
                                              'https://docs.vi.azchain.app/')
                                }
                            >
                                {t('WHITEPAPER')}
                            </Button>
                        </Banner.ButtonList>
                    </Banner.Left>

                    <Banner.Right>
                        <img src='/images/dark_home/banner-1.png' />
                    </Banner.Right>
                </Container>

                <img src='/images/dark_home/banner-2.png' />
                <Banner.DeepWrapper />
            </Banner.Container>

            {/* About us section */}
            <Container>
                <About.Container id='about-us'>
                    <About.Wraper>
                        <About.Top>
                            <About.TopLeft>
                                <About.SmallTitle>
                                    {t('About')}
                                </About.SmallTitle>
                                <GradientText>AZChain</GradientText>
                                <p>
                                    {t(
                                        'In the wave of global economic transformation towards digital solutions, coupled with the trend of green and sustainable economic development, AZChain emerges as a specialized blockchain platform, pioneering in meeting innovation needs.'
                                    )}
                                </p>
                                <p>
                                    {t(
                                        'AZChain provides secure and transparent blockchain solutions for data management and asset tokenization, with the ability to process transactions quickly and with high security. It addresses diverse needs in finance, commerce, and governance, while also contributing to the advancement of the digital and green economy.'
                                    )}
                                </p>
                            </About.TopLeft>

                            <About.TopRight>
                                <img src='/images/dark_home/introduction-1.png' />
                            </About.TopRight>
                        </About.Top>

                        <About.Bottom>
                            <About.BottomBox>
                                <p>{t('High security and safety')}</p>
                                <span>
                                    {t(
                                        'AZChain provides data encryption mechanisms and two-factor authentication to ensure your assets are safely protected from risks of loss or unauthorized access.'
                                    )}
                                </span>
                            </About.BottomBox>

                            <About.BottomBox>
                                <p>{t('Easy to use')}</p>
                                <span>
                                    {t(
                                        'AZChain offers a simple and user-friendly interface, allowing users to easily manage and trade cryptocurrencies conveniently and quickly.'
                                    )}
                                </span>
                            </About.BottomBox>

                            <About.BottomBox>
                                <p>{t('Versatile and convenient')}</p>
                                <span>
                                    {t(
                                        'AZChain allows users to store and manage multiple cryptocurrencies across various networks on a single platform.'
                                    )}
                                </span>
                            </About.BottomBox>
                        </About.Bottom>
                    </About.Wraper>
                </About.Container>

                {/* AZG Pay */}
                <AZGPay.Container>
                    <AZGPay.Left>
                        <img src='/images/dark_home/introduction-2.png' />
                    </AZGPay.Left>

                    <AZGPay.Right>
                        <AZGPay.SmallTitle>
                            {t('Secure gateway to the ecosystem')}
                        </AZGPay.SmallTitle>
                        <GradientText>AZGPay</GradientText>
                        <AZGPay.Description>
                            {t(
                                'As part of our commitment to empower users with seamless access to the AZChain ecosystem, we are proud to introduce AZGPay Wallet, an advanced multi-chain and multi-payment method digital wallet designed with security and usability at its core.'
                            )}
                        </AZGPay.Description>
                    </AZGPay.Right>
                </AZGPay.Container>

                {/* Benefit */}
                <Benefit.Container>
                    <Benefit.Left>
                        <img src='/images/dark_home/introduction-3.png' />
                    </Benefit.Left>

                    <Benefit.Right>
                        <GradientText>{t('Benefits we offer')}</GradientText>
                        <Benefit.SmallTitle>
                            {t(
                                'Unlock the full potential of the product with top-tier features and quality.'
                            )}
                        </Benefit.SmallTitle>
                        <Benefit.BoxText>
                            {t(
                                'Artificial intelligence, safe solution for beginners'
                            )}
                        </Benefit.BoxText>
                        <Benefit.BoxText>
                            {t(
                                'More security and control over your money than the rest'
                            )}
                        </Benefit.BoxText>
                        <Benefit.BoxText>
                            {t(
                                'Flexible and easier mobile payments for all investors'
                            )}
                        </Benefit.BoxText>
                        <Benefit.BoxText>
                            {t(
                                'Earn daily interest. When storing cryptocurrency at AZChain'
                            )}
                        </Benefit.BoxText>
                    </Benefit.Right>
                </Benefit.Container>

                {/* Token */}
                <Token.Container id='token'>
                    <Token.Left>
                        <GradientText>Token AZC</GradientText>
                        <Token.LeftText>
                            {t(
                                '$AZC is the native utility token of the AZChain ecosystem, designed to facilitate secure and efficient transactions within our platform. It plays a central role in maintaining network operations, incentivizing participation, and enabling access to tokenized real-world assets.'
                            )}
                        </Token.LeftText>

                        <Token.InfoContainer>
                            <Token.InfoItem>
                                <span>{t('Token name')}</span>
                                <span>AZChain</span>
                            </Token.InfoItem>
                            <Token.InfoItem>
                                <span>{t('Token symbol')}</span>
                                <span>AZC</span>
                            </Token.InfoItem>
                            <Token.InfoItem>
                                <span>{t('Network')}</span>
                                <span>Ethereum</span>
                            </Token.InfoItem>
                            <Token.InfoItem>
                                <span>{t('Total supply')}</span>
                                <span>1.000.000.000</span>
                            </Token.InfoItem>
                            <Token.InfoItem>
                                <span>{t('Decimal code')}</span>
                                <span>18</span>
                            </Token.InfoItem>
                            <Token.InfoItem>
                                <span>{t('Token type')}</span>
                                <span>{t('Practicality')}</span>
                            </Token.InfoItem>
                        </Token.InfoContainer>
                    </Token.Left>

                    <Token.Right>
                        <img src='/images/dark_home/token-1.png' />
                        <Token.RightText>
                            {t(
                                'All AZChain smart contracts will be audited by top global security firms such as Certik, Cyberscope, Quantstamp, Salus before launch.'
                            )}
                        </Token.RightText>
                        <Token.ListIcon>
                            <img src='/images/dark_home/token-logo-1.png' />
                            <img src='/images/dark_home/token-logo-2.png' />
                            <img src='/images/dark_home/token-logo-3.png' />
                            <img src='/images/dark_home/token-logo-4.png' />
                        </Token.ListIcon>
                    </Token.Right>
                </Token.Container>

                {/* Ecosystem */}
                <Ecosystem.Container id='ecosystem'>
                    <GradientText>{t('Ecosystem')}</GradientText>
                    <Ecosystem.SmallTitle>
                        {t(
                            'Unleash the power of tokenizing real-world assets and digitization with the AZChain ecosystem'
                        )}
                    </Ecosystem.SmallTitle>
                    <Ecosystem.Description>
                        {t(
                            'The AZChain ecosystem is designed to seamlessly connect blockchain technology with real-world assets, providing an innovative way to invest in industries like real estate, agriculture, and digitization by bridging businesses and consumers worldwide. By tokenizing these assets, AZChain turns them into digital assets that can be easily bought, sold, and traded, opening up new investment opportunities for everyone.'
                        )}
                    </Ecosystem.Description>

                    <Slider
                        slidesPerView={1}
                        breakpoints={{
                            500: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 4
                            },
                            1200: {
                                slidesPerView: 5
                            }
                        }}
                        spaceBetween={20}
                        style={{ marginTop: 20, paddingBottom: 40 }}
                    >
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-6.png`}
                                />
                                <p>{t('WALLET')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-1.png`}
                                />
                                <p>{t('CARBON')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-2.png`}
                                />
                                <p>{t('E-commerce')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-3.png`}
                                />
                                <p>{t('Exchange')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-4.png`}
                                />
                                <p>{t('NFT MARKETPLACE')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-5.png`}
                                />
                                <p>{t('GAMEFI')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-7.png`}
                                />
                                <p>{t('AI INSURANCE HUB')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-8.png`}
                                />
                                <p>{t('AI TRADING')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-9.png`}
                                />
                                <p>{t('LAUNCHPAD')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Ecosystem.SlideItem>
                                <img
                                    src={`/images/dark_home/ecosystem-10.png`}
                                />
                                <p>{t('SOCIALFI')}</p>
                            </Ecosystem.SlideItem>
                        </SwiperSlide>
                    </Slider>
                </Ecosystem.Container>

                {/* Roadmap */}
                <RoadMap.Container id='roadmap'>
                    <RoadMap.Theme src='/images/dark_home/roadmap-theme.png' />

                    <RoadMap.Left language={language}>
                        <RoadMap.SmallTitle>{t('Roadmap')}</RoadMap.SmallTitle>
                        <GradientText>{t('Development')}</GradientText>
                        <RoadMap.ListButton>
                            <button ref={prevButtonRef}>
                                <ArrowCircleIcon width={40} />
                            </button>
                            <button ref={nextButtonRef}>
                                <ArrowCircleIcon width={40} />
                            </button>
                        </RoadMap.ListButton>
                    </RoadMap.Left>

                    <RoadMap.Right>
                        <Swiper
                            ref={swiperRef}
                            slidesPerView={1}
                            breakpoints={{
                                992: {
                                    slidesPerView: 2
                                },
                                1300: {
                                    slidesPerView: 3
                                }
                            }}
                            spaceBetween={20}
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
                            <SwiperSlide>
                                <RoadMap.SlideItem>
                                    <img src='/images/dark_home/roadmap-arrow.png' />
                                    <span>2023 - 2024</span>
                                    <div>
                                        <div>
                                            <div /> {t('Research')}
                                        </div>
                                        <div>
                                            <div /> {t('Idea generation')}
                                        </div>
                                        <div>
                                            <div />{' '}
                                            {t('Implementation planning')}
                                        </div>
                                        <div>
                                            <div /> {t('Team building')}
                                        </div>
                                        <div>
                                            <div /> {t('Platform building')}
                                        </div>
                                        <div>
                                            <div /> {t('Community connection')}
                                        </div>
                                        <div>
                                            <div />
                                            {t('Developing private chains')}
                                        </div>
                                        <div>
                                            <div />
                                            {t(
                                                'Q4/2024: Launch of the AZChain Project'
                                            )}
                                        </div>
                                        <div>
                                            <div />
                                            {t('Release of NFTs and Tokens')}
                                        </div>
                                    </div>
                                </RoadMap.SlideItem>
                            </SwiperSlide>

                            <SwiperSlide>
                                <RoadMap.SlideItem>
                                    <img src='/images/dark_home/roadmap-arrow.png' />
                                    <span>2025</span>
                                    <div>
                                        <div>
                                            <div />
                                            {t(
                                                'Quarter I: Deploy the Carbon project'
                                            )}
                                        </div>
                                        <div>
                                            <div />
                                            {t(
                                                'Quarter III: Launch the decentralized Carbon exchange'
                                            )}
                                        </div>
                                        <div>
                                            <div />
                                            {t(
                                                'Quarter IV: Deploy the decentralized e-commerce project'
                                            )}
                                        </div>
                                    </div>
                                </RoadMap.SlideItem>
                            </SwiperSlide>

                            <SwiperSlide>
                                <RoadMap.SlideItem>
                                    <img src='/images/dark_home/roadmap-arrow.png' />
                                    <span>2026</span>
                                    <div>
                                        <div>
                                            <div />
                                            {t(
                                                'Quarter I: Launch decentralized e-commerce'
                                            )}
                                        </div>
                                        <div>
                                            <div />
                                            {t(
                                                'Quarter II - Quarter III: Develop and expand'
                                            )}
                                        </div>
                                        <div>
                                            <div />
                                            {t(
                                                'Develop a national and Southeast Asian retail chain'
                                            )}
                                        </div>
                                        <div>
                                            <div />
                                            {t(
                                                'Quarter IV: 2026 Listing token'
                                            )}
                                        </div>
                                    </div>
                                </RoadMap.SlideItem>
                            </SwiperSlide>

                            <SwiperSlide>
                                <RoadMap.SlideItem>
                                    <img src='/images/dark_home/roadmap-arrow.png' />
                                    <span>2027</span>
                                    <div>
                                        <div>
                                            <div />
                                            {t(
                                                'Expand and develop the ecosystem'
                                            )}
                                        </div>
                                    </div>
                                </RoadMap.SlideItem>
                            </SwiperSlide>

                            <SwiperSlide>
                                <RoadMap.SlideItem>
                                    <img src='/images/dark_home/roadmap-arrow.png' />
                                    <span>2028</span>
                                    <div>
                                        <div>
                                            <div />
                                            {t('IPO in Vietnam and Singapore')}
                                        </div>
                                    </div>
                                </RoadMap.SlideItem>
                            </SwiperSlide>
                        </Swiper>
                    </RoadMap.Right>
                </RoadMap.Container>

                {/* Partner */}
                <Partner.Container>
                    <GradientText>{t('Partners')}</GradientText>

                    {isMobile && (
                        <Slider
                            slidesPerView={2}
                            breakpoints={{
                                500: {
                                    slidesPerView: 3
                                }
                            }}
                            spaceBetween={20}
                            style={{ marginTop: 20, paddingBottom: 40 }}
                        >
                            {[...Array(9)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <Partner.SlideItem>
                                        <img
                                            src={`/images/dark_home/partner-${
                                                index + 1
                                            }.png`}
                                        />
                                    </Partner.SlideItem>
                                </SwiperSlide>
                            ))}
                        </Slider>
                    )}
                    {!isMobile && (
                        <Partner.List>
                            {[...Array(9)].map((_, index) => (
                                <Partner.Item>
                                    <img
                                        src={`/images/dark_home/partner-${
                                            index + 1
                                        }.png`}
                                    />
                                </Partner.Item>
                            ))}
                        </Partner.List>
                    )}
                </Partner.Container>

                {/* Contract */}
                <Contract.Container id='contract'>
                    <GradientText>{t('SMART CONTRACT')}</GradientText>
                    <Contract.SmallTitle>
                        {t('International and will be implemented worldwide')}
                    </Contract.SmallTitle>

                    <Contract.Banner>
                        <Contract.Theme>
                            <img src='/images/dark_home/contract-1.png' />
                        </Contract.Theme>
                        <img src='/images/dark_home/contract-2.png' />
                        <Button size='lg' onClick={goToWhitePage}>
                            {t('JOIN NOW')}
                        </Button>
                    </Contract.Banner>
                </Contract.Container>
            </Container>
        </DarkContainer>
    )
}

export default DarkHome
