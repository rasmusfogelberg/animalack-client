export const apiHelper = {
  post,
};

// TODO: Type these
function post(url: string, body: Object) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(url, options).then(processResponse);
}

function processResponse(response: Response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  })
}
