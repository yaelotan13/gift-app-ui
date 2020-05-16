import MainCategory from './MainCategory';

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

module.exports = {
    mainCategories
}