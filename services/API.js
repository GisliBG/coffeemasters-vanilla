const API = {
  url: "/data/menu.json",
  fetchMenu: async () => {
    console.log("fetch");
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
