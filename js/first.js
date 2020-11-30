let api =document.getElementById("ahmed");
let btnSearch= document.getElementById("btn-search");
let inputSearch =document.getElementById("search-input");
let ress =document.getElementById("ress");






let allpizza = [];

////////////////////////////////////////////////////// nav bar change color

$(window).on('scroll' , function(){
    if($(window).scrollTop()){
        $('.nav-1').addClass('black');
    }
    else
    {
        $('.nav-1').removeClass('black');
    }
});
/////////////////////////////////////////////////////////

async function getpizza(){
   let recipp= await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pizza`);
   let recippjson= await recipp.json();
   allpizza =recippjson.recipes;
//    console.log(allpizza);
   display();
}



getpizza();

function display(){

    let cartoona =' ';
    for(let i =0; i < allpizza.length;i++){
        cartoona +=  
        `
        
        <div class="col-lg-4 col-md-6 pb-3 mb-5 shadow" onclick="getPizaaId(${"'"+allpizza[i].recipe_id+"'"})">
                    <img src="${allpizza[i].image_url}" class="card-img-top" alt="..." style=" height:300px">
                    <div class="body pt-3 text-center mb-3 text-dark">
                        <h3>${allpizza[i].title}</h3>
                        <p>${allpizza[i].publisher}</p>
                        <a href="${allpizza[i].source_url}"> Read detials</a>
                    </div>
                </div>
        
        `
        api.innerHTML=cartoona;
    }


}




//   start pizaa id  //////////////////////////


async function getPizaaId(id){
    let x= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    let y = await x.json();
    let z = y.recipe;
    console.log(z);
    show(z);

}


function show (elementidd){
   let cartoonaa=`
     <div>
     <img src="${elementidd.image_url}" class="img-fluid">
     <h2> ${elementidd.title}</h2>
     <p> ${elementidd.publisher}</p>
     </div>
    <ul>
     `
     for(let i=0; i<elementidd.ingredients.length; i++){
         cartoonaa += ` <li>${elementidd.ingredients[i]}</li>`
     }
     
     
     `


    </ul>
 
 `
   ress.innerHTML=cartoonaa;

}


/////////////////////////////////////////////////


btnSearch.addEventListener("click", function(){

    getpizza(inputSearch.value)

})


inputSearch.addEventListener("keyup",function(){

    searchInAraay(inputSearch.value);

})

function searchInAraay (searchInput){

    let cartoona =' ';
    for(let i =0; i < allpizza.length;i++){
        if(allpizza[i].title.toLowerCase().includes(searchInput.toLowerCase())){
        cartoona +=  
        `
        
        <div class="col-lg-4 col-md-6 pb-3 mb-5 shadow" onclick="getPizaaId(${"'"+allpizza[i].recipe_id+"'"})">
                    <img src="${allpizza[i].image_url}" class="card-img-top" alt="..." style=" height:300px">
                    <div class="body pt-3 text-center mb-3 text-dark">
                        <h3>${allpizza[i].title}</h3>
                        <p>${allpizza[i].publisher}</p>
                        <a href="${allpizza[i].source_url}"> Read detials</a>
                    </div>
                </div>
        
        `
        }
        api.innerHTML=cartoona;
    }

}












