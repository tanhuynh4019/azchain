import Button from '@/components/Button'
import styled, { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Responsive = styled.div`
    color: #3e3a46;
`

export const Title = styled.div`
    font-size: 48px;
    line-height: 53px;
    font-weight: 800;
    text-align: center;
    margin: auto;
    text-transform: uppercase;

    > div {
        width: 70px;
        height: 10px;
        background: #1264ff;
        border-radius: 5px;
        margin: 10px auto;
    }

    @media (max-width: 992px) {
        font-size: 36px;
        line-height: 38px;
    }
`

export const Banner = {
    Container: styled.div``,
    Top: styled.div`
        display: flex;
    `,
    TopLeft: styled.div`
        flex: 1;
        padding-top: 150px;
        padding-bottom: 50px;

        > p {
            font-size: 48px;
            font-weight: 800;
            line-height: 50px;
        }
        > h1 {
            font-size: 96px;
            font-weight: 800;
            margin: 0;
        }
        > span {
            font-size: 32px;
        }

        @media (max-width: 992px) {
            padding-top: 50px;
            padding-bottom: 0;
            text-align: center;

            > p {
                font-size: 32px;
                line-height: 34px;
            }
            > h1 {
                font-size: 64px;
            }
            > span {
                font-size: 24px;
            }
        }
    `,
    TopRight: styled.div`
        flex: 1;
        background: #e1ecf4;
        border-radius: 0 40px 0 0;

        > div {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            font-size: 24px;
            font-weight: 700;
            margin-top: 300px;

            > img {
                position: absolute;
                left: 50%;
                bottom: -50px;
                transform: translateX(-50%);
                width: 300px;
            }
        }

        @media (max-width: 992px) {
            background: none;

            > div {
                margin-top: 250px;
            }
        }
    `,
    Bottom: styled.div`
        height: 300px;
        background: #e1ecf4;
        border-radius: 40px 0 40px 40px;
        position: relative;

        .theme-bottom-1 {
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 80%;
        }
        .theme-bottom-2 {
            position: absolute;
            left: 50%;
            bottom: -60px;
            transform: translateX(-50%);
            width: 50%;
        }
        .theme-button {
            position: absolute;
            left: 50%;
            bottom: -35px;
            transform: translateX(-50%);
        }

        @media (max-width: 992px) {
            height: auto;
            aspect-ratio: 344 / 154;
            border-radius: 20px;
            margin-top: 40%;

            .theme-bottom-1 {
                width: 90%;
                top: 20%;
            }
            .theme-bottom-2 {
                width: 100%;
            }
        }
    `
}

export const Introduction = {
    Container: styled.div`
        display: flex;
        align-items: center;
        gap: 40px;
        margin-top: 150px;

        @media (max-width: 992px) {
            flex-direction: column;
            margin-top: 80px;
        }
    `,
    ImageBlock: styled.div`
        flex: 1;
        max-width: 430px;

        > img {
            width: 100%;
        }
    `,
    ImageText: styled.div`
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        color: #9bb7d6;
        text-align: center;

        p {
            font-size: 32px;
            font-weight: bold;
        }
        span {
            font-size: 16px;
            margin-top: 20px;
        }

        @media (max-width: 992px) {
            margin-top: 0;
        }
    `,
    Content: styled.div`
        flex: 1;

        > h2 {
            font-size: 32px;
        }
        > h1 {
            font-size: 46px;
        }
        > p {
            font-size: 16px;
            line-height: 20px;
            margin-top: 20px;
        }
        > h3 {
            font-size: 20px;
            font-weight: 700;
            margin-top: 10px;
        }

        @media (max-width: 992px) {
            flex-direction: column;
        }
    `
}

export const About = {
    Container: styled.div`
        position: relative;
        margin-top: 150px;

        > img {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 30px;
        }
        > p {
            position: relative;
            font-size: 16px;
            line-height: 20px;
            width: 50%;
            margin: auto;
            text-align: center;
            margin-top: 10px;
        }

        @media (max-width: 992px) {
            margin-top: 80px;

            > p {
                width: 100%;
                padding: 10px;
            }
        }
    `,
    Background: styled.div`
        position: absolute;
        width: 100%;
        height: 80%;
        background: #e1ecf4;
        border-radius: 40px;
    `,
    Wrapper: styled.div`
        position: relative;
        width: 70%;
        margin: 50px auto 0 auto;
        padding: 10px;

        display: flex;
        flex-direction: column;
        gap: 250px;

        > img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }

        @media (max-width: 992px) {
            width: 100%;
            margin: 0;
        }
    `,
    ListBlock: styled.div`
        display: flex;
        gap: 10px;
        position: relative;

        > div:first-child {
            flex: 1;
        }
        > div:last-child {
            flex: 1;
            display: flex;
            justify-content: flex-end;
        }

        @media (max-width: 992px) {
            flex-direction: column;
        }
    `,
    Block: styled.div`
        width: 262px;
        height: 130px;
        background: white;
        padding: 20px 16px;
        border-radius: 20px;

        > p {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        > span {
            font-size: 14px;
            line-height: 20px;
        }
    `
}

export const Roadmap = {
    Container: styled.div`
        margin-top: 150px;

        > p {
            font-size: 20px;
            margin-top: 20px;
            text-align: center;
        }

        @media (max-width: 992px) {
            margin-top: 80px;

            > p {
                font-size: 16px;
            }
        }
    `,
    StepContainer: styled.div`
        margin-top: 90px;

        @media (max-width: 992px) {
            margin-top: 30px;
        }
    `,
    Step: styled.div`
        border-top: 1px solid #232531;
        padding: 16px 0;

        > div {
            display: flex;
            justify-content: space-between;

            > div {
                display: flex;
                align-items: center;
                gap: 50px;
                font-size: 36px;
                font-weight: 700;

                > div {
                    width: 38px;
                    height: 15px;
                    border-radius: 15px;
                    background: #1264ff;
                }
            }
            > span {
                font-size: 36px;
                font-weight: 700;
                color: #9bb7d6;
            }
        }
        > p {
            margin-top: 10px;
            font-size: 16px;
        }

        @media (max-width: 992px) {
            > div {
                > div {
                    font-size: 24px;
                    gap: 15px;

                    > div {
                        height: 10px;
                    }
                }
                > span {
                    font-size: 24px;
                }
            }
        }
    `
}

export const Collection = {
    Container: styled.div`
        margin-top: 150px;
    `,
    SlideShow: styled(Swiper)`
        margin-top: 50px;
        .swiper-slide {
            transform: scale(0.9);
            transition: 0.25s;
            opacity: 0.7;
        }
        .swiper-slide-active {
            transform: scale(1);
            opacity: 1;
        }
    `,
    Slide: styled(SwiperSlide)`
        > img {
            width: 100%;
        }
    `,
    Button: styled(Button)`
        margin: 40px auto 20px auto;
    `,
    Pagination: styled.div`
        display: flex;
        justify-content: center;
        gap: 30px;

        > button {
            width: 76px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #dadada;
            border-radius: 50px;
            cursor: pointer;
        }
        > button:nth-child(2) {
            transform: rotate(180deg);
        }
    `
}

export const FAQ = {
    Container: styled.div`
        margin-top: 150px;
        margin-bottom: 100px;
        background: #e1ecf4;
        border-radius: 50px;
        padding: 80px 60px;

        > img {
            width: 100%;
            margin-top: 40px;
        }

        @media (max-width: 992px) {
            width: calc(100% + 32px);
            margin-top: 80px;
            margin-left: -16px;
            margin-bottom: 40px;
            border-radius: 0;
            padding: 40px 16px;

            > img {
                margin-top: 30px;
            }
        }
    `,
    Wrapper: styled.div`
        display: flex;
        margin: 60px 0;

        > div:nth-child(1) {
            flex: 1;
            display: flex;
            justify-content: center;

            > img {
                width: 100%;
                max-width: 360px;
                height: fit-content;
            }
        }
        > div:nth-child(2) {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        @media (max-width: 992px) {
            margin: 30px 0;

            > div:nth-child(1) {
                display: none;
            }
        }
    `,
    Question: styled.div`
        background: white;
        border-radius: 10px;
        padding: 16px;
        font-size: 16px;
        cursor: pointer;

        > p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            font-weight: 700;
        }
        > div {
            line-height: 20px;
            > p {
                padding-top: 10px;
            }
            > p svg {
                transform: rotate(180deg);
            }
        }

        ${({ isCollapse }) =>
            isCollapse &&
            css`
                > p svg {
                    transform: rotate(180deg);
                }
            `}

        @media (max-width: 992px) {
            padding: 10px;
            font-size: 12px;
        }
    `,
    SocialList: styled.div`
        margin-top: 40px;
        display: flex;
        justify-content: space-around;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            cursor: pointer;

            span {
                font-size: 16px;
                font-weight: 500;
            }

            svg {
                width: 70px;
                height: 70px;
            }
        }

        @media (max-width: 992px) {
            margin-top: 20px;

            > div {
                gap: 10px;

                span {
                    font-size: 10px;
                }

                svg {
                    width: 32px;
                    height: 32px;
                }
            }
        }
    `
}
