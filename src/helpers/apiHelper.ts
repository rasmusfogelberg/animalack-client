interface IApiHelper {
  get(url: string): Promise<any>;
  post(url: string, body: Object): Promise<any>;
  put(url: string, body: Object): Promise<any>;
  delete(url: string): Promise<any>;
};

export const apiHelper: IApiHelper = {
  get,
  post,
  put,
  delete: _delete,
};

function get(url: string) {
  const options = {
    method: 'GET'
  }
  
  return fetch(url, options).then(processResponse);
}

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

function put(url: string, body: Object) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(url, options).then(processResponse);
}

function _delete(url: string) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
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
