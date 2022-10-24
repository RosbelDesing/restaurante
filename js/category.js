let categoryContent = document.getElementById('category');
var category = new Array();

//Añadir las categorias de productos
category[0] = ['<ion-icon name="fast-food-outline"></ion-icon><span class="lang" key="key-1">Aperitivos</span>'];
category[1] = ['<i class="fa-solid fa-martini-glass-citrus"></i><span class="lang" key="key-2">Jugos</span>'];
category[2] = ['<ion-icon name="pizza-outline"></ion-icon><span class="lang" key="key-3">Pizza</span>'];
category[3] = ['<i class="fa-solid fa-cake-candles"></i><span class="lang" key="key-4">Cake</span>'];

localStorage.setItem('category', JSON.stringify(category));

if(categoryContent){
    for(i = 0; i<category.length; i++)
    {
        var selector = 'category-name name--selector-' + (i+1);
        let categoryName = document.createElement('p'); //Nombre de categoria
        categoryName.setAttribute('class',selector);
        var key = 'key-' + (i+1);
        categoryName.innerHTML = category[i][0];
        categoryContent.appendChild(categoryName);
    }
};



