const express = require("express")
const cors = require("cors")

const api = express()

api.use(cors())
api.get("/meals", (req, res, next) => {
    res.json([
        {
            "calories": "516 kcal",
            "carbos": "47 g",
            "description": "There\u2019s nothing like the simple things in life - the smell of freshly cut grass, sitting outside on a nice sunny day, spending time with friends and family. Well here is a recipe that delivers simple culinary pleasures - some nice fresh fish with a crispy crust, crunchy potato wedges and some delightfully sweet sugar snap peas flavoured with cooling mint. Slip into something comfortable and relax into a delicious dinner!",
            "difficulty": 0,
            "fats": "8 g",
            "favorites": 1,
            "headline": "with Sweet Potato Wedges and Minted Snap Peas",
            "id": "533143aaff604d567f8b4571",
            "image": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/533143aaff604d567f8b4571.jpg",
            "ingredients": [
                "375g Sweet Potatoes",
                "1 Tsp Paprika",
                "2 Tbsps Parmesan Cheese",
                "1 Lemon",
                "A Few Sprigs Thyme",
                "25g Panko Breadcrumbs",
                "1 Tbsp Butter",
                "2 Cod Fillets",
                "150g Sugar Snap Peas",
                "A Few Sprigs Mint",
                "75ml Sour Cream"
            ],
            "name": "Crispy Fish Goujons ",
            "proteins": "43 g",
            "rating": 5,
            "thumb": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/533143aaff604d567f8b4571.jpg",
            "time": "PT35M"
        },
        {
            "calories": "397 kcal",
            "carbos": "26 g",
            "description": "Close your eyes, open up your Ras El Hanout and inhale deeply. You are no longer standing in your kitchen. Around you are the sounds of a bustling market. Robed men sell ornate carpets and a camel nibbles affectionately at your ear.  OK, we\u2019re pretty sure Paul McKenna\u2019s job is safe for now, but get cooking this recipe and take dinnertime on a magic carpet ride to Casablanca! Our tip for this recipe is to take your meat out of the fridge at least 30 minutes before dinner which will allow you to cook it more evenly.",
            "difficulty": 0,
            "fats": "5 g",
            "favorites": 13,
            "headline": "with Spinach and Lemon Couscous",
            "id": "53314247ff604d44808b4569",
            "image": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/53314247ff604d44808b4569.jpg",
            "ingredients": [
                "1 Lemon",
                "1 Fillet Skirt Steak",
                "1 Tsp Ras El Hanout",
                "1 Clove Garlic",
                "1 Spring Onion",
                "1/2 Cup Carrot",
                "1 Red Pepper",
                "150g Couscous",
                "A Handful Baby Spinach Leaves",
                "4 Tbsps Coriander"
            ],
            "name": "Moroccan Skirt Steak ",
            "proteins": "31 g",
            "rating": 4.3,
            "thumb": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/53314247ff604d44808b4569.jpg",
            "time": "PT30M"
        },
        {
            "calories": "458 kcal",
            "carbos": "29 g",
            "description": "World-renowned people generally all have one thing in common: a legacy. For Henry Ford it was the motorcar, for Thomas Edison it was the lightbulb. For our intern Simon, it was this lip-smackingly awesome Sea Bream. Taking the warm crunchiness of potatoes against the fresh southern asian flavours of fish with coriander, ginger and lime, it\u2019s the perfect dish for transporting your tastebuds. Don\u2019t let the smell of the fish sauce throw you - add it gradually to your sauce for a really authentic asian spin!",
            "difficulty": 1,
            "fats": "6 g",
            "favorites": 9,
            "headline": "with Tomato Concasse and Crispy Potatoes",
            "id": "53314276ff604d28828b456b",
            "image": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/53314276ff604d28828b456b.jpg",
            "ingredients": [
                "2 Fillets Sea Bream",
                "1 Lime",
                "A Few Tomatoes",
                "\u2153 Cup Onion",
                "2 Cloves Garlic",
                "1/2 Tsp Ginger",
                "1 Tbsp Fish Sauce",
                "2 Tbsp Coriander",
                "2 Cups New Potatoes"
            ],
            "name": "Simple Sumptuous Sea Bream",
            "proteins": "29 g",
            "rating": 2.5,
            "thumb": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/53314276ff604d28828b456b.jpg",
            "time": "PT35M"
        },
        {
            "calories": "717 kcal",
            "carbos": "44 g",
            "description": "Nostalgia is a powerful thing. For some it\u2019s triggered by the smell of freshly cut grass, for others by the sound of a love song from their heady teenage years. For Head Chef Patrick it\u2019s all about Swiss Roll. A firm dinnertime favourite from his primary school years, we still see him go all misty eyed at the mere mention of it. We\u2019re pretty sure that was the inspiration behind this little number. Tonight, prepare to create a little nostalgia that the little \u2018uns will remember for years!",
            "difficulty": 2,
            "fats": "10 g",
            "favorites": 1,
            "headline": "with Roasted Rocket Potatoes",
            "id": "533143bfff604d44808b456a",
            "image": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/533143bfff604d44808b456a.jpg",
            "ingredients": [
                "2 Chicken Breasts",
                "1 Ball Mozzarella",
                "2 Tbsps Pesto",
                "A Handful of New Potatoes",
                "1 Bunches of Rocket",
                "1 Onion"
            ],
            "name": "Mozzarella and Pesto Roulades",
            "proteins": "67 g",
            "rating": 4.6,
            "thumb": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/533143bfff604d44808b456a.jpg",
            "time": "PT35M"
        },
        {
            "calories": "751 kcal",
            "carbos": "105 g",
            "description": "Head Chef Patrick doesn\u2019t like fuss. He\u2019s always telling us that the best kind of food is simple, soulful grub that makes you feel loved. That said, every dinner is a chance to practice your presentation skills. Bigger plates are a great way of framing your food and a sprinkle of herbs or a drizzle of olive oil at the end gives everything a bit more pizzazz. For this recipe, we took classic Mexican ingredients and played with the presentation to create something that\u2019s as tasty to the eye as it is to the tongue. Arriba!",
            "difficulty": 1,
            "fats": "4 g",
            "favorites": 7,
            "headline": "with Homemade Guacamole and Black Bean Salsa",
            "id": "5331430fff604d557f8b456d",
            "image": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/5331430fff604d557f8b456d.jpg",
            "ingredients": [
                " 3 Soft Wholemeal Wraps",
                "1 Tin Tomatoes",
                "1 Tsp Mexican Spice",
                "1 Tin Black Beans",
                "1 Avocado",
                "1 Lime",
                "5 Tbsps Coriander",
                "1/2 Cup Red Onion",
                "1 Yellow Pepper"
            ],
            "name": "Mexican Tortilla Stack",
            "proteins": "35 g",
            "rating": 4,
            "thumb": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/5331430fff604d557f8b456d.jpg",
            "time": "PT35M"
        },
        {
            "calories": "689 kcal",
            "carbos": "84 g",
            "description": "We\u2019ve all heard that much overused culinary phrase \u201cfusion food\u201d, but this recipe is fusion of a slightly different kind. With the onset of Winter Patrick has taken some decidedly seasonal squash and the deep, heady scent of rosemary and combined them with the lighter flavour of feta and wild rice. The squash takes a little bit of work with a vegetable peeler but once you\u2019ve tackled and roasted it you\u2019ll never look back. We use any leftovers for butternut squash soup!",
            "difficulty": 0,
            "fats": "8 g",
            "favorites": 5,
            "headline": "with Wild Rice, Feta and Pine Nuts",
            "id": "53314328ff604d4d808b456b",
            "image": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/53314328ff604d4d808b456b.jpg",
            "ingredients": [
                "2 Cups Butternut Squash",
                "2 Sprigs Rosemary",
                "100g Wild Rice",
                "5 Tbsps Feta Cheese",
                "2 Tbsps Pine Nuts",
                "2 Cup Broccoli Florets",
                "1 Vegetable Stock Pot"
            ],
            "name": "Roasted Rosemary Butternut Squash ",
            "proteins": "23 g",
            "rating": 3.4,
            "thumb": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/53314328ff604d4d808b456b.jpg",
            "time": "PT40M"
        },
        {
            "calories": "",
            "carbos": "",
            "description": "\u2018Allo Genovese\u2019 simply means \u2018in the style of Genoa\u2019, which is the northern Italian city famous for the pesto that you\u2019ll be making tonight. \u2018Pesto\u2019 actually comes from the word \u2018pestare\u2019, which means to pound or crush, referring to the old fashioned method of making it in a pestle & mortar. If you happen to have a food processor, you can whizz the pesto together in that, or alternatively just chop, chop, chop everything until it is tiny. Andiamo! ",
            "difficulty": 0,
            "fats": "",
            "favorites": 5,
            "headline": "with Toasted Pine Nuts and Tenderstem Broccoli",
            "id": "53314343ff604d28828b456c",
            "image": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/53314343ff604d28828b456c.jpg",
            "ingredients": [
                "Fresh Gnocchi",
                "1 Large Bunch of Basil",
                "4 Tbsps Pine Nuts",
                "4 Tbsps Hard Italian Cheese",
                "A Handful of Tenderstem Broccoli",
                "1 Clove Garlic"
            ],
            "name": "Gnocchi Allo Genovese",
            "proteins": "",
            "rating": 4.1,
            "thumb": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/53314343ff604d28828b456c.jpg",
            "time": "PT25M"
        },
        {
            "calories": "790 kcal",
            "carbos": "100 g",
            "description": "\u201cPolpetti?!\u201d we hear you say. That\u2019s meatballs to you and me. But meatballs so good you want \r\n\r\nto parade them down the street waving your arms aloft like a passionate Italian grandmother. \r\n\r\nThese little rascals are perfect for your little rascals (both big and small!) as you can get \r\n\r\neveryone involved in rolling them up. Once served, everyone around the table must choose an \r\n\r\nItalian name and act Italian for the rest of dinner time. Andiamo!*",
            "difficulty": 3,
            "fats": "9 g",
            "favorites": 1,
            "headline": "with Creamy Parmesan Polenta",
            "id": "53314398ff604d6c7a8b456a",
            "image": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/53314398ff604d6c7a8b456a.jpg",
            "ingredients": [
                "200g Mince Beef",
                "4 Pork Sausages",
                "1 Carton Tomato Passata",
                "2 Cloves Garlic",
                "1 Bunch Parsley",
                "600ml Milk",
                "200g Polenta ",
                "\u2153 Cup Parmesan"
            ],
            "name": "Herbed Italian Polpetti",
            "proteins": "39 g",
            "rating": null,
            "thumb": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/53314398ff604d6c7a8b456a.jpg",
            "time": "PT35M"
        },
        {
            "calories": "556 kcal",
            "carbos": "62 g",
            "description": "Patrick has been working on a theory that the fewer utensils you use to eat a meal, the tastier it\u2019s likely to be. Think about it - everything you eat with only a fork is usually delicious. Dispense with cutlery entirely to use your fingers and suddenly you\u2019re in taste bud paradise. That was the thinking behind this Japanese favourite. A surefire winner in the eateries of Tokyo, pick it up with your fingers and get stuck in! The first person to finish has to shout \u201cBanzaaaiiii\u201d!",
            "difficulty": 2,
            "fats": "4 g",
            "favorites": 44,
            "headline": "and Sweet and Sour Noodles",
            "id": "5252b20c301bbf46038b477e",
            "image": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/5252b20c301bbf46038b477e.jpg",
            "ingredients": [
                "Chicken Thighs",
                "Sweet Chilli Sauce",
                "Egg Noodles",
                "Green Beans",
                "Red Onion",
                "Lime",
                "Fish Sauce",
                "Chinese Rice Vinegar",
                "Soy Sauce",
                "Garlic",
                "Spring Onions",
                "Plain Flour"
            ],
            "name": "Genki Yakitori with Crispy Red Onions",
            "proteins": "32 g",
            "rating": 3.8,
            "thumb": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto/hellofresh_s3/image/5252b20c301bbf46038b477e.jpg",
            "time": "PT40M"
        }
    ])
})


api.listen(5200,()=>console.log("server work"))