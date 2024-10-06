// app/conversion/page.tsx

"use client"; // This marks the component as a Client Component

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import { Suspense } from 'react';

// ConversionPage component
export default function ConversionPage() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('transactionId');

  useEffect(() => {
    if (typeof window !== 'undefined' && transactionId) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16449453430/HC6JCPyqo9oZEPb62qM9',
        transaction_id: transactionId,
      });
    }
  }, [transactionId]);

  return (
    <>
      <Head>
        <title>Thank You for Your Order</title>
        <meta name="description" content="Your order was successful." />
      </Head>
      <h1>Thank You for Your Order!</h1>
      {transactionId && <p>Your transaction ID is: {transactionId}</p>}
    </>
  );
}

// If you want to keep the Suspense fallback, you can wrap it in your app layout file
