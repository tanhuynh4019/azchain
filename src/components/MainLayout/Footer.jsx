import React from 'react'
import { Footer } from './MainLayout.styled'
import Container from '../Container'
import FacebookIcon from '@/images/FacebookIcon'
import InstagramIcon from '@/images/InstagramIcon'
import TwitterIcon from '@/images/TwitterIcon'
import YoutubeIcon from '@/images/YoutubeIcon'
import { useGlobalContext } from '@/context/GlobalContext'

const FooterContainer = () => {
    const { t } = useGlobalContext()

    return (
        <Footer.Container>
            <Container>
                <Footer.Top>
                    <img src='/images/logo.png' />

                    <span>
                        © 2024 <b>AZChain</b> All rights reserved.
                    </span>

                    <Footer.SocialList>
                        {/* <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon /> */}
                        <a href="https://www.youtube.com/@azchain" target="_blank" rel="noopener noreferrer">
                            <YoutubeIcon />
                        </a>
                    </Footer.SocialList>
                </Footer.Top>

                <Footer.Menu>
                    <a href='https://nft.azchain.app/'>{t('Buy now')}</a>
                    <a href='https://docs.google.com/document/d/1YQ1r9YNSIUXYsjDXRheI6m0DQqgpQTy07YGmbL3KOcg/edit?usp=sharing'>{t('Terms of Service')}</a>
                    <a href='https://docs.google.com/document/d/1YQ1r9YNSIUXYsjDXRheI6m0DQqgpQTy07YGmbL3KOcg/edit?usp=sharing'>{t('Privacy Policy')}</a>
                    <a>{t('Disclaimer')}</a>
                    <a href='https://docs.google.com/document/d/1_u1vQCrpoyWpa8lLCUeW38Q1kv6ae1i4-hF5m4gageg/edit?usp=sharing'>{t('Support Center')}</a>
                </Footer.Menu>

                <Footer.Text>
                    {t(
                        'Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.'
                    )}
                </Footer.Text>
            </Container>
        </Footer.Container>
    )
}

export default FooterContainer
