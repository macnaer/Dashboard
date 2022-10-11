import { TypedUseSelectorHook,  useSelector } from 'react-redux'
import type { RootState } from '../../store/reducers'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector