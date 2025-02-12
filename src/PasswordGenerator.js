// import React, { useState } from "react";

// const PasswordGenerator = () => {
//   const [charactersLength, setCharactersLength] = useState(6);

//   const [upperCaseLetters, setUpperCaseLetters] = useState("");
//   const [lowerCaseLetters, setLowerCaseLetters] = useState("");
//   const [numbers, setNumbers] = useState("");
//   const [symbols, setSymbols] = useState("");

//   const [password, setPassword] = useState("");

//   const [passwordStrength, setPasswordStrength] = useState("");

//   const includesUpperCaseLetters = (e) => {
//     if (e) {
//       const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//       let charset = "";

//       for (let i = 0; i < charactersLength; i++) {
//         charset =
//           charset + characters[Math.floor(Math.random() * characters.length)];
//       }
//       setUpperCaseLetters(charset);
//     } else {
//       setUpperCaseLetters("");
//     }
//   };

//   const includesLowerCaseLetters = (e) => {
//     if (e) {
//       const characters = "abcdefghijklmnopqrstuvwxyz";
//       let charset = "";

//       for (let i = 0; i < charactersLength; i++) {
//         charset =
//           charset + characters[Math.floor(Math.random() * characters.length)];
//       }
//       setLowerCaseLetters(charset);
//     } else {
//       setLowerCaseLetters("");
//     }
//   };

//   const includesNumbers = (e) => {
//     if (e) {
//       const characters = "1234567890";
//       let charset = "";

//       for (let i = 0; i < charactersLength; i++) {
//         charset =
//           charset + characters[Math.floor(Math.random() * characters.length)];
//       }
//       setNumbers(charset);
//     } else {
//       setNumbers("");
//     }
//   };

//   const includesSymbols = (e) => {
//     if (e) {
//       const characters = "!@#$%&*+-";
//       let charset = "";

//       for (let i = 0; i < charactersLength; i++) {
//         charset =
//           charset + characters[Math.floor(Math.random() * characters.length)];
//       }
//       setSymbols(charset);
//     } else {
//       setSymbols("");
//     }
//   };

//   const generatePassword = () => {
//     const finalPassword =
//       upperCaseLetters + lowerCaseLetters + symbols + numbers;

//     let filteredPassword = "";

//     for (let i = 0; i < charactersLength; i++) {
//       filteredPassword =
//         filteredPassword +
//         finalPassword[Math.floor(Math.random() * finalPassword.length)];
//     }
//     setPassword(filteredPassword);
//     if (filteredPassword.length > 0 && filteredPassword.length <= 3) {
//       setPasswordStrength("Very Weak");
//     } else if (filteredPassword.length > 3 && filteredPassword.length <= 6) {
//       setPasswordStrength("Weak");
//     } else if (filteredPassword.length > 6 && filteredPassword.length <= 9) {
//       setPasswordStrength("Medium");
//     } else if (filteredPassword.length > 9 && filteredPassword.length <= 12) {
//       setPasswordStrength("Strong");
//     } else {
//       setPasswordStrength("Very Strong");
//     }
//   };

//   const [state, setState] = useState([
//     {
//       condition: "Includes Uppercase Letters",
//       checked: false,
//       function: includesUpperCaseLetters,
//     },
//     {
//       condition: "Includes Lowercase Letters",
//       checked: false,
//       function: includesLowerCaseLetters,
//     },
//     {
//       condition: "Includes Numbers",
//       checked: false,
//       function: includesNumbers,
//     },
//     {
//       condition: "Includes Symbols",
//       checked: false,
//       function: includesSymbols,
//     },
//   ]);

//   const toggleItem = (item1, e) => {
//     console.log(item1, e);

//     const details = state.map((item) => {
//       return item.condition == item1.condition
//         ? { ...item, checked: !item.checked }
//         : item;
//     });

//     for (let i = 0; i < details.length; i++) {
//       if (details[i].checked) {
//         details[i].function(e);
//       }
//     }

//     setState(details);
//   };

//   const handleCopy = ()=>{
//     navigator.clipboard.writeText(password)

//   }
//   return (
//     <div className="container">
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div>{password}</div>
//       { password && <button onClick={handleCopy}>Copy</button>}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           margin: "20px",
//         }}
//       >
//         <div>Character Length</div>
//         <div>{charactersLength}</div>
//       </div>
//       <div>
//         <input
//           type="range"
//           value={charactersLength}
//           min={4}
//           max={20}
//           onChange={(e) => setCharactersLength(e.target.value)}
//         />
//       </div>

//       {state?.map((item) => {
//         return (
//           <div>
//             {" "}
//             <input
//               type="checkbox"
//               onChange={(e) => toggleItem(item, e.target.checked)}
//               checked={item.checked}
//             />{" "}
//             <span>{item.condition}</span>
//           </div>
//         );
//       })}
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div>Password Strength</div>
//         <div>{passwordStrength}</div>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <button onClick={generatePassword}>Generate Password</button>
//       </div>
//     </div>
//   );
// };

// export default PasswordGenerator;

import React, { useState } from "react";
import HandlePasswordLogic from "./components/HandlePasswordLogic";

const PasswordGenerator = () => {
  const [charactersLength, setCharactersLength] = useState(6);
  const [upperCaseLetters, setUpperCaseLetters] = useState("");
  const [lowerCaseLetters, setLowerCaseLetters] = useState("");
  const [numbers, setNumbers] = useState("");
  const [symbols, setSymbols] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Password Generator</h1>
      <div className="container">
        <HandlePasswordLogic
          upperCaseLetters={upperCaseLetters}
          setUpperCaseLetters={setUpperCaseLetters}
          lowerCaseLetters={lowerCaseLetters}
          setLowerCaseLetters={setLowerCaseLetters}
          symbols={symbols}
          setSymbols={setSymbols}
          numbers={numbers}
          setNumbers={setNumbers}
          charactersLength={charactersLength}
          passwordStrength={passwordStrength}
          setPasswordStrength={setPasswordStrength}
          setPassword={setPassword}
          setCharactersLength={setCharactersLength}
          password={password}
        />
      </div>
    </>
  );
};

export default PasswordGenerator;
