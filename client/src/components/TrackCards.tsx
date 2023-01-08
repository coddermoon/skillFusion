

const TrackCards = ({category}:{category:any}) => {
  const {name,headline} = category;
    return (
        <div className="py-5  hover:border-shade_deep border-2 rounded-xl hover:bg-shade shadow-xl ">
           <div className="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdQXY-qLpRtNzNrlcjk-bzmWe65M_6oX3WP5PXgYjGw&s" alt="" />
            <div className="items mx-3 flex justify-between items-left">
              <div className="w-full">
              <h2 className="text-2xl text-text text-left font-bold">{name}</h2>
                <p className="text-xl text-left text-text mt-3 font-medium">{headline}</p>
               <p className="text-left mt-3"> <small className="text-text font-bold text-lg text-left">6 course </small></p>
              </div>
            
            </div>
            
           </div>
        </div>
    );
};

export default TrackCards;