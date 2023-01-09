import { Link } from "react-router-dom";
import CourseCard from "../../../components/CourseCard";


const PopularCourses = () => {
    return (
        <div className=" py-20 bg-shade">
            <div className="container mx-auto">
                {/* heading */}

<div className="flex justify-between">
<h2 className="text-4xl font-bold text-text  leading-tight">Best career track program </h2>
<Link className="bg-primary px-4 py-2 font-semibold text-lg text-white rounded" to="/">See All</Link>
</div>

{/* cards on courses */}

<div className="grid grid-cols-4 gap-5 mt-10">

<CourseCard/>
<CourseCard/>
<CourseCard/>
<CourseCard/>

</div>

            </div>
            
        </div>
    );
};

export default PopularCourses;