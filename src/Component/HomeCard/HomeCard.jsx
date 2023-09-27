import PropTypes from 'prop-types';
import { SavedData } from '../../Utility/localStorage';
import swal from 'sweetalert';
import { useState } from 'react';
const HomeCard = ({data}) => {
    const {name, image,male, female, color, name_male, name_female} = data || {}
    const [males, setMales] = useState(male)
    const [females, setFemales] = useState(female)
    const handleSubmit = e => {
        swal("Successful", `Successfully change ${name} population`, "success");
        e.preventDefault();
        setMales(e.target.male.value);
        setFemales(e.target.female.value);
        SavedData(name_male, males)
        SavedData(name_female, females)
    }
    return (
        <div className="card card-compact border-2">
        <figure className='h-40'><img src={image} alt={`image of ${name}`} className='h-full w-full'/></figure>
        <div className="card-body">
            <h2 className="card-title mx-auto"  style={{color: color}}>{name}</h2>
            <div className="flex flex-wrap justify-center items-center gap-5 font-medium text-base">
            <form onSubmit={handleSubmit} className='flex flex-col  items-center gap-2'>
                <label className='flex items-center gap-2'>Male: <input type="number" defaultValue={males} name="male" className="border p-1 outline-none rounded w-full py-0" />M</label>
                <label className='flex items-center gap-2'>Female: <input type="number" defaultValue={females} name="female" className="border p-1 outline-none rounded w-full py-0" /> M</label>
                <input type="submit" value="submit" className='btn btn-sm' style={{backgroundColor: color}}/>
            </form>
            </div>
        </div>
        </div>
    );
};

HomeCard.propTypes = {
    data: PropTypes.object,
};

export default HomeCard;