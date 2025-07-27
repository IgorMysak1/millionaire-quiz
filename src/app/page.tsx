import { Home } from './home/home';

// <Home /> component is specially isolated separately.
// Let's imagine that we want to implement different logic on the home page,
// so we simply delete the imported <Home/> components and use them on another router.

export default function HomePage() {
  return <Home />;
}
