import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CheckItOut from "../CheckItOut/CheckItOut";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="w-3/4 mx-auto mb-4">
                <Category></Category>
            </div>
            <PopularMenu></PopularMenu>
            <CheckItOut></CheckItOut>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;