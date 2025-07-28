import { redirect } from 'next/navigation';

// This page is not used right now but could be a good place to pick another game to play or another mode of current game
export default function GamesPage() {
  return redirect('/games/millionaire-quiz');
}
