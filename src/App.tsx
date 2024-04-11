import { KeyboardEvent, useState } from "react";
import { Item } from "./components/item";
import { Pencil } from 'lucide-react';
import carShopping from './assets/shopping.png'

interface Itens {
    id: number
    content: string
    checked: boolean
}

export default function App() {

    const [itens, setItem] = useState<Itens[]>(() => {
        const itensStorage = localStorage.getItem('itens');

        if(itensStorage)
            return JSON.parse(itensStorage);

        return []
    })

    const handleSetItem = (event: KeyboardEvent<HTMLInputElement>) => {

        if(event.key === 'Enter'){

            const newItem = {
                id: itens.length + 1,
                content: (event.target as HTMLInputElement).value,
                checked: false
            }

            const itemsArray = [newItem, ...itens]

            setItem(itemsArray);

            (event.target as HTMLInputElement).value = '';

            localStorage.setItem('itens', JSON.stringify(itemsArray));
        }
    }

    const handleItemCheck = (id: number, checked: boolean) => {

        const updateItens = itens.map(item => {

            if(item.id === id)
                return {...item, checked: checked}

            return item;
        })

        setItem(updateItens)

        localStorage.setItem('itens', JSON.stringify(updateItens));
    }

    const onItemDeleted = (id: number) => {

        const updateItens = itens.filter(item => item.id !== id)

        setItem(updateItens);

        localStorage.setItem('itens', JSON.stringify(updateItens));
    }

    return (
        <div className="max-w-xl mx-auto py-5 flex flex-col gap-5 items-center bg-slate-900 mt-11 rounded-lg">
            <div className="flex items-center gap-4 ">
                <img src={carShopping} alt="" width={48}/>
                <h1 className="text-3xl font-medium text-slate-200">Shopping List</h1>
            </div>
            <div className="text-slate-400 rounded-md px-2 border border-slate-800 flex items-center gap-1.5 font-medium"> 
                <Pencil className="size-4" />
                <input type="text" 
                    onKeyUp={handleSetItem}
                    className="w-80 h-10 outline-none focus:ring-0 bg-transparent" 
                    placeholder="Insira os itens..."/>
            </div>
            <div className="flex flex-col gap-2.5 items-center w-96 px-3 ">
                {itens.map(item => {
                    return (
                        <Item key={item.id} item={item} onItemCheck={(id, isChecked) => handleItemCheck(id, isChecked)} onDeletedItem={onItemDeleted} />
                    )
                })}
            </div>
        </div>  
    )
}