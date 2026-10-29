// Entry point for the mobile app.
//
// The default Expo entry (node_modules/expo/AppEntry.js) imports '../../App'
// relative to the expo package itself. In this npm-workspaces monorepo expo
// is hoisted to the workspace root, so that resolves to <root>/App — which
// does not exist — and `expo export` / `expo start` fail before bundling.
// This file registers the app explicitly, which works regardless of where
// expo is installed.
import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);
