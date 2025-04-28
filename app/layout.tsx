import '../styles/tailwind.css';
import '../styles/globals.scss';

import { fontGeist } from 'src/components/UI/font/font';
import ClientComponent from 'app/ClientComponent';

export default function RootLayout({ children }: any) {
  return (
    <html className={fontGeist.variable} suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <title>Saransh Naole | Software Developer</title>
        <meta property='og:site_name' content='Saransh Naole' />
        <meta property='og:type' content='website' />

        {/* <link rel='shortcut icon' href='/favicon.ico' /> */}

        <meta name='title' content='Saransh Naole' />
        <meta
          name='description'
          content=""
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://saranshnaole.tech/' />
        <meta property='og:title' content='Saransh Naole' />
        <meta
          property='og:description'
          content=""
        />
        <meta
          property='og:image'
          content='/og-image.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://saranshnaole.tech/' />
        <meta property='twitter:title' content='Saransh Naole' />
        <meta
          property='twitter:description'
          content=""
        />
        <meta
          property='twitter:image'
          content='/og-image.png'
        />

        <meta property='og:image:type' content='image/jpeg' />
        <meta name='robots' content='index, follow' />
        <meta
          name='googlebot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <meta
          name='bingbot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />

        <meta
          name='google-site-verification'
          content='rqkQvaV705ZKW_sDtCtBkos8BtnWhSEwXZXS6YlhSEI'
        />
      </head>
      <body>
        <ClientComponent>
          <main>{children}</main>
        </ClientComponent>
      </body>
    </html>
  );
}
