import { useState } from "react";
import { InputInfo } from "./InputInfo";
import { CheckInputInfo } from "./CheckInputInfo";
import { ShowRecord } from "./ShowRecord";
import { Register } from "./Register";
import { ShowError } from "./ShowError";
import { ShowCumTime } from "./ShowCumTime";
import { createClient } from "@supbase/supbase-js";

export const LearningRecord = () => {
  const [inputText, setInputText] = useState("");
  const [inputTime, setInputTime] = useState(parseInt(""));
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const [cumTime, setCumTime] = useState(0);

  const supabase = createClient('https://supabase.com/dashboard/project/bllrsuubgohvodcithmw', 'publishable-or-anon-key')


  const onChangeText = (e) => {
    setInputText(e.target.value);
  }

  const onChangeTime = (e) => {
    setInputTime(parseInt(e.target.value));
  }

  const onRegister = () => {
    if (inputText === "" || inputTime <= 0 || isNaN(inputTime)) {
      setError("入力されていない項目があります");
      return;
    }

    const newRecords = [...records, { title: inputText, time: inputTime }];
    setRecords(newRecords);

    const newCumTime = newRecords.reduce((accumlator, record) => {
      return accumlator += record.time;
    }, 0);
    setInputText("");
    setInputTime(0);
    setError("");
    setCumTime(newCumTime);
  }

  return (
    <>
      <h1>学習記録一覧</h1>
      <InputInfo infoType="Text" inputValue={inputText} onChange={onChangeText} />
      <InputInfo infoType="Time" inputValue={inputTime} onChange={onChangeTime} />
      <CheckInputInfo infoType="Text" inputValue={inputText} />
      <CheckInputInfo infoType="Time" inputValue={inputTime} />

      <ShowRecord records={records} />

      <Register onClick={onRegister} />
      <ShowError error={error} />
      <ShowCumTime cumTime={cumTime} />
    </>
  );
};