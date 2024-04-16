import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState hook
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
    ];

    // State to keep track of selected tags
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagClick = (tag) => {
        // Toggle selection: if tag is already selected, remove it; otherwise, add it
        setSelectedTags(selectedTags.includes(tag) ? selectedTags.filter(t => t !== tag) : [...selectedTags, tag]);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-9/12 mx-auto">
                <h2 className="text-center text-4xl font-bold">Select Tags</h2>
                <p className="text-center text-gray-500 my-5">Select 12 tags so that we can personalize<br /> your experience</p>
                <div className="flex flex-wrap gap-2 justify-center items-center lg:w-1/2 mx-auto">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            className={`border p-3 rounded-md ${selectedTags.includes(tag) ? 'bg-black text-white' : ''}`} // Apply styles conditionally based on selection
                            onClick={() => handleTagClick(tag)} // Call handleTagClick function on button click
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="flex gap-5 justify-center items-center my-5">
                    <Link to="/login">
                        <Button variant="outline" className="rounded-full px-10 py-1 uppercase">Back</Button>
                    </Link>
                    <Link to="/tags-card">
                        <Button className="rounded-full px-10 py-1 uppercase">Next</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tags;
