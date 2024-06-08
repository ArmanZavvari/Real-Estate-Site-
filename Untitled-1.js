// // import { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { Button, TextField, Checkbox, MenuItem, Select } from "@mui/material";
// import { useAppDispatch } from "./hooks/useAppDispatch";
// import { useAppSelector } from "./hooks/useAppSelector";
// import { changeTest } from "./features/testSlice/testSlice";
// import { GET_QUESTIONNAIRE } from "./constants/url";
// import { QuestionType } from "./types/QuestionType";

// useEffect(() => {
//   fetch("https://api.example.com/data")
//     .then((questions) => questions.json())
//     .catch((error) => console.error("Error:", error));
// }, []);

// const questions = [
//   {
//     id: 1,
//     type: QuestionType.PhoneNumber,
//     question: "What is your phone number?",
//   },
//   {
//     id: 2,
//     type: QuestionType.SingleSelectDropDown,
//     question: "Select your country",
//     options: ["USA", "Canada", "Mexico"],
//   },
//   {
//     id: 3,
//     type: QuestionType.SimpleText,
//     question: "What is your name?",
//   },
//   {
//     id: 4,
//     type: QuestionType.Checkbox,
//     question: "Which of these fruits do you like?",
//     options: ["Apple", "Banana", "Orange"],
//   },
// ];

// function Questionnaire() {
//   const { control, handleSubmit, getValues } = useForm();
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const currentQuestion = questions[currentQuestionIndex];

//   const onNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const onPrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <h3>{currentQuestion.question}</h3>
//         {currentQuestion.type === QuestionType.PhoneNumber && (
//           <Controller
//             name={`question_${currentQuestion.id}`}
//             control={control}
//             defaultValue=""
//             render={({ field }) => <TextField {...field} type="tel" />}
//           />
//         )}
//         {currentQuestion.type === QuestionType.SingleSelectDropDown && (
//           <Controller
//             name={`question_${currentQuestion.id}`}
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <Select {...field}>
//                 {currentQuestion.options.map((option, index) => (
//                   <MenuItem key={index} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </Select>
//             )}
//           />
//         )}
//         {currentQuestion.type === QuestionType.SimpleText && (
//           <Controller
//             name={`question_${currentQuestion.id}`}
//             control={control}
//             defaultValue=""
//             render={({ field }) => <TextField {...field} />}
//           />
//         )}
//         {currentQuestion.type === QuestionType.Checkbox && (
//           <div>
//             {currentQuestion.options.map((option, index) => (
//               <Controller
//                 key={index}
//                 name={`question_${currentQuestion.id}_${option}`}
//                 control={control}
//                 render={({ field }) => (
//                   <div>
//                     <Checkbox {...field} />
//                     <label>{option}</label>
//                   </div>
//                 )}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       <div>
//         {currentQuestionIndex > 0 && (
//           <Button onClick={onPrevious}>Previous</Button>
//         )}
//         {currentQuestionIndex < questions.length - 1 && (
//           <Button onClick={onNext}>Next</Button>
//         )}
//         {currentQuestionIndex === questions.length - 1 && (
//           <Button type="submit">Submit</Button>
//         )}
//       </div>
//     </form>
//   );
// }

// function App() {
//   const dispatch = useAppDispatch();
//   const test = useAppSelector((state) => state.testSlice.test);

//   useEffect(() => {
//     fetch(GET_QUESTIONNAIRE)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           height: "100vh",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "3rem",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <p>موفق باشید</p>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <p>{test}</p>

//           <Button onClick={() => dispatch(changeTest("hi"))}>
//             click to change text!
//           </Button>
//         </div>
//         <Questionnaire />
//       </div>
//     </>
//   );
// }

// export default App;
