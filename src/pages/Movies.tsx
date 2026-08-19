import NewPost from "./NewPost";

function Movies({ theme }:    {theme: "light" | "dark";}) {
  return <NewPost theme={theme} />;
}

export default Movies;
