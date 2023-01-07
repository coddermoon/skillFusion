import TrackCards from "../../../components/TrackCards";


const Tracks = () => {
    return (
        <div className="py-20 bg-[#f0ffe4]">
            <div className="container">
                <div className="text-center">
                    <button className=" border-primary bg-shade text-redtype border-2 text-center px-3 rounded-full font-bold">dream categories</button>
                   <div className="max-w-[600px] mx-auto">
                   <h2 className="mt-8 text-4xl font-bold ">Starting the journey of self-study to improve oneself</h2>
                   <p className="mt-5 text-text text-lg font-medium">Set your goal, start career growth now</p>
                   </div>
                    <div className="my-10 grid grid-cols-2 gap-10">

                        <TrackCards />
                        <TrackCards />
                        <TrackCards />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tracks;