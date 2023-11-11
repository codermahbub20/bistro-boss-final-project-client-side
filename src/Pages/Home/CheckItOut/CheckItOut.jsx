import Sectiontitle from '../../../Component/SectionTitle/Sectiontitle';
import featured from '../../../assets/home/featured.jpg'
const CheckItOut = () => {
    return (
        <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${featured})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">

                <div className="max-w-3/4 ">
                    <Sectiontitle heading="FROM OUR MENU" subHeading="Check It Out"></Sectiontitle>
                    <div className="max-w-3/4 gap-10 md:flex items-center justify-center mx-auto">
                        <div>
                            <img className='rounded-lg' src={featured} alt="" />
                        </div>
                        <div className='text-start text-white space-y-3'>
                            <p>December 20, 2023</p>
                            <h1 className='text-xl'>Where Can I Get Some ?</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur hic neque, reprehenderit debitis provident nam corporis atque illum, cupiditate quibusdam iure nisi sit asperiores libero. Ipsa corporis molestiae, voluptatum vitae eum consequuntur ullam? Dolores delectus, culpa illum magnam vero harum.</p>
                            <button className='btn btn-outline text-white hover:text-white hover:bg-none border-b-4'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckItOut;