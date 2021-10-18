import React, { useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const New_transaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount: +amount
        }

        addTransaction(New_transaction);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Emter text... "/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                      Amount<br/>
                      (Negative - expense, Positive - income)  
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Emter amount... "/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
