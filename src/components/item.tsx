import { Checkbox } from "./checkbox"
import ButtonDeleted from "./buttonDeleted"

interface ItensProps {
    item: {
        id: number
        content: string
        checked: boolean
    }
    onItemCheck: (id: number, checked: boolean) => void;
    onDeletedItem: (id: number) => void;
}

export function Item({item, onItemCheck, onDeletedItem}: ItensProps) { 

    const handleCheckboxChange = () => {
        onItemCheck(item.id, !item.checked);
    }

    const handleDeletedItem = () => {
        onDeletedItem(item.id);
    }

    return (
        <div className="relative flex items-center justify-center p-1.5 border overflow-hidden border-slate-800 rounded-lg w-full hover:bg-slate-700 hover:border-slate-900 ">
            <div className="w-7">
                <Checkbox isChecked={item.checked} onChange={handleCheckboxChange} />
            </div>
            <p className="text-slate-100 text-center font-medium text-lg flex-1">{item.content}</p>
            <ButtonDeleted onDeletedItem={handleDeletedItem}/>
        </div>
    )
}