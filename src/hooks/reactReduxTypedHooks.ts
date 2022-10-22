import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { Dispatch, State } from "../store";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector; 