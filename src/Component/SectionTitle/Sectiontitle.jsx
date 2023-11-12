/* eslint-disable react/prop-types */


const Sectiontitle = ({heading,subHeading}) => {
    return (
        <div className=" mx-auto md:w-6/12 lg:w-4/12 text-center my-8">
            <p className="text-yellow-500 text-xl mb-2">--- {subHeading} ---</p>
            <h1 className="text-4xl uppercase border-y-2 py-4">{heading}</h1>
        </div>
    );
};

export default Sectiontitle;