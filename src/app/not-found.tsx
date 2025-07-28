import Link from 'next/link';
import { PageWrapper } from '@/components';

export default function NotFound() {
  return (
    <PageWrapper>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </PageWrapper>
  );
}
