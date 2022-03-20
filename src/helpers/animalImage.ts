export function animalImage(species: string): string {
    let catImage =
      "https://images.unsplash.com/photo-1570117268106-8e369647c733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80";
    let dogImage =
      "https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80";
    let horseImage =
      "https://images.unsplash.com/photo-1513966007261-5a86a5284471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80";
    let birdImage =
      "https://images.unsplash.com/photo-1594911588637-c9e891bd7858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80";
    let imageLink = "";
    switch (species) {
      case "Cat":
        return (imageLink = catImage);

        break;

      case "Dog":
        return (imageLink = dogImage);

        break;

      case "Horse":
        return (imageLink = horseImage);

        break;

      case "Bird":
        return (imageLink = birdImage);

        break;

      default:
        return (imageLink =
          "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80");
        break;
    }
  }