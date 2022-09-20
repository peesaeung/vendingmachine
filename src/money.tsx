import {useSelector, useDispatch} from "react-redux";
import {addMoney, moneyValue} from "./moneyslice";

export default function Money() {
    const money = useSelector(moneyValue);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Insert Money</p>
            <p>Money: ฿{money}</p>
            <button onClick={() => {
                dispatch(addMoney(1))
            }}>฿1
            </button>
            <button onClick={() => {
                dispatch(addMoney(2))
            }}>฿2
            </button>
            <button onClick={() => {
                dispatch(addMoney(5))
            }}>฿5
            </button>
            <button onClick={() => {
                dispatch(addMoney(10))
            }}>฿10
            </button>
            <button onClick={() => {
                dispatch(addMoney(20))
            }}>฿20
            </button>
            <button onClick={() => {
                dispatch(addMoney(50))
            }}>฿50
            </button>
            <button onClick={() => {
                dispatch(addMoney(100))
            }}>฿100
            </button>
        </div>
    );
}

