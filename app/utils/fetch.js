function checkStatus(response) {
  return response.json();
}

export default function(url, options) {
  fetch(url, options).then(checkStatus).then(data => data).catch(err => err);
}
