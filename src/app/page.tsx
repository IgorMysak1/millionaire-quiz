import { Home } from './home/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who Wants to Be a Millionaire?',
  description:
    'Who Wants to Be a Millionaire? is a challenging quiz game where players answer progressively harder questions to win virtual prize money. Strategize carefully and aim for the million.',
};

// <Home /> component is specially isolated separately.
// Let's imagine that we want to implement different logic on the home page,
// so we simply delete the imported <Home/> components and use them on another router.

export default function HomePage() {
  return <Home />;
}
