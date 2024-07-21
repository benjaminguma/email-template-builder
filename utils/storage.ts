import { FirebaseClientApp } from "firebase.config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage(FirebaseClientApp);

export async function getURL(path = "") {
	if (!path) {
		return "";
	}
	const fileRef = ref(storage, path);
	const URL = await getDownloadURL(fileRef);
	return URL;
}
