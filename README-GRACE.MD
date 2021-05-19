# README GRACE

## Good morning my love

## This is an app that was created by running a command in the terminal. It is a folder that was created when you run this command.

```BASH
npm init @vitejs/app
```

These instructions come from the [Vite website](https://vitejs.dev/guide/)

- Enter your project name (remember-good-conventions)
- Select _Vanilla JS_ as the type of app
- Select _JS_ as you haven't learnt _TypeScript_ yet.
- Open the generated folder in terminal and run `npm install` to install the dependencies.
- That's it! You're done setting up Vite! Now you can have your browser open on your laptop, and your editor on your main window without having to swap between them.

## Running the development server

Open up the `package.json` then look at the entries under `scripts`.

```JSON
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
```

The `keys` are commands you can provide to `npm`, the values are the command `npm` will run "under the hood".

<!-- DO THIS AFTER IT'S SET UP TO GET THE WEBPAGE LINK -->

```BASH
npm run dev
```

Starting the dev server will tell you the URL which is usually https://localhost:3000

```BASH
npm run build
```

```BASH
npm run serve
```

Reading the docs and watching the first 7 minutes of this video should provide more context. [Vite 2.0 Crash Course | Super Fast Build Tool for JavaScript, React, Vue, Svelte, & Lit (2021)](https://www.youtube.com/watch?v=LQQ3CR2JTX8)

## Building the app

Building creates an optimised, fast version of the app from your source files. These will be generated into the `dist` for distribution folder in your app. You can see this folder is already ignored in your `.gitignore` file as it's not best practice to commit builds to git, just the source code.

## Deploying the built app

https://vitejs.dev/guide/static-deploy.html

There are number of optons such as [Github Pages](https://vitejs.dev/guide/static-deploy.html#github-pages) or [Netlify][https://vitejs.dev/guide/static-deploy.html#netlify], but the easiest one with a GUI website is [Vercel](https://vitejs.dev/guide/static-deploy.html#vercel). Follow the instructions on their site by logging in/signing up with Github login.

## Love you

Got to go - have fun. Message me if you need help.

Tristan
