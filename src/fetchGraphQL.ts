const ENDPOINT = "https://graphql-pokemon2.vercel.app/";
// const ENDPOINT = "https://api.github.com/graphql";

async function fetchGraphQL(
  text: string,
  variables?: Record<string, string | number>,
) {
  const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
