// components/AddMusic.jsx
import { FiPlus } from "react-icons/fi";

const AddMusic = ({onChange}) => {
  return (
    <label className="inline-flex items-center gap-2 px-4 py-2 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-full shadow-md transition duration-200">
      <FiPlus className="text-base" />
      <span>Add Music</span>
      
      <input
        type="file"
        className="hidden"
        onChange={onChange}
      />
    </label>
  );
};

export default AddMusic;
