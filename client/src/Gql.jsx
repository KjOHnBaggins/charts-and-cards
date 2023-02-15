import { useQuery, gql } from "@apollo/client";

const TRACKS = gql`
  query Books {
    books {
      author
    }
  }
`;
const Gql = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div className="gql">
      {data.books.map((d) => (
        <h1>{d.author}</h1>
      ))}
    </div>
  );
};

export default Gql;
