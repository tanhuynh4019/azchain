import Button from '@/components/Button'
import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

export const Theme = {
    Container: styled.div`
        height: 600px;
        position: relative;
    `,
    Title: styled.div`
        position: relative;
        font-size: 128px;
        font-weight: 900;
        line-height: 100px;
        text-align: center;
        padding-top: 80px;
        color: white;

        > span {
            color: red;
            margin-right: 20px;
            padding-right: 20px;
        }
    `,
    RedBlock: styled.div`
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background: red;
    `,
    Image: styled.div`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);

        > img {
            max-width: 500px;
            width: 100%;
            height: 100%;
        }
    `
}

export const Introduction = {
    Container: styled.div`
        display: flex;
        gap: 30px;
        align-items: center;
        margin-top: 150px;
    `,
    Left: styled.div`
        flex: 1;
    `,
    TitleSmall: styled.div`
        font-size: 32px;
        font-weight: 600;
    `,
    Title: styled.div`
        font-size: 64px;
        font-weight: 600;
        line-height: 61px;
        margin-bottom: 20px;
    `,
    TitleWeight: styled.div`
        font-size: 64px;
        font-weight: 600;
        line-height: 61px;
        font-weight: 900;
    `,
    Text: styled.div`
        line-height: 25px;
        margin-top: 10px;
        margin-bottom: 30px;
    `,
    Right: styled.div`
        width: 400px;
    `,
    RightBg: styled.div`
        background: red;
        width: 100%;
        aspect-ratio: 10/8;
        border-radius: 50px;
        position: relative;
    `,
    RightImage: styled.div`
        position: absolute;
        left: 50%;
        top: 80px;
        transform: translateX(-50%);
        width: 110%;
        height: 110%;

        > svg {
            width: 100%;
            height: 100%;
        }
    `
}

export const Join = {
    Container: styled.div`
        margin-top: 150px;
    `,
    Title: styled.div`
        font-size: 64px;
        font-weight: 700;
        line-height: 66px;
        color: #ed1c24;
        margin-bottom: 20px;
    `,
    Box: styled.div`
        padding: 40px;
        border-radius: 50px;
        background: #ed1c24;

        display: flex;
    `,
    BoxLeft: styled.div`
        flex: 1;
        > p {
            color: white;
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 20px;
        }
    `,
    BoxRight: styled.div`
        width: 500px;
        position: relative;

        > img {
            position: absolute;
            top: 30%;
            right: -50px;
            transform: translateY(-50%);
            width: 100%;
        }

        @media screen and (max-width: 1200px) {
            width: 300px;

            > img {
                top: 50%;
                right: 0;
            }
        }
    `
}

export const Collection = {
    Container: styled.div`
        margin-top: 150px;
    `,
    SmallTitle: styled.div`
        font-size: 48px;
        text-align: center;
        font-weight: 600;
        margin-bottom: 10px;
    `,
    Title: styled.div`
        font-size: 64px;
        font-weight: 900;
        line-height: 61px;
        margin-bottom: 60px;
        text-align: center;
    `,
    Slide: styled(SwiperSlide)`
        cursor: pointer;
        > img {
            width: 100%;
        }
    `
}

export const Friendship = {
    Container: styled.div`
        margin-top: 250px;
        margin-bottom: 100px;
    `,
    Background: styled.div`
        position: relative;
        background: #1f1f1f;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    Text: styled.div`
        font-weight: 700;
        font-size: 64px;
        color: white;
        padding-top: 220px;
    `,
    Button: styled(Button)`
        margin: 20px 0 40px 0;
    `,
    Image: styled.div`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 240px;

        > img {
            width: 100%;
            max-width: 550px;
        }
    `
}

export const Responsive = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    @media screen and (max-width: 992px) {
        ${Theme.Container} {
            height: 350px;
        }
        ${Theme.Title} {
            font-size: 40px;
            padding-top: 40px;

            > span {
                margin-right: 10px;
                padding-right: 10px;
            }
        }
        ${Theme.Image} {
            > img {
                width: 300px;
            }
        }

        ${Introduction.Container} {
            margin-top: 100px;
            flex-direction: column;

            button {
                margin: auto;
            }
        }
        ${Introduction.TitleSmall} {
            font-size: 24px;
        }
        ${Introduction.Title} {
            font-size: 40px;
            line-height: normal;
            margin-bottom: 0;
        }
        ${Introduction.TitleWeight} {
            font-size: 40px;
            line-height: normal;
        }
        ${Introduction.Right} {
            width: 300px;
        }

        ${Join.Title} {
            font-size: 40px;
            line-height: normal;
            text-align: center;
        }
        ${Join.Box} {
            padding: 20px;
            border-radius: 20px;
            flex-direction: column-reverse;
            align-items: center;
            margin-top: 170px;
        }
        ${Join.BoxLeft} {
            text-align: center;
            button {
                margin: auto;
            }
            > p {
                font-size: 24px;
            }
        }
        ${Join.BoxRight} {
            width: 160px;

            > img {
                top: -180px;
                transform: none;
            }
        }

        ${Collection.Container} {
            margin-top: 100px;
        }
        ${Collection.SmallTitle} {
            font-size: 30px;
            margin-bottom: 0;
        }
        ${Collection.Title} {
            font-size: 40px;
            margin-bottom: 30px;
        }

        ${Friendship.Container} {
            margin-top: 120px;
        }
        ${Friendship.Image} {
            width: 280px;
            bottom: 160px;
        }
        ${Friendship.Text} {
            font-size: 24px;
            padding-top: 140px;
        }
    }
`
