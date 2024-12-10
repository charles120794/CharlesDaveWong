import React from "react";

export default function ErrorList(errorMessages = {}) {
    return (
        <ul className="list-disc list-inside">
            {Object.values(errorMessages).map((error, index) => (
                <li key={index} className="text-red-500">
                    {error}
                </li>
            ))}
        </ul>
    );
}
