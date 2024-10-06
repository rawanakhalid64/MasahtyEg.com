// app/success/page.tsx (or wherever you handle the purchase confirmation)

import Link from 'next/link';

export default function SuccessPage() {
  const transactionId = '123ABC456DEF'; // This should come from your purchase logic

  return (
    <div>
      <h1>Order Placed Successfully</h1>
      {/* Redirecting to the conversion page with the transaction ID */}
      <Link href={`/conversion?transactionId=${transactionId}`}>
        Go to Thank You Page
      </Link>
    </div>
  );
}
