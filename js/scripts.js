const images = [
    newImage('http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg', 'Svezia', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg', 'Perù', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c', 'Chile', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg', 'Argentina', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop', 'Colombia', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
];
 
for(let i = 0; i < images.length; i++){

    let card = document.createElement('div');
    
    card.classList.add('card','Cardhidden')
    
    if(i == 0){
        card.classList.add('Cardactive');
        card.classList.remove('Cardhidden');
    
    }
    
    card.innerHTML = `
        ${images[i]['url']}
            
        <div class="text">
            <h3>${images[i]['title']}</h3>
            <p>${images[i]['description']}</p>
        </div>
        `;
    
    document.getElementById('container-card').append(card);
     
    };
    
    let cardList = document.querySelectorAll('.card');
    
    
    let contatore = 0;
    
    document.getElementById('farward').addEventListener('click', function(){
        
        document.querySelector('.card.Cardactive').classList.add('Cardhidden');
        document.querySelector('.card.Cardactive').classList.remove('Cardactive');
    
        if(contatore < images.length - 1){
    
            contatore ++;
    
        }else{
            contatore = 0;
        }
    
        cardList[contatore].classList.remove('Cardhidden');
        cardList[contatore].classList.add('Cardactive'); 
    })
    
    
    document.getElementById('back').addEventListener('click', function(){
        
        document.querySelector('.card.Cardactive').classList.add('Cardhidden');
        document.querySelector('.card.Cardactive').classList.remove('Cardactive');
    
        if((contatore !== images.length) && (contatore !== 0)){
    
            contatore -= 1 ;
    
        }else{
            contatore += images.length - 1 ;
        }
    
        cardList[contatore].classList.remove('Cardhidden');
        cardList[contatore].classList.add('Cardactive'); 
    })
    
    
    //------ FUNCTIONS ---------------------------------------------
    
    function newImage(urlI, title, description){
    
        imagesElement = {
            url: 
            `
            <img src="${urlI}" class="img-fix">
            `,
    
            title,
    
            description
        };
    
        return imagesElement;
    
    }
    
    