// app/conversion/page.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ConversionPage() {
  const router = useRouter();
  
  // Extract transactionId from the URL query parameters
  const { transactionId } = router.query; // The transaction ID should be passed as a query parameter

  useEffect(() => {
    // Check if window is defined and transactionId is available
    if (typeof window !== 'undefined' && transactionId) {
      // Fire Google Ads conversion event
      window.gtag('event', 'conversion', {
        send_to: 'AW-16449453430/HC6JCPyqo9oZEPb62qM9',
        transaction_id: transactionId, // Use the transactionId from the query
      });
    }
  }, [transactionId]); // Dependency array includes transactionId to re-run effect if it changes

  return (
    <html lang="en">
      <Head>
        <title>Thank You for Your Order</title>
        <meta name="description" content="Your order was successful." />
        {/* Ensure the Google Tag is loaded; if using <GoogleAnalytics> globally, it should be handled elsewhere */}
      </Head>
      <body>
        <h1>Thank You for Your Order!</h1>
        {/* Optionally, you can display the transaction ID or any other relevant information */}
        {transactionId && <p>Your transaction ID is: {transactionId}</p>}
      </body>
    </html>
  );
}
