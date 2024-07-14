import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: 'AIzaSyAXCcUO1VoFlmYcAaprk-hLFMroLYi0Rzk',
  authDomain: 'wedding-mobile-invitation.firebaseapp.com',
  projectId: 'wedding-mobile-invitation',
  storageBucket: 'wedding-mobile-invitation.appspot.com',
  messagingSenderId: '108781006635',
  appId: '1:108781006635:web:cb8b39d28740a346261f6e',
  measurementId: 'G-KJDK7BEHFV',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
