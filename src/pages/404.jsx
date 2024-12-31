import React from "react";
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <i class="fa-solid fa-circle-exclamation text-secondary text-7xl"></i>
      <h1 className="text-primary">404</h1>
      <div className=" flex flex-col gap-2 p-2">
        <h2 className="text-primary">Oops! The page you are looking for does not exist.</h2>
        <h3 className="pl-4">Possible Reasons:</h3>
        <ul className="list-disc list-inside ml-8">
          <li>The page has been moved or deleted</li>
          <li>The URL address may have been typed incorrectly</li>
          <li>The page is temporarily unavailable</li>
        </ul>
        <Link className="ml-4" href="/">
          <button className="bg-secondary text-white px-4 py-2 rounded-lg mt-4">Back to home page</button>
        </Link>
      </div>
    </div>
  )
}