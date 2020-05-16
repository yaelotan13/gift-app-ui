import MainCategory from './MainCategory';
import SubCategory from './SubCategory';

import foodie from '../../assets/images/categories/foodie.png';
import geeky from '../../assets/images/categories/geeky.png';
import movie from '../../assets/images/categories/movie.jpg';
import personality from '../../assets/images/categories/personality.jpg';
import sport from '../../assets/images/categories/sport.jpeg';
import student from '../../assets/images/categories/student.jpg';
import healthyLiving from '../../assets/images/categories/healthy-living.png';
import craft from '../../assets/images/categories/craft.jpeg';
import art from '../../assets/images/categories/art.jpeg';
import gadget from '../../assets/images/categories/gadget.jpg';
import occupation from '../../assets/images/categories/occupation.png';
import spiritual from '../../assets/images/categories/spiritual.jpeg';

const mainCategories = [
    new MainCategory(1, 'Sport', sport),
    new MainCategory(2, 'Foodie', foodie),
    new MainCategory(3, 'Movie', movie),
    new MainCategory(4, 'Personality', personality),
    new MainCategory(5, 'Geeky', geeky),
    new MainCategory(6, 'Healty Living', healthyLiving),
    new MainCategory(7, 'Craft', craft),
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
    new SubCategory(12, 'Star Wars', 3),
    new SubCategory(13, 'Wonder Women', 3),
    new SubCategory(14, 'Micky Mouse', 3),
    new SubCategory(15, 'Outgoing', 4),
    new SubCategory(16, 'Intovert', 4),
    new SubCategory(17, 'Competitve', 4),
    new SubCategory(18, 'Funny', 4),
    new SubCategory(19, 'Science', 5),
    new SubCategory(20, 'SuperHeroes', 5),
    new SubCategory(21, 'Computer Games', 5),
    new SubCategory(22, 'Fintness', 6),
    new SubCategory(23, 'Healthy Food', 6),
    new SubCategory(24, 'Mindfulness', 6),
];

module.exports = {
    mainCategories,
    subCategories
}