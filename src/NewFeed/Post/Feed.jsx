import React, { useEffect, useState } from "react";
import Post from "./Post";
import PublicIcon from "@mui/icons-material/Public";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { collection, onSnapshot } from "firebase/firestore";
import db from "../../Firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    
    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          profileSrc={post.data.profileSrc}
          caption={post.data.caption}
          time={post.data.time}
          name={post.data.name}
          image={post.data.image}
          Icon1={PublicIcon}
          Icon3={MoreHorizIcon}
          Icon2={CloseIcon}
          postId={post.id} // Pass postId instead of key
        />
      ))}
    </div>
  );
};

export default Feed;
