import MainLayout from '@/components/MainLayout'
import DarkHome from '@/screens/DarkHome'
import Head from 'next/head'

export default function Page() {
    return (
        <MainLayout language='en'>
            <Head>
                <title>
                    AZChain - Revolutionary and Sustainable Blockchain Ecosystem
                </title>
                <meta
                    name='description'
                    content='AZChain bridges blockchain technology with real-world assets, offering a secure, transparent, and efficient platform. With $AZC and AZGPay Wallet, we unlock new investment opportunities in real estate, agriculture, and decentralized e-commerce.'
                />
            </Head>
            <DarkHome />
        </MainLayout>
    )
}
