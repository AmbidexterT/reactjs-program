import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'store/store';

const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useStateSelector;
