

const MenuItem = ({item}) => {

    const{image,price,name,recipe} = item;

    return (
        <div className="flex gap-4">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[104px]" src={image} alt="" />
            <div>
                <h2 className="text-xl">{name}------------</h2>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;