# React and Cordova Sample Application

This is a sample hybrid application that is created with React and Cordova added afterwards. Joining the two was based on this article (very good btw considering how the others I tried failed to deliver a working project):

https://fjolt.com/article/react-apache-cordova-ios-android

It kind of left me thinking, okay so now what? I have this React app that has Cordova in it, but IMO there were things missing. This project hopefully addresses some of those issues. Read the article then continue on here.

## Some Changes Made

### `package.json` build command

The one from the article looks to be Linux based so I edited it for Windows since that's what I'm building on

`"build": "react-scripts build && xcopy build\\* .\\cordova\\www /H/E/Y",`

xcopy with the flags for copying directories and subs, hidden and sys files, and overwrite everything

### `cordova.js` wasn't included in `index.html`

An important ingredient I would think since you want your Cordova application to work. If it's included in the generated project then it should be in here as well.

### The Cordova `index.js` DOM manipulation throws exceptions

Now that the project is React based, there is no more traditional DOM to manipulate (enter Virtual DOM). Those Javascript getElementById and querySelector calls will fail. I made some changes to `src/App.js` to mimic what Cordova was trying to do with its Device is Ready code.

### Will this work with the plugins I install?

Good question. I don't know as I haven't tried this project with any yet. However, I did read somewhere that you need to access the `window.cordova` object instead of `cordova`. Possibly that change would have to be made. In addition, how they'll work (or won't) if they attempt DOM changes. Kaboom!

## How To Get It Running

Assuming your environment is set up with Git, Node, React, Cordova, Java, Android SDK, Apple, etc, issue these commands

```
git clone https://github.com/tonybhimani/react-and-cordova-app.git
cd react-and-cordova-app
npm intall
```

I also suggest you edit the names, emails, websites, descriptions, etc in following files so it's tailored to you

```
/package.json
/package-lock.json
/cordova/package.json
/cordova/package-lock.json
/cordova/config.xml
```

You can view the React only part with `npm start`. If you check your browser console there will be an `undefined` entry and that is from the missing cordova object.

Build the static files with `npm run build` and they'll get copied from the build folder over to cordova's www.

I didn't look to see if the cordova platforms get automatically added from the `npm install` so you may want to do this first. Testing it with the Browser and Android platforms.
```
cd cordova
cordova platform add browser
cordova platform add android
```

Then try it out in the browser with `cordova run browser` and check the console log and this time the cordova object should be there.

Build and install it for Android with `cordova run android` (assuming you have USB Debugging, your device attached, etc or the Android Emulator set up).

## Final Thoughts

Light housekeeping was done with organizing files into some sub directories in `public`. The `src/App.js` has some code with `useRef()` and `useEffect()` to change the tag for the Device is Ready message. Make some React Components and experiment with the project in `src`. Something cool would be to add in Bootstrap to make a visually stunning application. Perhaps that could be an idea for a branch of this project.