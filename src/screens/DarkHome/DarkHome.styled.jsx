import { styled } from 'styled-components'

export const GradientText = styled.div`
    background: linear-gradient(to right, #eb6168, #fcbf0d);
    -webkit-background-clip: text; /* For WebKit browsers */
    -webkit-text-fill-color: transparent; /* Makes the text transparent to show the gradient */
    display: inline;

    font-size: 58px;
    font-weight: 800;
`

export const Banner = {
    Container: styled.div`
        position: relative;

        > div:first-child {
            display: flex;
            position: relative;
            z-index: 3;
        }
        > img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
        }
    `,
    DeepWrapper: styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000ab;
    `,
    Left: styled.div`
        flex: 1;
        margin-top: 300px;
        margin-bottom: 150px;
    `,
    Title: styled.div`
        color: #fcbf0d;
        font-size: 96px;
        font-weight: 800;
        line-height: 90px;
    `,
    SmallTitle: styled.div`
        font-size: 48px;
        font-weight: 700;
    `,
    Description: styled.div`
        font-size: 36px;
        font-weight: 600;
        margin-top: 20px;
    `,
    ButtonList: styled.div`
        display: flex;
        gap: 24px;
        margin-top: 30px;
        flex-wrap: wrap;
    `,
    Right: styled.div`
        width: 500px;
        position: relative;

        > img {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: -100px;
        }
    `
}

export const About = {
    Container: styled.div`
        position: relative;
        z-index: 3;
        width: 100%;
        position: relative;
        display: inline-block;
        padding: 30px;
        background: linear-gradient(to bottom, #191919, #131321);
        border-radius: 50px;
        margin-top: -60px;
    `,
    Wraper: styled.div`
        background: linear-gradient(to bottom, #2d2e36, #131321);
        padding: 40px;
        border-radius: 40px;
    `,
    Top: styled.div`
        display: flex;
        gap: 30px;
        align-items: center;
        padding: 0 20px 20px 40px;
        border-bottom: 1px dashed gray;
    `,
    TopLeft: styled.div`
        flex: 3;

        p {
            margin-top: 20px;
            font-size: 16px;
        }
    `,
    TopRight: styled.div`
        flex: 2;

        > img {
            width: 100%;
        }
    `,
    SmallTitle: styled.div`
        font-size: 32px;
        font-weight: 700;
    `,
    Bottom: styled.div`
        margin-top: 40px;
        display: flex;
        gap: 30px;
    `,
    BottomBox: styled.div`
        flex: 1;
        padding: 24px;
        border-radius: 20px;
        background: #2d2e36;

        > p {
            font-size: 24px;
            margin: 0 0 10px 0;
            font-weight: 700;
        }
        > span {
            font-size: 14px;
        }
    `
}

export const AZGPay = {
    Container: styled.div`
        display: flex;
        align-items: center;
        gap: 30px;
        margin-top: 50px;
    `,
    Left: styled.div`
        flex: 4;

        > img {
            width: 100%;
        }
    `,
    Right: styled.div`
        flex: 3;
    `,
    SmallTitle: styled.div`
        font-size: 16px;
        font-weight: 500;
    `,
    Description: styled.div`
        font-size: 16px;
        line-height: 20px;
        margin-top: 15px;
    `
}

export const Benefit = {
    Container: styled.div`
        display: flex;
        align-items: center;
        gap: 30px;
        margin-top: 80px;
    `,
    Left: styled.div`
        flex: 4;

        > img {
            width: 100%;
        }
    `,
    Right: styled.div`
        flex: 3;
    `,
    SmallTitle: styled.div`
        font-size: 16px;
        font-weight: 500;
        padding: 20px 0;
    `,
    BoxText: styled.div`
        background: #1c1c2a;
        border-radius: 20px;
        padding: 20px 30px;
        font-size: 16px;
        margin-top: 20px;
    `
}

export const Token = {
    Container: styled.div`
        display: flex;
        gap: 50px;
        margin-top: 140px;
    `,
    Left: styled.div`
        flex: 1;
    `,
    LeftText: styled.div`
        font-size: 14px;
        margin-top: 10px;
    `,
    InfoContainer: styled.div`
        margin-top: 50px;
        background: #1c1c2acc;
        padding: 20px 30px;
        border-radius: 20px;
    `,
    InfoItem: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 0;
        border-bottom: 1px solid #333333;
        font-size: 14px;

        &:last-child {
            border-bottom: none;
        }

        > span:first-child {
            font-weight: 500;
        }
    `,
    Right: styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 30px;

        > img {
            width: 100%;
        }
    `,
    RightText: styled.div`
        font-size: 16px;
        font-weight: 500;
    `,
    ListIcon: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    `
}

export const Ecosystem = {
    Container: styled.div`
        margin-top: 120px;
        text-align: center;
    `,
    SmallTitle: styled.div`
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;

        width: 60%;
        margin: 20px auto 0;
    `,
    Description: styled.div`
        font-size: 16px;
        line-height: 29px;
        width: 80%;
        margin: 30px auto 0;
    `,
    SlideItem: styled.div`
        background: #1c1c2a;
        border-radius: 20px;
        padding: 20px;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        width: 100%;
        height: 100%;

        > img {
            width: 150px;
            height: 150px;
            object-fit: contain;
        }
    `
}

export const RoadMap = {
    Container: styled.div`
        margin-top: 120px;
        display: flex;
        gap: 20px;
        position: relative;
    `,
    Theme: styled.img`
        position: absolute;
        top: 90px;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    `,
    Left: styled.div`
        width: ${({ language }) => (language === 'vi' ? '350px' : '450px')};
        position: relative;
        z-index: 1;
    `,
    SmallTitle: styled.div`
        font-size: 24px;
        font-weight: 700;
    `,
    ListButton: styled.div`
        display: flex;
        gap: 20px;
        margin-top: 20px;

        > button {
            cursor: pointer;
        }
        > button:first-child {
            > svg {
                transform: rotate(180deg);
            }
        }
    `,
    Right: styled.div`
        width: ${({ language }) =>
            language === 'vi'
                ? 'calc(100% - 300px - 31px)'
                : 'calc(100% - 450px - 31px)'};
        position: relative;
        z-index: 1;
    `,
    SlideItem: styled.div`
        background: linear-gradient(to bottom, #242424, #131321);
        padding: 20px;
        border-radius: 20px;
        border: 1px solid #0094ff;
        height: 100%;

        > span {
            display: block;
            font-size: 36px;
            font-weight: 700;
        }

        > div {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 10px;

            > div {
                display: flex;
                gap: 8px;
                font-size: 14px;

                > div {
                    flex: 0 0 6px;
                    height: 6px;
                    background: white;
                    border-radius: 6px;
                    margin-top: 6px;
                }
            }
        }
    `
}

export const Partner = {
    Container: styled.div`
        margin-top: 150px;
        text-align: center;
    `,
    List: styled.div`
        margin-top: 50px;
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    `,
    Item: styled.div`
        width: 245px;
        height: 111px;
        border-radius: 20px;
        background: #1c1c2a;
        padding: 30px;

        > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    `,
    SlideItem: styled.div`
        border-radius: 20px;
        background: #1c1c2a;
        width: 100%;
        height: 100%;
        padding: 20px;

        > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    `
}

export const Contract = {
    Container: styled.div`
        margin-top: 150px;
        text-align: center;
    `,
    SmallTitle: styled.div`
        font-size: 24px;
        font-weight: 700;
        margin-top: 10px;
    `,
    Banner: styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;

        > img {
            width: 100%;
            margin-bottom: 40px;
            position: relative;
            z-index: 2;
        }
        > button {
            position: relative;
            z-index: 2;
        }
    `,
    Theme: styled.div`
        position: absolute;
        width: calc(100vw - 20px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;

        > img {
            width: 100%;
            object-fit: cover;
        }
    `
}

export const DarkContainer = styled.div`
    background: #131321;
    color: white;
    padding-bottom: 100px;

    @media (max-width: 992px) {
        ${GradientText} {
            font-size: 40px;
        }

        ${Banner.Container} {
            > div:first-child {
                flex-direction: column;
            }
        }
        ${Banner.Left} {
            margin-top: 0;
            margin-bottom: 0;
        }
        ${Banner.Title} {
            font-size: 64px;
            margin-top: 30px;
        }
        ${Banner.SmallTitle} {
            font-size: 30px;
        }
        ${Banner.Description} {
            font-size: 16px;
        }
        ${Banner.Right} {
            width: 100%;

            > img {
                position: static;
                left: none;
                bottom: none;
                margin-bottom: -50px;
            }
        }

        ${About.Container} {
            padding: 16px;
            border-radius: 20px;
        }
        ${About.Wraper} {
            padding: 16px;
            border-radius: 20px;
        }
        ${About.Top} {
            flex-direction: column;
            padding: 0 0 20px 0;
        }
        ${About.SmallTitle} {
            font-size: 16px;
        }
        ${About.TopLeft} {
            > p {
                font-size: 14px;
            }
        }
        ${About.TopRight} {
            text-align: center;
            img {
                width: 50%;
                min-width: 250px;
            }
        }
        ${About.Bottom} {
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
        }
        ${About.BottomBox} {
            padding: 20px;
            > p {
                font-size: 20px;
            }
        }

        ${AZGPay.Container} {
            flex-direction: column;
        }
        ${AZGPay.SmallTitle} {
            font-size: 12px;
        }
        ${AZGPay.Description} {
            font-size: 14px;
        }

        ${Benefit.Container} {
            margin-top: 50px;
            flex-direction: column;
        }
        ${Benefit.SmallTitle} {
            font-size: 14px;
        }
        ${Benefit.BoxText} {
            font-size: 14px;
        }

        ${Token.Container} {
            margin-top: 50px;
            flex-direction: column;
            gap: 30px;
        }
        ${Token.InfoContainer} {
            margin-top: 20px;
            padding: 16px;
        }
        ${Token.RightText} {
            font-size: 14px;
        }

        ${Ecosystem.Container} {
            margin-top: 80px;
        }
        ${Ecosystem.SmallTitle} {
            font-size: 16px;
            margin: 20px 0 0 0;
            width: 100%;
        }
        ${Ecosystem.Description} {
            font-size: 14px;
            margin: 20px 0;
            width: 100%;
        }
        ${Ecosystem.SlideItem} {
            font-size: 20px;
        }

        ${RoadMap.Container} {
            margin-top: 70px;
            flex-direction: column;
        }
        ${RoadMap.Theme} {
            display: none;
        }
        ${RoadMap.Left} {
            width: 100%;
        }
        ${RoadMap.Right} {
            width: 100%;
        }

        ${Contract.Container} {
            margin-top: 100px;
        }
        ${Contract.SmallTitle} {
            font-size: 16px;
        }
        ${Contract.Banner} {
            margin-top: 20px;
        }
        ${Contract.Theme} {
            display: none;
        }
    }
`
