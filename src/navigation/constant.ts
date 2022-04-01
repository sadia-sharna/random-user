
export const UiRoutes = {
  Root: "/",
  Users: "/Users",
};


export const BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

export const ApiRoutes = {
  user: {
    getAll: `${BASE_URL}?results=50`,
  },
};
