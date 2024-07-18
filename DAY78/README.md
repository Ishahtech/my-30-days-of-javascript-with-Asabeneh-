Install Firebase using npm:


npm install firebase
Initialize Firebase in your app and create a Firebase App object:


import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
A Firebase App is a container-like object that stores common configuration and shares authentication across Firebase services. After you initialize a Firebase App object in your code, you can add and start using Firebase services.

If your app includes dynamic features based on server-side rendering (SSR), you'll need to take some additional steps to ensure that your configuration persists across server rendering and client rendering passes. In your server logic, implement the FirebaseServerApp interface to optimize your app's session management with service workers.

Do you use ESM and want to use browser modules? Replace all your import lines to use the following pattern:
import { } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-SERVICE.js'
(where SERVICE is an SDK name such as firebase-firestore).
Using browser modules is a quick way to get started, but we recommend using a module bundler for production.

Step 3: Access Firebase in your app
Firebase services (like Cloud Firestore, Authentication, Realtime Database, Remote Config, and more) are available to import within individual sub-packages.

The example below shows how you could use the Cloud Firestore Lite SDK to retrieve a list of data.


import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};