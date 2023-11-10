import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="w-3/4 mx-auto mb-4">
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;