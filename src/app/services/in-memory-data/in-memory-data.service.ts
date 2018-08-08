import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {

        const pages = [
            {
                id: "about",
                caption: "About",
                description: "",
                text: "Lorem ipsum dolor sit amet, enim ludus voluptatum eu pri. Per quot oratio ex, ex decore ornatus sit, vide wisi invidunt id vix. Ex ius quodsi definitiones, no nostro molestiae appellantur sed. Eu possit iudicabit referrentur vim, in graeco diceret assentior eum. Ius audire molestie fabellas ut. Iudico lobortis sed ut, inani regione eleifend mel et. Vix an habemus oportere pericula, usu reque perpetua forensibus an, veri natum usu cu. Suas consul omnium at cum, an eos habeo liber. Dolores mediocrem molestiae ex sit, viderer malorum forensibus et his. Has in cibo propriae, vidisse integre nam ut, cu vel minim invenire intellegebat. Ex duo melius dolores mnesarchum, mea possim numquam facilisis ei, at pri erant ridens delenit. Quo an omnes dolorem imperdiet, duo magna noluisse adversarium eu. Tation prompta evertitur duo ei, id dolor elaboraret his, sed ea iuvaret partiendo suscipiantur. Ut per tale assum dignissim, ut quo nibh numquam consetetur. Justo ridens eam an. Nam ad porro cetero sadipscing. Vix consul tractatos theophrastus et, eum ea fabellas consulatu. Eius idque senserit sit te. Adhuc appareat at ius, sed possim nusquam fabellas ea. Aliquam urbanitas per an, cu nibh posse putent nam, lorem inermis dolorem id pri. Dicat primis dictas.",
                images: [
                    {
                        "caption": "Image",
                        "src": "assets/img/pages/about/image_1.jpg"
                    }
                ]
            }
        ];  

        const cart = [
            {
                id: 'add',      
                totalQty: 2    
            }
        ];

        const shoppingcart = [            
            {
                product: {
                    id: 1,
                    name: "Product name here",
                    category: "Top",
                    price: "100",
                    rating: "5",
                    discount: "10",
                    img: "assets/img/shop/shop_item.jpg"
                },
                id: 1,
                qty: 1,
                total: 100
            },
            {
                product: {
                    id: 2,
                    name: "Product name here",
                    category: "Top",
                    price: "100",
                    rating: "5",
                    discount: "10",
                    img: "assets/img/shop/shop_item.jpg"
                },
                id: 2,
                qty: 1,
                total: 100
            }             
        ];

        const signup = [
                
        ];

        const user = [
            {
                id: 'signup',      
                users: [
                    {
                        email: 'test@test.com',
                        password: 'test'
                    },
                    {
                        email: 'test2@test.com',
                        password: 'test'
                    }
                ]
            },
            {
                id: 'signin',      
                signin: true
            }
        ];

        const banners = [
            { 
                url: "#",
                img: "assets/img/banners/banner_big.jpg"
            },
            { 
                url: "#",
                img: "assets/img/banners/banner_middle.jpg"
            },
            { 
                url: "#",
                img: "assets/img/banners/banner_small_1.jpg"
            },
            { 
                url: "#",
                img: "assets/img/banners/banner_small_2.jpg"
            }
        ];

        const goods = [
            { 
                id: 1,
                name: "Product name 1",
                category: "Top",
                price: "100",
                rating: "5",
                discount: "10",
                img: "assets/img/shop/shop_item.jpg"
            },
            { 
                id: 2,
                name: "Product name 2",
                category: "Top",
                price: "100",
                rating: "5",
                discount: "10",
                img: "assets/img/shop/shop_item.jpg"
            },
            { 
                id: 3,
                name: "Product name 3",
                category: "Top",
                price: "100",
                rating: "5",
                discount: "10",
                img: "assets/img/shop/shop_item.jpg"
            },
            { 
                id: 4,
                name: "Product name 4",
                category: "Top",
                price: "100",
                rating: "5",
                discount: "10",
                img: "assets/img/shop/shop_item.jpg"
            }
        ];

        const subscribers = [
            {
                id: 1,
                email:'test@test.com'
            }
        ];

        return { banners, goods, cart, user, signup, shoppingcart, pages, subscribers };
    }
}