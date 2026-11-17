import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetch Indian Users
export const fetchUsers = async () => {

    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    const indianNames = [
        "Adithya Ram",
        "Rahul Sharma",
        "Arjun Kumar",
        "Priya Reddy",
        "Sneha Patel",
        "Kiran Kumar",
        "Ananya Singh",
        "Vikram Rao",
        "Pooja Verma",
        "Rohit Gupta"
    ];

    return data.map((user, index) => ({
        ...user,
        name: indianNames[index]
    }));
};


// Fetch English Posts Related to India
export const fetchPosts = async () => {

    const response = await axios.get(`${BASE_URL}/posts`);

    const data = response.data;

    const indianPosts = [
        {
            title: "Education System in India",
            body: "Education plays an important role in India's development. Students across the country are learning new technologies and building successful careers."
        },
        {
            title: "Indian Culture and Traditions",
            body: "India is known for its rich culture, traditions, languages, and diversity. Every region has its own unique customs and celebrations."
        },
        {
            title: "Technology Growth in India",
            body: "India is rapidly growing in the technology sector. Software development, artificial intelligence, and digital services are creating new opportunities."
        },
        {
            title: "Beautiful Places in India",
            body: "India has many beautiful tourist destinations, including beaches, mountains, historical monuments, and wonderful natural landscapes."
        },
        {
            title: "Indian Festivals",
            body: "Festivals such as Diwali, Sankranti, Holi, and Dussehra bring families and communities together through celebrations and traditions."
        },
        {
            title: "Indian Food and Cuisine",
            body: "Indian cuisine is famous for its delicious flavors, spices, traditional dishes, and regional varieties."
        },
        {
            title: "Digital India",
            body: "Digital India encourages technology adoption and provides citizens with better access to online services, digital payments, and information."
        },
        {
            title: "Importance of Sports in India",
            body: "Sports play an important role in Indian society. Cricket, badminton, hockey, and football are popular among sports enthusiasts."
        },
        {
            title: "Career Opportunities for Students",
            body: "Students in India can explore career opportunities in software development, engineering, business, healthcare, and many other fields."
        },
        {
            title: "Indian Tourism",
            body: "Tourism allows people to explore India's historical places, cultural heritage, natural beauty, and traditional lifestyles."
        }
    ];

    return data.map((post, index) => ({
        ...post,
        title: indianPosts[index % indianPosts.length].title,
        body: indianPosts[index % indianPosts.length].body
    }));
};