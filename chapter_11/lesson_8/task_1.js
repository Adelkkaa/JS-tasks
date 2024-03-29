// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    const json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJson("no-such-user.json") // (3)
  .catch(console.log); // Error: 404
