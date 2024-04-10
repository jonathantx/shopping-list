import { Checkbox } from "./checkbox"

interface ItensProps {
    item: {
        id: number
        content: string
        checked: boolean
    }
}

export function Item({item}: ItensProps) { 
    return (
        <div className="flex items-center justify-center p-1.5 border overflow-hidden border-slate-800 rounded-lg w-full hover:bg-slate-700 hover:border-slate-900 hover:cursor-pointer">
            <div className="w-7">
                <Checkbox />
            </div>
            <p className="text-slate-100 text-center font-medium text-lg flex-1">{item.content}</p>
        </div>
    )
}