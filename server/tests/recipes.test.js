const request = require('supertest');

describe('Recipe API', () => {
  describe('GET /api/recipes/all', () => {
    // positive test case 
    test('should return list of 3 recipes from INITIAL insert statement', async () => {
      const response = await request('http://localhost:8080')
        .get('/api/recipes/all?page=1&numRecipes=12&search=&min=0&max=5&tags=tags&tags=Breakfast&tags=Brunch&tags=Lunch&tags=Dinner&tags=Snack&tags=Dessert&tags=Appetizer&tags=Side+Dish&tags=Easy&tags=Quick&tags=Simple&tags=One-Pot&tags=No-Bake&tags=Beginner-Friendly&tags=Healthy&tags=Low-Carb&tags=Low-Calorie&tags=High+Protein&tags=High+Fiber&tags=Vegan&tags=Vegetarian&tags=Gluten-Free&tags=Dairy-Free&tags=Keto&tags=Paleo&tags=High-Fiber&tags=Sugar-Free&tags=Low-Fat&tags=Baked&tags=Grilled&tags=Roasted&tags=Fried&tags=Slow+Cooker&tags=Instant+Pot&tags=Air+Fryer&tags=Steamed&tags=Toasted&tags=Kid-Friendly&tags=BBQ&tags=Comfort+Food&tags=Holiday&tags=Italian&tags=Mexican&tags=Indian&tags=Chinese&tags=Japanese&tags=Thai&tags=Mediterranean&tags=Middle+Eastern&tags=American&tags=French&tags=Korean&tags=Turkish&tags=Spanish&tags=Arab&tags=Vietnamese&tags=Greek&tags=Hong+Kong&tags=Indonesian&sortBy=rating&sortOrder=descending')
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual({
            recipes: [
                {
                    recid: 1,
                    recipe_name: "Blueberry pancakes",
                    author: "mary_sue@email.com",
                    about: "<p>This is my first recipe I made 15 years ago when I first started cooking. \n    These pancakes are fluffy and a masterpiece. Feel free to serve it with a cup of coffee for breakfast.</p>",
                    img: null,
                    rating: "0",
                    prep_time: "(0,30)",
                    cook_time: "(0,15)",
                    tags: [
                        "Breakfast",
                        "Easy",
                        "No-Bake",
                        "Beginner-Friendly"
                    ],
                    notes: "",
                    servings: 1,
                    steps: [
                        "Mix flour, sugar, and baking powder in a bowl.",
                        "Add milk, eggs, and butter; mix until smooth.",
                        "Gently mix the blueberries into the mixture. Make sure not to overmix!",
                        "Heat a lightly oiled griddle or frying pan over medium-high heat.",
                        "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
                        "Brown on both sides and serve hot."
                    ],
                    created_at: "2026-06-24T20:54:39.219Z"
                },
                {
                    recid: 2,
                    recipe_name: "Avocado toasts",
                    author: "mary_sue@email.com",
                    about: "<p>This is my go-to breakfast when I am busy and do not have time in the morning. \n    This recipe is very simple and easy and it contains ingredients that you probably have in your house. You can add whatever\n    extra toppings you want on the toasts, like honey.</p>",
                    img: null,
                    rating: "0",
                    prep_time: "(0,0)",
                    cook_time: "(0,10)",
                    tags: [
                        "Breakfast",
                        "Easy",
                        "Quick",
                        "Healthy",
                        "Vegetarian",
                        "American",
                        "Toasted"
                    ],
                    notes: "",
                    servings: 2,
                    steps: [
                        "Put the 2 slices of any type of bread into the toaster. (I prefer sourdough bread.)",
                        "While the bread is toasting, cut one large avocado (or 2 small avocados) and smash it on a bowl.",
                        "Mix the lemon juice and salt in the smashed avocado.",
                        "Evenly spread the avocado mixture onto the toasted bread.",
                        "Finally, you can add whatever other toppings you want. I added cottage cheese and egg for extra protein. \n      I also added cranberries for some extra crunch"
                    ],
                    created_at: "2026-06-24T20:54:39.219Z"
                },
                {
                    recid: 3,
                    recipe_name: "Shrimp ramen",
                    author: "notlarry@email.com",
                    about: "<p>This is a simple ramen recipe that contains minimum ingredients and satisfies your \n    craving for Japanese food.</p>",
                    img: null,
                    rating: "0",
                    prep_time: "(0,10)",
                    cook_time: "(0,30)",
                    tags: [
                        "Lunch",
                        "Dinner",
                        "Simple",
                        "Beginner-Friendly",
                        "One-Pot",
                        "Japanese"
                    ],
                    notes: "",
                    servings: 2,
                    steps: [
                        "Shred the carrot into thin strips. Cut the green onions into small pieces and make sure to separate the white and green parts \n      of the green onions. Mince the ginger and garlic.",
                        "In a wok, fry the sesame oil, white part of the green onions, ginger, and garlic in medium-low heat until fragrant.",
                        "Add the shrimps to the wok and fry it until the shrimp turns pink.",
                        "Add the broth and water. Bring it to a simmer for 5 minutes.",
                        "Add the instant noodles to the liquid and simmer for another 5 minutes or until the noodles softened.",
                        "Remove from heat and stir in the carrots and the rest of the green onions for garnish. Add sesame oil, soy sauce, and salt to taste."
                    ],
                    created_at: "2026-06-24T20:54:39.219Z"
                }
            ],
            count: 3
          })
        })

    });

    // negative test case (at least one of the tags are missing: page, numRecipes, sortBy, sortOrder)
    test('should return 500 Internal Server Error when at least one tag is missing', async () => {
      const response = await request('http://localhost:8080')
        .get('/api/recipes/all?page=1&search=&min=0&max=5&tags=tags&tags=Dessert&tags=Vegetarian&tags=Indonesian&sortBy=rating&sortOrder=descending')
        .expect(500)
        .then((res) => {
          expect(res.body).toEqual({
            error: "Failed to fetch recipes."
          })
        })
    });

  });

  describe('GET /api/recipes/info', () => {
    // positive test case
    test('should return recipe details by id', async () => {
      const response = await request('http://localhost:8080')
        .get('/api/recipes/info?id=2')
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual({
            recipe: {
                recid: 2,
                recipe_name: "Avocado toasts",
                author: "mary_sue@email.com",
                about: "<p>This is my go-to breakfast when I am busy and do not have time in the morning. \n    This recipe is very simple and easy and it contains ingredients that you probably have in your house. You can add whatever\n    extra toppings you want on the toasts, like honey.</p>",
                rating: "0",
                prep_time: "(0,0)",
                cook_time: "(0,10)",
                tags: [
                    "Breakfast",
                    "Easy",
                    "Quick",
                    "Healthy",
                    "Vegetarian",
                    "American",
                    "Toasted"
                ],
                notes: "",
                servings: 2,
                steps: [
                    "Put the 2 slices of any type of bread into the toaster. (I prefer sourdough bread.)",
                    "While the bread is toasting, cut one large avocado (or 2 small avocados) and smash it on a bowl.",
                    "Mix the lemon juice and salt in the smashed avocado.",
                    "Evenly spread the avocado mixture onto the toasted bread.",
                    "Finally, you can add whatever other toppings you want. I added cottage cheese and egg for extra protein. \n      I also added cranberries for some extra crunch"
                ],
                created_at: "2026-06-24T20:54:39.219Z"
            },
            ingrs: [
                {
                    item: "Bread",
                    quantity: "2",
                    unit: "slice"
                },
                {
                    item: "Avocado",
                    quantity: "1",
                    unit: "none"
                },
                {
                    item: "Lemon juice",
                    quantity: "1",
                    unit: "tbsp"
                },
                {
                    item: "Salt",
                    quantity: "1.25",
                    unit: "tsp"
                },
                {
                    item: "Cottage cheese (optional)",
                    quantity: "0.5",
                    unit: "cup"
                },
                {
                    item: "Egg (optional)",
                    quantity: "1",
                    unit: "none"
                },
                {
                    item: "Cranberries (optional)",
                    quantity: "0.25",
                    unit: "cup"
                }
            ]
          })
        })
    });

    // negative test case
    test('should return 404 Not Found when recipe id does not exist', async () => {
      const response = await request('http://localhost:8080')
        .get('/api/recipes/info?id=0')
        .expect(404)
        .then((res) => {
          expect(res.body).toEqual({
            error: "Recipe not found."
          })
        })
    });
  });

  describe('GET /api/recipes/reviews', () => {
    test('should return list of reviews from recipe 1', async () => {
      const response = await request('http://localhost:8080')
        .get('/api/recipes/reviews?id=1&page=1&numReviews=10')
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual({
            reviews: [
                {
                    revid: 1,
                    author: "john@email.com",
                    recipe: 1,
                    created_at: "2026-06-24",
                    comment: "This is the best pancake recipe I've ever tried. It's so easy and quick to make. I love it!",
                    rating: "5",
                    helpful: 0,
                    User: {
                        profile_img: null,
                        uid: 1
                    }
                },
                {
                    revid: 3,
                    author: "notlarry@email.com",
                    recipe: 1,
                    created_at: "2026-06-24",
                    comment: "As Mary said, the pancakes are fluffy and it is an easy recipe to follow. But I prefer putting chocolate\n  chips on my pancake rather than blueberries...",
                    rating: "3",
                    helpful: 0,
                    User: {
                        profile_img: null,
                        uid: 3
                    }
                }
            ],
            count: 2
          })
        })
    });
  });

