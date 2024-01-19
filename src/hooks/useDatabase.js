import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";

import { useAuthContext } from "../context/AuthContext";

const useDatabase = () => {
  const { user } = useAuthContext();
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  useEffect(() => {
    if (!user) return;

    const db = getDatabase();
    const userRef = ref(db, `users/${user.uid}/bookmarks`);

    const unsubscribe = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      setBookmarkedIds(userData ? Object.keys(userData) : []);
    });

    return () => unsubscribe();
  }, [user]);

  const toggleBookmark = async (itemId) => {
    if (!user) return;

    const db = getDatabase();
    const userRef = ref(db, `users/${user.uid}/bookmarks/${itemId}`);

    if (bookmarkedIds.includes(itemId)) {
      await remove(userRef);
    } else {
      await set(userRef, true);
    }
  };

  return {
    bookmarkedIds,
    toggleBookmark,
  };
};

export default useDatabase;
