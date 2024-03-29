import React from 'react';
import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store/rootReducer";
import { writeDate } from '../store/dateReducer';

export default function CreateDate() {
  type dateState = {
    id: number;
    date: string;
  }[];
  const dates:dateState = useSelector((state: RootState) => state.dates);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  function addDay() {
    if(inputRef.current){
      const data = {
        id: dates.length + 1,
        date: inputRef.current.value
      };
  
      dispatch(writeDate( data )); 
    }
    
  }
  return (
    <div>
      <h3>현재 일수 : {dates.length}일</h3>
      <input type="text" ref={inputRef} placeholder="0000-00-00"/>
      <button onClick={addDay}>날짜 추가</button>
    </div>
  );
}
