import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchProjects = async () => {
  try {
    const projectsCollection = collection(db, 'projects');
    const projectsSnapshot = await getDocs(projectsCollection);
    const projects = projectsSnapshot.docs.map(doc => doc.data());
    return projects;
  } catch (error) {
    console.error("Error fetching projects: ", error);
    return [];
  }
};

export default fetchProjects