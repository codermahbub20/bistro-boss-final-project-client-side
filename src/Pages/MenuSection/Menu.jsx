import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";

import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const[popularItems] = useMenu()

    const Offered = popularItems.filter(item =>item.category === 'offered')
    const dessert = popularItems.filter(item =>item.category === 'dessert')
    const pizza = popularItems.filter(item =>item.category === 'pizza')
    const salad = popularItems.filter(item =>item.category === 'salad')
    const soup = popularItems.filter(item =>item.category === 'soup')

    return (
        <div className="my-5">
            <Cover img={coverImg} title="OUr menu" subTitle="Would you like to try a dish?"></Cover>

            <Sectiontitle subHeading="Don't Miss The Offer" heading="Offered items" ></Sectiontitle>
            <MenuCategory items={Offered}></MenuCategory>

            <Cover img={dessertImg} title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <MenuCategory items={dessert}></MenuCategory>


            <Cover img={pizzaImg} title="Pizza" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <MenuCategory items={pizza}></MenuCategory>

            <Cover img={saladImg} title="salads" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <MenuCategory items={salad}></MenuCategory>

            <Cover img={soupImg} title="soups" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <MenuCategory items={soup}></MenuCategory>

        </div>
    );
};

export default Menu;