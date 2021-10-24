import { v4 as uuidv4 } from 'uuid';

export const productsData = [
    {
        id: "7e4107f6-cbcb-4027-8f77-19aef295e79f",
        name: "Dinosaur Toys for Kids",
        description: "Our Take Apart Dinosaur is made of high-quality, non-toxic, sturdy and recyclable plastic. The edges and corners are smooth, so no worries that the parts will scratch kids' hands.",
        price: 13.82,
        creationDate: (new Date()).getTime(),
        imageName: "dinosaur.PNG"
    },
    {
        id: uuidv4(),
        name: "Star Wars",
        description: "Star Wars Grogu Plush Toy, 11-in “The Child” from The Mandalorian, Collectible Stuffed Character for Movie Fans, Ages 3 Years and Older.",
        price: 13.92,
        creationDate:(new Date()).getTime(),
        imageName: "StartWars.PNG"
    },
    {
        id: uuidv4(),
        name: "Bluey Family Home",
        description: "The Bluey Family Home is the perfect playset for Bluey and her family! Big in size and features, this enormous toy playset is full moulded details with opening doors for added fun.",
        price: 30.49,
        creationDate:(new Date()).getTime(),
        imageName: "famile_home.PNG"
    },
    {
        id: uuidv4(),
        name: "Jurassic",
        description: "Jurassic World Camp Cretaceous Chompin’ Carnotaurus Toro Dinosaur Action Figure with Button-Activated Chomping & Other Motions, Realistic Sculpting, Kid Gift Age 4 Years & Up",
        price: 24.99,
        creationDate:(new Date()).getTime(),
        imageName: "Jurassic.PNG"
    },
    {
        id: uuidv4(),
        name: "Smarkids",
        description: "Smarkids Take Apart Dinosaur Toys for Kids (4-Pack), Building Toy Set with Screwdriver Construction Engineering Play Kit STEM Learning for Boys Girls Toddlers Age 3 4 5 6 7 Year Old",
        price: 29.86,
        creationDate:(new Date()).getTime(),
        imageName: "Smarkids.PNG"
    },
]