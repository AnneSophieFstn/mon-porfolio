# Publish VueJs project on GitHub Pages

Create **"vue.config.js "** file and add : 
```
module.exports = {
	publicPath:  process.env.NODE_ENV === "production" ? "/NAME-PROJECT/" : "/",
	transpileDependencies: ["vuetify"],
	outputDir:  "docs"
};
``` 

Inside **"package.json"** add : 
``` 
- "homepage": "FULL-LINK-PROJECT"
- "predeploy": "npm run build",
- "deploy": "gh-pages -d docs"
```
If error with command "gh-pages" install package [here](https://www.npmjs.com/package/gh-pages).

Inside **"config/index.js"** files, in **"build"** section change value ```assetsPublicPath:``` to   ```"./"```

Now run 
```
- npm run deploy
- git add .
- git commit -m "first commit"
- git push
```
In your repository github, go to ```Settings``` --> ```Pages```
Choose ```gh-pages``` and ```root```
Save and visite your link.

Enjoy :)

**PS:** Idk if it's really work but if you have a blank page go to your **router file** and change ```/``` by ```/NAME-PROJECT```.
