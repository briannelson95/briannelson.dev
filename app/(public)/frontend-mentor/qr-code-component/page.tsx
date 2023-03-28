import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react'
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import styles from '../../../../styles/QRCode.module.css'

export const metadata = {
    title: 'Frontend Mentor | QR Code Component',
};

async function getData() {
    const res = await client.fetch(groq`
        *[_type == 'frontend' && title == 'QR Code Component'][0]{
            ..., 
            qrCode{
                ..., 
                image->{
                    alt,
                    image
                },
            }
        }
    `)

    return res
}

export default async function QrComponentPage() {
    const data = await getData()
    
    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={urlFor(data.qrCode.image.image).url()} alt="qr code" width={500} height={500}/>
                </div>
                <div className={styles.text}>
                    <h1>{data.qrCode.text.title}</h1>
                    <p>{data.qrCode.text.subtitle}</p>
                </div>
            </div>
        </main>
    )
}
