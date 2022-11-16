import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./01-useState/counterApp";
import { CounterHook } from "./01-useState/CounterHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { UseForm } from "./02-useEffect/UseForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocursCreen } from "./04-useRef/FocursCreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Memorize } from "./06-memos/Memorize";
import { MemorizeHook } from "./06-memos/MemorizeHook";
import { Padre } from "./07-tarea-memo/Padre";
import { HooksApp } from "./HooksApp";
import "./index.css";
import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(<TodoApp />);
