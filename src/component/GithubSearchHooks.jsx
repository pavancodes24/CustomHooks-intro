import { useState } from "react";
import { useFetch } from "../Hooks/customHooks";

export default function () {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, data, error } = useFetch(
    `https://api.github.com/search/users?q=${query || "masai"}&&page=${page}`
  );
  console.log(loading, data, error, page);

  const handlePageChange = (value) => {
    if (page.value < 1 || data?.incomplete_results) {
      return false;
    }
    setPage(page + value);
  };
  return (
    <div>
      <h3>Github user search</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <button onClick={() => handlePageChange(-1)}>PREV</button>
      <button onClick={() => handlePageChange(1)}>NEXT </button>
      <br />
      {/* <button>SEARCH</button> */}
      <br />
      {loading && "LOADING"}
      {!loading &&
        data &&
        data.items.map((item) => <div key={item.id}>{item.login}</div>)}
      <br />
    </div>
  );
}
