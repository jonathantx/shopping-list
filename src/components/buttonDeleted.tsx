import { Trash2 } from 'lucide-react';

interface ButtonDeletedProps {
    onDeletedItem: () => void;
}

export default function ButtonDeleted ({onDeletedItem}: ButtonDeletedProps) {

    return (
        <div className="bg-red-600 flex justify-center size-6 rounded-es-xl absolute top-0 right-0 p-1 opacity-50 hover:opacity-100 cursor-pointer">
            <button onClick={onDeletedItem}><Trash2 className="size-3.5 text-slate-100" /></button>
        </div>
    )
}