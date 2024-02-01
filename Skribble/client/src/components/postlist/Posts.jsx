import React from "react";
import "./posts.css";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [render, setRender] = useState([]);

  const { filter } = useContext(UserContext);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8000/allposts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    };

    const filterPosts = () => {
      let filteredPosts;
      if (filter === "all") {
        setRender(posts);
      } else {
        filteredPosts = posts.filter((post) => post.category === filter);
        setRender(filteredPosts);
      }
      // console.log(render);
    };
    fetchData();
    filterPosts();
  }, [filter]);
  return (
    <div className="posts_section">
      {render.length > 0
        ? render.map((item, i) => {
            return (
              <Link to={`/blogdata/${item._id}`} className="link" key={i}>
                <Card key={i} data={item} />
              </Link>
            );
          })
        : posts.map((item, i) => {
            return (
              <Link to={`/blogdata/${item._id}`} className="link" key={i}>
                <Card key={i} data={item} />
              </Link>
            );
          })}

      {/* {posts.map((item, i) => {
        return (
          <Link to={`/blogdata/${item._id}`} className="link" key={i}>
            <Card key={i} data={item} />
          </Link>
        );
      })} */}
    </div>
  );
};

export default Posts;
