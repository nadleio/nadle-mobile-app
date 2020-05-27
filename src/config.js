// export const SRV_GRAPHQL_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://srv.nadle.io/graphql"
//     : "http://srv.staging.nadle.io/graphql";

export const SRV_GRAPHQL_URL =
  process.env.NODE_ENV === "production"
    ? "http://localhost:4000/graphql"
    : "http://localhost:4000/graphql";
