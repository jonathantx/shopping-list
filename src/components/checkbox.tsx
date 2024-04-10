import  { useState } from 'react';
import { Check } from 'lucide-react';
export function Checkbox () {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="flex items-center relative">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="appearance-none w-6 h-6 rounded-full border border-slate-800 checked:bg-green-600 checked:border-transparent focus:outline-none relative "
            />
            {isChecked && (
                <span className="absolute inset-0 flex items-center justify-center pr-[2px]">
                    <Check className="text-white size-5" />
                </span>
            )}
        </label>
    );
};
