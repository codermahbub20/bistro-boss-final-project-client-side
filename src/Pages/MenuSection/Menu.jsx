import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Cover img={coverImg} title="OUr menu" subTitle="Would you like to try a dish?"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;