## Getting Started

**Please read the whole file before estimation:**

How to run the project:

```bash
pnpm i
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

// I have left different comments in the project.
**Important to say**: I was doing that because it's a test task, so I want to show you my mindset more. I am not doing this so many in commercial development)

## The file structure

- App directory creates pages and collects features from other folders
- Next to the App directory, there are global parts of the project, such as components, utilities, types, and others in the future. They define the atomic parts of the project from which features are built in App

## The implementation

- From the main page (`/`), the user goes to the game page (`/games/millionaire-quiz/start`) with dynamic parameters. The dynamic parameter should be substituted from the BE, and when the page renders, a request should be sent to the BE to get information about the question, the cash prize, and the correct answer.
- When the user gives correct answers, there should be a BE request to verify this answer, this is important for security.
- When the user gives correct answers, there should be a request for BE to verify this answer, this is important for security. If the answer is correct, BE returns the id of the new question and the user is redirected back to the game page: `/games/millionaire-quiz/{questionId}` . If an error occurs, it redirects to `/games/millionaire-quiz/game-over/${questionId}`. The user sees the amount of money won and can return to the new game.

Important: I carefully considered and chose this approach because:

- If the answer was checked on FE, there would be a risk of looking at the correct answer in dev tools
- We get a small piece of information, instead of a large array, which can lead to a large response and page load
- FE has only one logical execution logic, and BE is the true source of truth

With this implementation it is possible to

- support dynamic change of questions depending on the speed of the previous selection or other factors
- Implement a pause of the game and continue on another device, subject to authentication
- help from another player, and other functionality

## The routes

Each `page.tsx` file renders one isolated component, so if you need to change the routing, it will be easy to implement.
The game has a deeper nesting: `/games/millionaire-quiz/start`
This is necessary to easily support other games in the future, as well as to create intermediary pages where the user can choose which game to play or see their progress/success, etc.

## Last words before the code review:

The implementation took more time than expected previously because I was focused on research and best practices for Next.Js, so some small details may not be complete, I want to draw attention to the global and important parts of this project:

- git history
- pre commit hook implementation
- Deep research for the best implementation (description above)

Also, this was not in the requirements, but I planned to add this for better User Experience:

- a `beforeunload` event to stop the user from accidentally closing the page
- Loaders to better display the state of BE requests
- Tooltip for text that may be too long
- Pretty 404 page.
- Header for easy navigation on the site
- Improve SEO by meta data

Also, this program will work completely correctly when BE is implemented, as BE identifies issues and monitors progress
