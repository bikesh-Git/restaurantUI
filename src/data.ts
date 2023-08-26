type Product = {
    id:number,
    title:string,
    desc?:string,
    img?:string,
    price:number,
    option?:{title:string, additionalPrice:number}[]
}

type Products = Product[]

export const featuredProducts:Products = [
    {
        id:1,
        title:"Tandoori",
        desc:"Spicy in taste",
        img:"/temporary/p1.png",
        price:400.22,
        option:[
            {title:"small", additionalPrice:19.9},
            {title:"medium", additionalPrice:29.9},
            {title:"large", additionalPrice:59.9}
        ],
    },
    {
        id:2,
        title:"Paneer",
        desc:"mediam sweet in taste",
        img:"/temporary/p2.png",
        price:300.22,
        option:[
            {title:"small", additionalPrice:19.9},
            {title:"medium", additionalPrice:29.9},
            {title:"large", additionalPrice:59.9}
        ],
    },
    {
        id:3,
        title:"Egg",
        desc:"Eggy in taste",
        img:"/temporary/p3.png",
        price:600.22,
        option:[
            {title:"small", additionalPrice:19.9},
            {title:"medium", additionalPrice:29.9},
            {title:"large", additionalPrice:59.9}
        ],
    },
    {
        id:4,
        title:"Tandoori",
        desc:"Xtra Spicy in taste",
        img:"/temporary/p4.png",
        price:200.22,
        option:[
            {title:"small", additionalPrice:19.9},
            {title:"medium", additionalPrice:29.9},
            {title:"large", additionalPrice:59.9}
        ],
    },
    {
        id:5,
        title:"Tandoori",
        desc:"Yummmmy ",
        img:"/temporary/p5.png",
        price:400.22,
        option:[
            {title:"small", additionalPrice:19.9},
            {title:"medium", additionalPrice:29.9},
            {title:"large", additionalPrice:59.9}
        ],
    },
]