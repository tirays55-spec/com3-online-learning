import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgUjD5-MDDQJQlh-tscmICfGiu-RmG-Rc",
  authDomain: "com3-669cd.firebaseapp.com",
  projectId: "com3-669cd",
  storageBucket: "com3-669cd.firebasestorage.app",
  messagingSenderId: "172629080101",
  appId: "1:172629080101:web:226879f465cb37146ce7cc",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export function usernameToEmail(username: string) {
  const value = username.trim().toLowerCase();
  return value.includes("@") ? value : `${value.replace(/[^a-z0-9._-]/g, "")}@com3.local`;
}
