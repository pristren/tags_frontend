import { Button } from "../ui/button";

const Tags = () => {
    const tags = [
        'confidence',
        'Leadership',
        'Empathy',
        'Problem Solving',
        'Curiosity',
        'Anger Management',
        'Communication',
        'Decision Making',
        'Growth Mindset',
        'Critical Thinking',
        'Adaptibility',
        'Conflict Resolution',
        'new',
        'new 1',
        'new 2',
        'new 3',
        'new 4',
        'Anger Management',
        'Communication',
        'Decision Making',
        'Growth Mindset',
        'Critical Thinking',
        'Adaptibility',
        'Conflict Resolution'
    ]
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const shuffledTags = shuffleArray(tags);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-9/12 mx-auto">
            <h2 className="text-center text-4xl font-bold">Select Tags</h2>
            <p className="text-center text-gray-500 my-5">Select 12 tags so that we can  personalize<br /> your experience</p>
            <div className=" flex flex-wrap gap-2 justify-center items-center w-1/2 mx-auto">
            {shuffledTags.map((tag, index) => (
                    <button key={index} className='border p-3 rounded-md'>{tag}</button>
                ))}
            </div>
            <div className="flex gap-5 justify-center items-center my-5">
            <Button variant="outline" className="rounded-full px-10 py-1 uppercase">Back</Button>
            <Button className="rounded-full px-10 py-1 uppercase">Next</Button>
            </div>
        </div>
        </div>
    );
};

export default Tags;