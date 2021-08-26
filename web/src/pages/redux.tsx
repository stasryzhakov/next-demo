import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { decrement, increment } from '../redux/counter';
import { MyButton } from '../../../library/button/Button';

export default function Redux() {
    const { value } = useSelector((state: any) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <MyButton
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </MyButton>
                <span>{value}</span>
                <MyButton
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </MyButton>
            </div>
        </div>
    )
}
