/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >

            <div className="hero sm:min-h-screen md:min-h-[80vh]">
                <div className="hero-overlay md:w-3/4 md:h-1/2 bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-5xl uppercase font-bold">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;