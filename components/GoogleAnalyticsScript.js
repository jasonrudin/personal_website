import Script from "next/script";

function GoogleAnalyticsScript() {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-W31F71R2TZ"></Script>
            <Script>
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W31F71R2TZ');
          `}
            </Script>
        </>
    );
}

export default GoogleAnalyticsScript;