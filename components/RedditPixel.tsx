import Script from "next/script";
import { REDDIT_PIXEL_ID } from "@/lib/constants";

// Renders nothing until REDDIT_PIXEL_ID is set in lib/constants.ts.
export default function RedditPixel() {
  if (!REDDIT_PIXEL_ID) return null;

  return (
    <Script id="reddit-pixel" strategy="afterInteractive">
      {`!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','${REDDIT_PIXEL_ID}');rdt('track','PageVisit');`}
    </Script>
  );
}
