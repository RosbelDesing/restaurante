function createAllergens()
{
    // let createAllergensContent = document.createElement('div');
    // createAllergensContent.setAttribute('class','allergens-content');
    let createAllergensContent = document.querySelector('.allergens-content');
    var arrayAllergens = new Array();

    arrayAllergens[0] = ['alergenos/camaron.png','Camarón'];
    arrayAllergens[1] = ['alergenos/cangrejo.png','Cangrejo'];
    arrayAllergens[2] = ['alergenos/chorizo.png','Chorizo'];
    arrayAllergens[3] = ['alergenos/hongo.png','Hongo'];
    arrayAllergens[4] = ['alergenos/huevo.png','Huevo'];
    arrayAllergens[5] = ['alergenos/leche.png','Lácteos'];
    arrayAllergens[6] = ['alergenos/mani.png','Maní'];
    arrayAllergens[7] = ['alergenos/molusco.png','Molusco'];
    arrayAllergens[8] = ['alergenos/mostaza.png','Mostaza'];
    arrayAllergens[9] = ['alergenos/nuez.png','Nuez'];
    arrayAllergens[10] = ['alergenos/pez.png','Pez'];
    arrayAllergens[11] = ['alergenos/pimienta.png','Pimienta'];
    arrayAllergens[12] = ['alergenos/pulpo.png','Pulpo'];
    arrayAllergens[13] = ['alergenos/sal.png','Sal'];
    arrayAllergens[14] = ['alergenos/sesamo.png','Sésamo'];
    arrayAllergens[15] = ['alergenos/SO.png','SO2'];
    arrayAllergens[16] = ['alergenos/soya.png','Soya'];
    arrayAllergens[17] = ['alergenos/trigo.png','Trigo'];


    if(createAllergensContent){
        for(i = 0; i<arrayAllergens.length; i++){
            let allergensCard = document.createElement('div');
            let allergensImg = document.createElement('img');
            let allergensDesc = document.createElement('p');

            var key = 'allergens--' + (i + 1);

            allergensCard.setAttribute('class','allergens-card');
            allergensImg.setAttribute('class','allergens-img');
            allergensImg.setAttribute('src',arrayAllergens[i][0]);
            allergensDesc.setAttribute('class','allergens-desc lang');
            allergensDesc.setAttribute('key', key);

            allergensDesc.innerHTML = arrayAllergens[i][1];

            createAllergensContent.appendChild(allergensCard);
            allergensCard.appendChild(allergensImg);
            allergensCard.appendChild(allergensDesc);

        
        }
    }

       
}

function addMarkerCategory(){
    $(document).ready(function(){
        $('.category-name').on('click',function(){
            $(this).siblings().removeClass('cat-active');
            $(this).addClass('cat-active');
        })
    })
}

function setCategoryDefault(){
    $(document).ready(function(){
        $('.name--selector-1').addClass('cat-active');
    })
};

function setDefaultVisible(){
    //Aumentra numero de contadores para añadir mas categorias
    const productContent_1 = document.querySelector('.category-content-1');
    const productContent_2 = document.querySelector('.category-content-2');
    const productContent_3 = document.querySelector('.category-content-3');
    const productContent_4 = document.querySelector('.category-content-4');

    productContent_1.style.display = "flex";
    productContent_2.style.display = "none";
    productContent_3.style.display = "none";
    productContent_4.style.display = "none";

}


function setVisible(){
    $(document).ready(function(){
        $('.name--selector-1').on('click',function(){
            $('.category-content-1').show();
            $('.category-content-2').hide();
            $('.category-content-3').hide();
            $('.category-content-4').hide();
        })
    })

    $(document).ready(function(){
        $('.name--selector-2').on('click',function(){
            $('.category-content-1').hide();
            $('.category-content-2').show();
            $('.category-content-3').hide();
            $('.category-content-4').hide();
        })
    })

    $(document).ready(function(){
        $('.name--selector-3').on('click',function(){
            $('.category-content-1').hide();
            $('.category-content-2').hide();
            $('.category-content-3').show();
            $('.category-content-4').hide();
        })
    })

    $(document).ready(function(){
        $('.name--selector-4').on('click',function(){
            $('.category-content-1').hide();
            $('.category-content-2').hide();
            $('.category-content-3').hide();
            $('.category-content-4').show();
        })
    })
}


//Cambio de idioma
$.getJSON('js/lang.json', function(json){
    $('.flag').click(function(){
        let lang = $(this).attr('id');
        $('.lang').each(function(index,value){
            $(this).text(json[lang][$(this).attr('key')]);
        });
    });
});


setCategoryDefault();
createAllergens();
addMarkerCategory();
setDefaultVisible();
setVisible();

