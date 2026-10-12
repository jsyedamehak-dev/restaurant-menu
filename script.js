const menu = [
    {
    name:"Margherita Pizza",
    category:"Pizza",
    price:"$12",
    image:"https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
    },
    {
    name:"Pepperoni Pizza",
    category:"Pizza",
    price:"$15",
    image:"https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
    name:"Cheese Burger",
    category:"Burger",
    price:"$10",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
    name:"Chicken Burger",
    category:"Burger",
    price:"$11",
    image:"https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
    name:"Cold Coffee",
    category:"Drinks",
    price:"$5",
    image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
    name:"Orange Juice",
    category:"Drinks",
    price:"$4",
    image:"https://images.unsplash.com/photo-1623065422902-30a2d299bbe4"
    },
    {
    name:"Chocolate Cake",
    category:"Dessert",
    price:"$7",
    image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
    {
    name:"Ice Cream",
    category:"Dessert",
    price:"$6",
    image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb"
    }
    ];
    
    const menuContainer = document.getElementById("menuContainer");
    
    function displayMenu(items){
    
    menuContainer.innerHTML="";
    
    items.forEach(item=>{
    
    const card=document.createElement("div");
    
    card.classList.add("card");
    
    card.innerHTML=`
    <img src="${item.image}" alt="${item.name}">
    <div class="card-content">
    <h3>${item.name}</h3>
    <p class="price">${item.price}</p>
    <span class="category">${item.category}</span>
    </div>
    `;
    
    menuContainer.appendChild(card);
    
    });
    
    }
    
    displayMenu(menu);
    
    const buttons=document.querySelectorAll(".filter-btn");
    
    buttons.forEach(button=>{
    
    button.addEventListener("click",()=>{
    
    const category=button.dataset.category;
    
    if(category==="All"){
    displayMenu(menu);
    }
    else{
    
    const filtered=menu.filter(item=>item.category===category);
    
    displayMenu(filtered);
    
    }
    
    });
    
    });