// app/conversion/layout.tsx

import { Suspense } from 'react';
import ConversionPage from './page';

export default function ConversionLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConversionPage />
    </Suspense>
  );
}
