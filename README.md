[Techdegree Project 7 - WebApp Dashboard](https://gracemarsh.github.io/webapp-dashboard/)

# webapp-dashboard

Starting with a mockup and a few icons I’ve built a web dashboard complete with JavaScript-driven charts and graphs.

## Building

Use Vite to build the project and generate the assets inside the `dist` directory. These are the files that can be put onto a web server such to actually serve the optimised build of your app.

```BASH
npm run build
```

## Deploying to Github pages

[Vite docs on deploying to github pages](https://vitejs.dev/guide/static-deploy.html#github-pages)

Run the `deploy.sh` script to deploy from your environment.

```BASH
./deploy.sh
```

Requirements:

- SSH key on your device authorised with Github.
  [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- Ensure the `./deploy.sh` file has executable permissions

```BASH
chmod +x ./deploy.sh
```

- Configure github pages to serve from the `gh-pages` branch
