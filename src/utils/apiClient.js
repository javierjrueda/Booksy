const API_URL = "https://librarify.latteandfront.es/api/";

const apiClient = {
  // get: async function(path) {
  //   ...
  // },
  post: async function (path, data) {
    const response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(response);
    return response;
  },
};

export default apiClient;
