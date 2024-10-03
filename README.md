# Fiction Prompter

Fiction Prompter is an Astro-based web application that generates creative writing prompts for fiction writers. It uses AI-powered generation to create unique and inspiring prompts based on various parameters.

## 🚀 Project Structure

The project structure is as follows:

```text
/
├── public/
│ └── favicon.svg
├── src/
│ ├── components/
│ │ ├── gemini.ts
│ │ ├── get-prompt.ts
│ │ ├── get-random-city.ts
│ │ ├── get-random-genre.ts
│ │ ├── get-random-job-based-on-city.ts
│ │ └── get-random-pov.ts
│ ├── data/
│ │ ├── genres.json
│ │ └── povs.json
│ ├── pages/
│ │ ├── api/
│ │ │ └── get-prompt.ts
│ │ └── index.astro
│ └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Key Features

- Generates creative writing prompts using AI (Gemini Pro)
- Randomly selects cities, jobs, genres, and points of view for diverse prompts
- Server-side rendering with Astro
- TypeScript support for improved development experience

## 🎨 How It Works

The Fiction Prompter generates unique writing prompts by:
1. Selecting a random city using a geographic API
2. Generating a job based on the selected city using AI
3. Choosing a random genre and subgenre from a predefined list
4. Selecting a random point of view (POV) with various narrative aspects
5. Combining all these elements to create a comprehensive writing prompt using AI

This process ensures a wide variety of creative and inspiring prompts for writers.

## 🛠️ Technologies Used

- [Astro](https://astro.build) - Web framework for content-driven websites
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [AI SDK](https://github.com/vercel/ai) - AI library for text generation
- [Google Generative AI](https://ai.google.dev/) - Gemini Pro model for AI-powered text generation

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your Gemini API key in the environment variables
4. Run the development server with `npm run dev`
5. Open your browser and navigate to `http://localhost:4321`

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) for more information on how to customize and extend this project.