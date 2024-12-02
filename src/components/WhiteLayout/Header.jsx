import React from 'react'
import { Header } from './WhiteLayout.styled'
import Container from '../Container'
import { useGlobalContext } from '@/context/GlobalContext'
import Button from '../Button'
import LanguageIcon from '@/images/LanguageIcon'

const HeaderContainer = () => {
    const { t, isMobile, language } = useGlobalContext()

    const scrollToElement = (id) => {
        const element = document.getElementById(id)
        const offset = 100
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        })
    }

    return (
        <Header.Container>
            <Container>
                <Header.Logo>
                    <img
                        src={
                            isMobile
                                ? '/images/icon.png'
                                : '/images/logo-dark.png'
                        }
                    />
                </Header.Logo>

                <Header.Right>
                    <Header.Center>
                        <Header.CenterItem
                            onClick={() => scrollToElement('about-us')}
                        >
                            {t('About us')}
                        </Header.CenterItem>
                        <Header.CenterItem
                            onClick={() => scrollToElement('roadmap')}
                        >
                            {t('Roadmap')}
                        </Header.CenterItem>
                        <Header.CenterItem
                            onClick={() => scrollToElement('collection')}
                        >
                            {t('Collection')}
                        </Header.CenterItem>
                        <Header.CenterItem
                            onClick={() => scrollToElement('ecosystem')}
                        >
                            {t('Ecosystem')}
                        </Header.CenterItem>
                    </Header.Center>

                    <Button>{t('JOIN NOW')}</Button>

                    <Header.Language href={language === 'en' ? '/' : '/home'}>
                        <LanguageIcon color='#171717' />
                        {language}
                    </Header.Language>
                </Header.Right>
            </Container>
        </Header.Container>
    )
}

export default HeaderContainer
