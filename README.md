# Ionic + Angular Frontend Design: Demo Trading Platform

## How to host the app on a browser

Run this `ionic serve` in the terminal.

The app should be running on the browser at [localhost:8100](http://localhost:8100)

## How to generate the Android APK

### First step - generate an Android file

Run this before doing anything:

`npm install @capacitor/core @capacitor/cli`

Then we need to enable the capacitor by running this in the terminal:

`ionic integrations enable capacitor`

> **BEWARE!** If for some reason it none of these work, and you're a macOS user,
> try putting _sudo_ in front of them.

Moving on, the next step is to run this `ionic build cordova android` in the terminal. <br>
Notice `android` in the line. We are putting it there because we want android. Makes sense.

Now the next thing is to run this line in the terminal: <br>
`ionic cordova platform add android`

The next step is to initialize our app by the following line in terminal: <br>

`npx cap init [appName] [appId]`

where the `[appName]` should be the actual name of the app, for eg. "tradingApp", <br>
and the `[appId]` is the domain identifier of your app `(ex: com.tradingApp.app)`.

#### Solving a potential error:

So for some reason, when you specify a new name for the app, for eg. 'Empuuran Trading App' <br>
and the domain identifier for eg. 'com.empuraanTradingApp.app', and when you open up <br>
Android Studio, you would usually expect it to have these names as well as the domain changed <br>
as you've specified it in ```npx cap init``` right? Well yes, but actually no. And to add on, <br>
these changes will not only be updated, but there will also be an error waiting for you in AS. <br>

__*So how do you fix this?*__ <br>

In VSCode, or whatever IDE you are using, it should have a file locator, and in there search for <br>
__strings.xml__.

Now in there you will, hopefully, see the wrong names of your app located in there, as well as the <br>
wrong domain name in there. This is where you, once again, change your app and domain name to whatever <br>
you want.

And for the error in Android Studio, it can be ignored, even though it is in the red color. <br>
You can still run an emulator just fine and the app too. So the best way to solve this error <br>
is by _ignoring it_.

The next thing to do is to run `ionic build` in the terminal. This generates <br>
a `www` file, so don't touch it.

> If you're a macOS user, put _sudo_ in front of it in case it doesn't work.

Going forward, the next thing to do is to write `npx cap add android` <br>
and this will generate the native android file ready to be used in Android Studio for eg.

And last but not least, we run `npx cap open android`. <br>
Now if you have Android Studio installed on your computer, it will open it up for you. <br>
If not, go and install Android studio and try this line again.

### 1.5th step - Enabling video displaying on Android devices

The ```iframe``` tag, that allows us to display videos on our app, doesn't work by default <br>
on Android devices. It instead displays a CleartextTraffic error, which is not ideal. <br>

To counter this, find the _AndroidManifest.xml_ file with the keybind SHIFT + CTRL/COMMAND + A <br>
and find the ```<application>``` opening tag. Inside of it write the following: <br>
```<application android:usesCleartextTraffic="true">```. That should fix the video displaying error. <br>

### Second step - Generating an APK in Android Studio for Android devices

In Android Studio, in the _Build_ tab, click on _Generate Signed Bundle / APK..._

It will open up a window making you choose between two radio points, <br>
and here you will select the _APK_ option. <br>

Then you will see a bunch of form inputs, so you need to go ahead and fill them all out.<br>

After filling them up, click on Next.

Now you have two more options before finishing it all up and that is to choose between <br>
_release_ or _debug_.

Select release, then tick both of the checkboxes before clicking on Finish.

It will then proceed to build the APK file for you.

The APK file should be generated in the same file the Android Studio is reading the scripts from.
To be more specific, the filepath should look something like this:

android -> app -> build -> release -> APP.apk
