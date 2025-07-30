# webmobileCA2



npm install -g @ionic/cli

ionic start accblocksapp tabs --type=angular
cd accblocksapp

npm install @capacitor/camera
npm install @capacitor/geolocation
npx cap sync

ionic build
npx cap copy android
npx cap open android

for tab 3
{{ feature.description }} for code optimization

to add splash and icon
npx @capacitor/assets generate --icon resources/icon.png --splash resources/splash.png

to conversion
https://www.appicon.co/#app-icon

Remove-Item -Recurse -Force resources\android\icon\*
Remove-Item -Recurse -Force android\app\src\main\res\mipmap-*

add img into ionic folder
cordova-res android --copy --force

