import React from "react"
import { Link } from "react-router-dom"



export function Navbar() {
    return <div className="p-4">
        <ul>
            <li>
                <Link to="/quizz/sql">Sql</Link>
            </li>
            <li>
                <Link to="/quizz/js">JS</Link>
            </li>
            <li>
                <Link to="/quizz/html">Html</Link>
            </li>
            <li>
                <Link to="/quizz/css">CSS</Link>
            </li>
            <li>
                <Link to="/quizz/bs5">Bootstrap 5</Link>
            </li>
            <li>
                <Link to="/quizz/java">Java</Link>
            </li>
        </ul>
    </div>
}