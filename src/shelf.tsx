import {useSelector, useDispatch} from "react-redux";
import {addMoney, moneyValue} from "./moneyslice";
class Item {
    name: string;
    stock: number;
    price: number;
    constructor(name: string, stock: number, price: number) {
        this.name = name;
        this.stock = stock;
        this.price = price;
    }
}

let coke = new Item("Coke", 10, 15);
let lays = new Item("Lays", 10, 20);
let atk = new Item("ATK", 25, 49);

export default function Shelf() {

    const money = useSelector(moneyValue);
    const dispatch = useDispatch();
    return (
        <div>
            <p style={{textAlign:"left"}}>Shelf</p>
            <table>
                <tr>
                    <td>{coke.name}</td>
                    <td>{lays.name}</td>
                    <td>{atk.name}</td>
                </tr>
                <tr>
                    <td>Stock: {coke.stock}</td>
                    <td>Stock: {lays.stock}</td>
                    <td>Stock: {atk.stock}</td>
                </tr>
                <tr>
                    <td>Price: ฿ {coke.price}</td>
                    <td>Price: ฿ {lays.price}</td>
                    <td>Price: ฿ {atk.price}</td>
                </tr>
                <tr>
                    <td><button onClick={()=>{
                        if ((money >= coke.price) && (coke.stock > 0)) {
                            dispatch(addMoney(-coke.price));
                            coke.stock -= 1;
                        }
                    }}>buy</button></td>
                    <td><button onClick={()=>{
                        if ((money >= lays.price) && (lays.stock > 0)) {
                            dispatch(addMoney(-lays.price));
                            lays.stock -= 1;
                        }
                    }}>buy</button></td>
                    <td><button onClick={()=>{
                        if ((money >= atk.price) && (atk.stock > 0)) {
                            dispatch(addMoney(-atk.price));
                            atk.stock -= 1;
                        }
                    }}>buy</button></td>
                </tr>
            </table>
        </div>
    );
}


