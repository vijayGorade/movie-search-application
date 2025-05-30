const searchBtn=document.querySelector(".searchBtn");
const input=document.querySelector(".serachDiv input");

const mainDiv=document.querySelector(".wholeMovieDiv");


searchBtn.addEventListener("click",()=>{
   
    mainDiv.innerHTML="movie searching..."
     fetchData();

    
  
})


const fetchData=async ()=>{
      try
      {
  const data=await fetch(`https://www.omdbapi.com/?t=${input.value}&apikey=7da4ceff`);
        const realData=await data.json();

    mainDiv.innerHTML=``;
        console.log(realData);
        console.log(realData.Title)
        console.log(realData.Poster);


        let vl;
        if(realData.Ratings.length=='0')
        {
            v1="no rating"
        }
        else{
            v1=realData.Ratings[0].Value
;
        }
        console.log(realData.Genre);
        console.log(realData.Plot);
        console.log(realData.Actors);

    const htmlContent=`<div class="info1Div">
        <img src="${realData.Poster}" alt="">
        <div class="subInfoDiv">
            <h1>${realData.Title}</h1>
            <p class="rating">Rating</p>
            <p class="timing">${v1}</p>
            <div class="typesOfMovieDivBtn">
                <button class="type1">action</button>
                <button class="type2">thriler</button>
                <button class="type3">comady</button>

            </div>
        </div>
    </div>
    <div class="info2">
        <h1 class="plot">Ploat</h1>
        <p class="plotPara">${realData.Plot}</p>
    <h1 class="cast">Actors</h1>
    <p class="castInfo">${realData.Actors}</p>
        </div>`

mainDiv.innerHTML=htmlContent;
      }catch(error)
      {
mainDiv.innerHTML="no data found";
      }

    }


