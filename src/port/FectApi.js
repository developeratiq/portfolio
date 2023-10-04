  
  

      //  all the matches

 export function getMatches() {

    return fetch("https://api.cricapi.com/v1/matches?apikey=f8b6b587-779a-4293-9f48-d8507f1c09c7&offset=0");
        .then((response) => response.json())
        .catch((error) => console.log("errro is ", error));


}