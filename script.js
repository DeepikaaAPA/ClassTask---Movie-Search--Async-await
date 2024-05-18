const query = document.getElementById("query");
const search = document.querySelector("button");

search.addEventListener("click", getData);
getData();
async function getData() {
  let url = "https://api.tvmaze.com/search/shows?q=" + query.value;
  console.log(url);
  try {
    let data = await (await fetch(url)).json();
    console.log(data[0]);
    let genres = data[0].show.genres.join();
    console.log(genres);
    let n = data[0].show.name;
    console.log(n);
    let day = data[0].show.schedule.days.join();
    let summary = data[0].show.summary;
    console.log(summary);
    let country = data[0].show.country;

    let premiere = data[0].show.premiered;
    let rating = data[0].show.rating.average;

    let image = data[0].show.image.medium;
    console.log(image);
    let lang = data[0].show.language;
    console.log("language", lang);
    let result = document.getElementById("res");
    console.log("result  " + result);

    result.innerHTML = `<div class="row">
                    <div  class="col-4 mx-1 border"> 
                    <img src="${data[0].show.image.medium}" alt=""></div>
                    <div class="col-7 text-start "> 
                     <h4>${n}</h4>
                     <p>Country : ${country}</p>
                    <p>Genres :${genres}</p>  
                    <p>Language : ${lang}</p>    
                    <p>Premiered  on : ${premiere}</p>     
                    <p>Rating :${rating}  </p>
                    Summary:${summary}
                     </div>
        </div>`;
  } catch (e) {
    console.log(e);
  }
}
/*

            
            
            
         

*/
