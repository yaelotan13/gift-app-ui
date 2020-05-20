import Product from './Product';

import wonderWomenCup from '../../assets/images/products/mug.jpg';
import starWarsToaster from '../../assets/images/products/starwar.jpg';
import plants from '../../assets/images/products/plants.jpg';
import albert from '../../assets/images/products/albert.jpg';
import freud from '../../assets/images/products/freud.jpg';
import artSocks from '../../assets/images/products/art-socks.png';
import unicornPillow from '../../assets/images/products/unicorn-pillow.png';
import spikeBall from '../../assets/images/products/spikeball.png';

const products = [
    new Product(1, 'Spikeball 3 Ball Set Includes Playing Net, Balls, Drawstring Bag Outdoor Games', 82.99, 'ebay', spikeBall, 'https://www.ebay.com/itm/Spikeball-3-Ball-Set-Includes-Playing-Net-Balls-Drawstring-Bag-Outdoor-Games/143032174284?_trkparms=aid%3D111001%26algo%3DREC.SEED%26ao%3D1%26asc%3D20180816085401%26meid%3Dd5017baff06547a3bc03a184c33f5ca8%26pid%3D100970%26rk%3D1%26rkt%3D1%26mehot%3Dlo%26sd%3D143032174284%26itm%3D143032174284%26pmt%3D1%26noa%3D1%26pg%3D2380057%26brand%3DSpikeball&_trksid=p2380057.c100970.m5481&_trkparms=pageci%3A6e5dfeac-9aa0-11ea-9f91-74dbd180ad46%7Cparentrq%3A3256b3ec1720acc6c5902090ff963182%7Ciid%3A1', 4),
    new Product(2, 'Silver Buffalo WW0132G DC Comics Wonder Woman Uniform Glitter Ceramic Mug, 14-Ounces,', 17.99, 'Amazon', wonderWomenCup, 'https://www.amazon.com/dp/B00IKQ873S/ref=cm_gf_aAF_i0_i1_i10_d_p0_qd0_QH9jsyncZgNnnyqIvUaz', 4),
    new Product(3, 'Uncanny Brands Star Wars Darth Vader Elite 2-Slice Toaster- Star Wars Icon Logo onto Your Toast', 49.99, 'Amazon', starWarsToaster, 'https://www.amazon.com/Star-Wars-Darth-Vader-Toaster/dp/B00JFFH1NA/ref=sr_1_22?crid=2LMNW5MGJE63G&dchild=1&keywords=star+wars+waffle+maker&qid=1589879389&s=home-garden&sprefix=star+wars+wa%2Cgarden%2C275&sr=1-22', 4),
    new Product(4, 'Ban.Do 2018-2019 13-Month Planner - Garden Party', 19.99, 'Amazon', plants, 'https://www.amazon.com/dp/B01H3W9VJS/ref=cm_gf_aAM_i0_i10_d_p0_qd4_QF9GjT57ty3Tr2ROKJgn', 3),
    new Product(5, 'Mustard Magnetic Paper Clip Dispenser - Gray Genius Paperclip Holder(M16028)', 8.19, 'Amazon', albert, 'https://www.amazon.com/dp/B00NIVEQ6M/ref=cm_gf_aAF_i6_d_p0_qd3_ZA92DzTm6UZZ8iZAqdAT', 3),
    new Product(6, 'NOT Sigmund Freud iPhone 11 Pro Max TPU Glass Phone Case Pattern Cover', 14.99, 'Amazon', freud, 'https://www.amazon.com/NOT-Sigmund-Freud-iPhone-Pattern/dp/B0876FH4F9/ref=sr_1_12?dchild=1&keywords=freud&qid=1589914747&rnid=2941120011&s=wireless&sr=1-12', 0),
    new Product(7, 'Chelsea Peers unicorn neck pillow', 22.99, 'Asos', unicornPillow, 'https://www.asos.com/chelsea-peers/chelsea-peers-unicorn-neck-pillow/prd/14747659?clr=&colourWayId=16640917&SearchQuery=&cid=27400', 0),
    new Product(8, 'Chalier 4-6 Pairs Womens Fun Socks Famous Painting Patterned Art Socks & Printed Cool Novelty Funny Socks for Women', 12.99, 'Amazon', artSocks, 'https://www.amazon.com/dp/B01N4170WA/ref=cm_gf_aAF_i4_d_p0_qd0_EYIyzINiUMGum12Ezqy7', 4),
];

module.exports = {
    products
}