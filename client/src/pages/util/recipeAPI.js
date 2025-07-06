export async function getAllRecipes(page, numRecipes) {
  return [
      {
        name: "Recipe 1",
        author: "Author 1",
        image: null,
        rating: 4.5
      },
      {
        name: "Recipe 2",
        author: "Author 2",
        image: null,
        rating: 5
      },
      {
        name: "Recipe 3",
        author: "Author 3",
        image: null,
        rating: 4
      },
      {
        name: "Recipe 4",
        author: "Author 4",
        image: null,
        rating: 3
      },
      {
        name: "Recipe 5",
        author: "Author 5",
        image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 2.5
      },
      {
        name: "Recipe 6",
        author: "Author 6",
        image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 1
      },
    ];
}

export async function getAllTags() {
  
}