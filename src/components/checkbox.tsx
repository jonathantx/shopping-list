import { Check } from 'lucide-react';

interface CheckboxProps {
    isChecked: boolean
    onChange: (checked: boolean) => void; 
}
export function Checkbox ({isChecked, onChange}: CheckboxProps) {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        onChange(isChecked);
    };

    return (
        <label className="flex items-center relative">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="appearance-none w-6 h-6 rounded-full border border-slate-800 checked:bg-green-600 checked:border-transparent focus:outline-none relative cursor-pointer"
            />
            {isChecked && (
                <span className="absolute inset-0 flex items-center justify-center pr-[2px] cursor-pointer">
                    <Check className="text-white size-5" />
                </span>
            )}
        </label>
    );
};
