import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
const Posts = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="container content p-3 columns is-flex-wrap-wrap mx-auto">
        {posts.map((p) => (
          <Link href={`posts/${p.id}`} key={p.id}>
            <div className="column is-5 my-body-content m-2">
              <h3 className=" has-background-info-dark p-2 has-text-primary-light">
                {p.title}
              </h3>
              {p.body}
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();

  return {
    props: {
      posts: result.slice(0, 10),
    },
  };
}
