const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://stax-react.envytheme.com"
    : "http://localhost:3000";

export default baseUrl;