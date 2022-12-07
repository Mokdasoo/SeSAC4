import React from 'react';
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import { RootState } from "../store/rootReducer";
import Diary from "./Diary";

export default function Date() {
  type diaryState = {
    id: number;
    date: string;
    title: string;
    content: string;
  }[];
  const { date } = useParams();
  const allDiaries :diaryState  = useSelector((state:RootState) => state.diaries);
  const diaries = allDiaries.filter((diary) => diary.date == date );

  return (
    <>
      <h2>{date}</h2>
      {diaries.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {diaries.map(diary => (
            <Diary diary={diary} key={diary.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
