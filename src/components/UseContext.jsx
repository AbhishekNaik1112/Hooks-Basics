import { useContext, useEffect } from "react";
import { ToggleTheme } from "/src/App";
import { useState } from "react";

function UseContext() {
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  const [likes, setLikes] = useState(0);
  const [isContentBtnClkd, setIsContentBtnClkd] = useState(false);
  const [ft, setft] = useState(false);

  const increaseLike = () => {
    setLikes(likes + 1);
  };

  const ContentBtnClkd = () => {
    setIsContentBtnClkd((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (ft !== false) {
      alert("Content Button is Clicked, Content Displayed");
    }
  }, [isContentBtnClkd]);

  useEffect(() => {
    setft(!ft);
  }, []);

  return (
    <div style={themeStyle}>
      <p style={{ display: isContentBtnClkd ? "block" : "none" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non
        debitis natus officia nobis. Id perspiciatis eos pariatur laboriosam in
        cum provident quaerat necessitatibus. Quaerat accusantium dolorem esse
        explicabo minus repellat molestiae aliquam, repudiandae corrupti natus
        dolor dolorum earum modi? Facere beatae deleniti molestiae! Repellat
        consectetur odio, voluptates delectus nisi officia deserunt architecto
        dolorum harum impedit, eligendi nam sunt nihil optio natus obcaecati
        dignissimos eveniet illum reprehenderit. Ex exercitationem esse
        voluptates dolores optio repudiandae magnam ullam dignissimos
        recusandae, reiciendis sed fuga aut ut sunt corporis eligendi? Modi
        architecto neque nostrum quas, vero dignissimos placeat impedit veniam
        doloribus asperiores itaque molestias.
      </p>
      <button
        onClick={ContentBtnClkd}
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Content
      </button>
      <p>{likes}</p>
      <button
        onClick={increaseLike}
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Likes
      </button>
    </div>
  );
}

export default UseContext;
