import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App { ...props } />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="es">
        <Head>
          <meta charSet="utf-8" />
          {/**
                <link rel="dns-prefetch" href={app.url} />
                <link rel="preconnect" href={app.url} />
                */}
          <title>Meli Frontend Test</title>
          <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />

          {/* <link rel="stylesheet" href="/static/css/normalize.css" /> */}
          {this.props.styleTags}

          <link rel="shortcut icon" href="https://http2.mlstatic.com/resources/frontend/commons-frontend/ui-dist/images/components/navigation/ML/favicon.ed1a7e19.ico" />
          <link rel="apple-touch-icon" href="https://http2.mlstatic.com/resources/frontend/commons-frontend/ui-dist/images/components/navigation/ML/60x60-precomposed.0e169836.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="https://http2.mlstatic.com/resources/frontend/commons-frontend/ui-dist/images/components/navigation/ML/76x76-precomposed.f30c8ccd.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="https://http2.mlstatic.com/resources/frontend/commons-frontend/ui-dist/images/components/navigation/ML/120x120-precomposed.23b6a445.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="https://http2.mlstatic.com/resources/frontend/commons-frontend/ui-dist/images/components/navigation/ML/152x152-precomposed.7ffb5147.png" />
          {/**
                <link rel="manifest" href="" />
                <meta name="msapplication-TileColor" content="#161616" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="format-detection" content="telephone=no" />
                <meta httpEquiv="x-rim-auto-match" content="none" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#050509" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="apple-mobile-web-app-title" content={app.title} />
                <meta name="msapplication-TileImage" content={app.title} />
                <meta name="description" content={app.description} />
                <meta name="keywords" content="" />
                <meta name="author" content="marianomolina.xyz" />

                <meta property="fb:app_id" content="" />
                <meta property="og:title" content={app.title} />
                <meta property="og:site_name" content={app.title} />
                <meta property="og:url" content={app.url} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={app.description} />
                <meta property="og:locale " content="es_LA" />
                <meta property="og:image" content="" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content={app.url} />
                <meta name="twitter:creator" content={app.url} />
                <meta name="msapplication-config" content="/static/images/icons/browserconfig.xml" />
                <meta name="theme-color" content="#050509" />
                */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
