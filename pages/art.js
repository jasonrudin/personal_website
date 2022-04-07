import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React, { useState, useEffect } from 'react';
import { GalleryNavigation } from '../components/GalleryNavigation';
import { artArray } from '../components/artData';
import GalleryWrapper from '../components/GalleryWrapper';

export default function Art() {

    const artData = artArray;
    return (
        <div className="text-zinc-700 font-ss pt-20 max-w-3xl mx-auto flex flex-col justify-center p-6 md:pb-0">
            <Head>
                <title>Art</title>
                <meta name="description" content="Jason Rudin's corner of the internet." />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            <Script src="https://kit.fontawesome.com/4ff0ff850c.js" crossorigin="anonymous" />
            <GalleryWrapper galleryData={artData} title="Art" pageType = "art"/>
        </div>
    )
}