describe('GET /api/recipes/tags', () => {
    test('should return list of recipe tags', async () => {
      const response = await request('http://localhost:8080')
        .get('/api/recipes/tags')
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual([
            "Breakfast",
            "Brunch",
            "Lunch",
            "Dinner",
            "Snack",
            "Dessert",
            "Appetizer",
            "Side Dish",
            "Easy",
            "Quick",
            "Simple",
            "One-Pot",
            "No-Bake",
            "Beginner-Friendly",
            "Healthy",
            "Low-Carb",
            "Low-Calorie",
            "High Protein",
            "High Fiber",
            "Vegan",
            "Vegetarian",
            "Gluten-Free",
            "Dairy-Free",
            "Keto",
            "Paleo",
            "High-Fiber",
            "Sugar-Free",
            "Low-Fat",
            "Baked",
            "Grilled",
            "Roasted",
            "Fried",
            "Slow Cooker",
            "Instant Pot",
            "Air Fryer",
            "Steamed",
            "Toasted",
            "Kid-Friendly",
            "BBQ",
            "Comfort Food",
            "Holiday",
            "Italian",
            "Mexican",
            "Indian",
            "Chinese",
            "Japanese",
            "Thai",
            "Mediterranean",
            "Middle Eastern",
            "American",
            "French",
            "Korean",
            "Turkish",
            "Spanish",
            "Arab",
            "Vietnamese",
            "Greek",
            "Hong Kong",
            "Indonesian"
          ])
        })
    });
  });


});
