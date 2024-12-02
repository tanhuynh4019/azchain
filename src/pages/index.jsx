import MainLayout from '@/components/MainLayout'
import DarkHome from '@/screens/DarkHome'
import Head from 'next/head'

export default function Page() {
    return (
        <MainLayout language='vi'>
            <Head>
                <title>
                    AZChain - Hệ Sinh Thái Blockchain Đột Phá và Bền Vững
                </title>
                <meta
                    name='description'
                    content='AZChain kết nối công nghệ blockchain với tài sản thực, mang đến nền tảng an toàn, minh bạch và hiệu quả. Với $AZC và Ví AZGPay, chúng tôi mở ra cơ hội đầu tư mới trong các lĩnh vực bất động sản, nông nghiệp, và thương mại điện tử phi tập trung.'
                />
            </Head>
            <DarkHome />
        </MainLayout>
    )
}
