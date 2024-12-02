import React from 'react'
import { Footer } from './WhiteLayout.styled'
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
                    <img src='/images/logo-dark.png' />

                    <span>
                        © 2024 <b>AZChain</b> All rights reserved.
                    </span>

                    <Footer.SocialList>
                        <FacebookIcon color='#171717' />
                        <InstagramIcon color='#171717' />
                        <TwitterIcon color='#171717' />
                        <YoutubeIcon color='#171717' />
                    </Footer.SocialList>
                </Footer.Top>

                <Footer.Menu>
                    <a>{t('Buy now')}</a>
                    <a>{t('FAQ')}</a>
                    <a>{t('Media')}</a>
                    <a>{t('Disclaimers')}</a>
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
