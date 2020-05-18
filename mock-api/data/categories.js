import MainCategory from './MainCategory';
import SubCategory from './SubCategory';

// import foodie from '../../assets/images/categories/foodie.png';
// import geeky from '../../assets/images/categories/geeky.png';
// import movie from '../../assets/images/categories/movie.jpg';
// import personality from '../../assets/images/categories/personality.jpg';
// import sport from '../../assets/images/categories/sport.jpeg';
// import student from '../../assets/images/categories/student.jpg';
// import healthyLiving from '../../assets/images/categories/healthy-living.png';
// import craft from '../../assets/images/categories/craft.jpeg';
// import art from '../../assets/images/categories/art.jpeg';
// import gadget from '../../assets/images/categories/gadget.jpg';
// import occupation from '../../assets/images/categories/occupation.png';
// import spiritual from '../../assets/images/categories/spiritual.jpeg';

// import foodie from '../../assets/images/categories-v2/foodie.png';
// import geeky from '../../assets/images/categories-v2/geeky.jpeg';
// import movie from '../../assets/images/categories-v2/movies.jpeg';
// import personality from '../../assets/images/categories-v2/persons.jpeg';
// import sport from '../../assets/images/categories-v2/Sports.png';
// import student from '../../assets/images/categories-v2/Student.png';
// import healthyLiving from '../../assets/images/categories-v2/healthy-lifestyle.jpeg';
// import craft from '../../assets/images/categories-v2/hobbies.png';
// import art from '../../assets/images/categories-v2/art.jpeg';
// import gadget from '../../assets/images/categories-v2/Gadegts.png';
// import occupation from '../../assets/images/categories-v2/work.jpeg';
// import spiritual from '../../assets/images/categories-v2/spiritual.jpeg';

import pizza from '../../assets/images/categories-icons/pizza.png';
import gadget from '../../assets/images/categories-icons/gadget.png';
import geeky from '../../assets/images/categories-icons/geeky.png';
import art from '../../assets/images/categories-icons/art.png';
import healthyLiving from '../../assets/images/categories-icons/healthy.png';
import craft from '../../assets/images/categories-icons/hobbies.png';
import movie from '../../assets/images/categories-icons/movie.png';
import personality from '../../assets/images/categories-icons/personality.png';
import spiritual from '../../assets/images/categories-icons/spiritual.png';
import student from '../../assets/images/categories-icons/student.png';
import occupation from '../../assets/images/categories-icons/work.png';
import sport from '../../assets/images/categories-icons/sport.png';

const mainCategories = [
    new MainCategory(1, 'Sport', sport),
    new MainCategory(2, 'Foodie', pizza),
    new MainCategory(3, 'Movie', movie),
    new MainCategory(4, 'Personality', personality),
    new MainCategory(5, 'Geeky', geeky),
    new MainCategory(6, 'Healty Living', healthyLiving),
    new MainCategory(7, 'Hobbies', craft),
    new MainCategory(8, 'Art', art),
    new MainCategory(9, 'Gadgets', gadget),
    new MainCategory(10, 'Occupation', occupation),
    new MainCategory(11, 'Spiritual', spiritual),
    new MainCategory(12, 'Student', student),
]; 

const subCategories = [
    new SubCategory(1, 'Beach Volleyball', 1),
    new SubCategory(2, 'BasketBall', 1),
    new SubCategory(3, 'Running', 1),
    new SubCategory(4, 'Weight Lifting', 1),
    new SubCategory(5, 'Swimming', 1),
    new SubCategory(6, 'Football', 1),
    new SubCategory(7, 'Yoga', 1),
    new SubCategory(8, 'Pizza', 2),
    new SubCategory(9, 'Hamburger', 2),
    new SubCategory(10, 'Sushi', 2),
    new SubCategory(11, 'Sweets', 2),
    new SubCategory(12, 'Coffee Lover', 2),
    new SubCategory(13, 'Vegan', 2),
    new SubCategory(14, 'Healthy', 2),
    new SubCategory(15, 'Star Wars', 3),
    new SubCategory(16, 'Wonder Women', 3),
    new SubCategory(17, 'Micky Mouse', 3),
    new SubCategory(18, 'Outgoing', 4),
    new SubCategory(19, 'Intovert', 4),
    new SubCategory(20, 'Competitve', 4),
    new SubCategory(21, 'Funny', 4),
    new SubCategory(22, 'Romantic', 4),
    new SubCategory(23, 'Relaxed', 4),
    new SubCategory(24, 'Romantic', 4),
    new SubCategory(25, 'Unique', 4),
    new SubCategory(26, 'Curios', 4),
    new SubCategory(27, 'Creative', 4),
    new SubCategory(28, 'Orgenized', 4),
    new SubCategory(29, 'Laid Back', 4),
    new SubCategory(30, 'Nostalgic', 4),
    new SubCategory(31, 'Cynical', 4),
    new SubCategory(32, 'SuperHeroes', 5),
    new SubCategory(33, 'Computer Games', 5),
    new SubCategory(34, 'Fintness', 6),
    new SubCategory(35, 'Healthy Food', 6),
    new SubCategory(36, 'Mindfulness', 6),
    new SubCategory(37, 'Craft', 7),
    new SubCategory(38, 'Puzzels', 7),
    new SubCategory(39, 'DIY', 7),
    new SubCategory(40, 'Reading', 7),
    new SubCategory(41, 'Drawing', 7),
    new SubCategory(42, 'Cooking', 7),
    new SubCategory(43, 'Acting', 8),
    new SubCategory(44, 'Singing', 8),
    new SubCategory(45, 'Animation', 8),
    new SubCategory(46, 'Drawing', 8),
    new SubCategory(47, 'Fine Art', 8),
    new SubCategory(48, 'Smart Phones', 9),
    new SubCategory(49, 'Smart Watcher', 9),
    new SubCategory(50, 'Laptops', 9),
    new SubCategory(51, 'Ipads', 9),
    new SubCategory(52, 'Student', 10),
    new SubCategory(53, 'Psychologist', 10),
    new SubCategory(54, 'Proffesional Athelete', 10),
    new SubCategory(55, 'Programmer', 10),
    new SubCategory(56, 'Coach', 10),
    new SubCategory(57, 'Finance', 10),
    new SubCategory(58, 'Lawyer', 10),
    new SubCategory(59, 'Designer', 10),
    new SubCategory(60, 'Freelancer', 10),
    new SubCategory(61, 'Mindfulness', 11),
    new SubCategory(62, 'Yoga', 11),
    new SubCategory(63, 'Buddhism', 11),
    new SubCategory(64, 'Philosophy', 11),
    new SubCategory(65, 'Psychology', 11),
    new SubCategory(66, 'Engineer', 12),
    new SubCategory(67, 'Psychology', 12),
    new SubCategory(68, 'Sport', 12),
    new SubCategory(69, 'Education', 12),
    new SubCategory(70, 'Computer Science', 12),
    new SubCategory(71, 'Architecture', 12),
    new SubCategory(72, 'Psychology', 12),
];

module.exports = {
    mainCategories,
    subCategories
}