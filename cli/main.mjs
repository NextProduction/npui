#!/usr/bin/env node
// This line is a shebang, which tells the system to execute this file using Node.js.
// It ensures that the script can be run as an executable directly from the command line.

import fs from "fs"; // Importing the file system module to interact with the filesystem (e.g., create directories, write files).
import path from "path"; // Importing the path module to handle and transform file paths.
import fetch from "node-fetch"; // Importing node-fetch to make HTTP requests (used to fetch component files from GitHub).

// Base URL for raw content of your GitHub repository where the components are stored.
// This URL will be used to dynamically download the components.
const GITHUB_RAW_BASE_URL = 'https://raw.githubusercontent.com/NextProduction/npui/main/src/components';

// Asynchronous function to download the specified component.
async function downloadComponent(componentName) {
    // Construct the filename and the full URL to the raw component file on GitHub.
    const componentFile = `${componentName}.tsx`;
    const componentUrl = `${GITHUB_RAW_BASE_URL}/${componentName}/${componentFile}`;

    try {
        // Check if the 'npui' directory exists in the user's project.
        // If it doesn't exist, create it to store downloaded components.
        if (!fs.existsSync('npui')) {
            fs.mkdirSync('npui'); // Create 'npui' directory.
        }

        // Create a specific directory for the component inside the 'npui' folder (e.g., npui/Table).
        const componentPath = path.join('npui', componentName);
        if (!fs.existsSync(componentPath)) {
            fs.mkdirSync(componentPath); // Create the component's folder if it doesn't exist.
        }

        // Fetch the component file from GitHub using the constructed URL.
        const response = await fetch(componentUrl);
        if (!response.ok) {
            throw new Error(`Failed to download component: ${componentName}`); // Throw an error if the fetch request fails.
        }
        const componentCode = await response.text(); // Get the file content as plain text.

        // Write the fetched component file into the user's project under the correct path (e.g., npui/Table/Table.tsx).
        const filePath = path.join(componentPath, componentFile);
        fs.writeFileSync(filePath, componentCode); // Save the file locally.
        console.log(`Component ${componentName} downloaded successfully to ${filePath}`); // Log success message.

    } catch (error) {
        // Handle errors that occur during the process (e.g., failed download or file system issues).
        console.error(`Error: ${error.message}`);
    }
}

// Command-line arguments handler. 'process.argv' contains all arguments passed to the script.
// We slice the array to get the relevant arguments. The first argument should be 'add', and the second should be the component name.
const args = process.argv.slice(2);
if (args[0] === 'add' && args[1]) {
    const componentName = args[1]; // Extract the component name.
    downloadComponent(componentName); // Call the download function with the component name.
} else {
    // If the command is incorrect or no component name is provided, display usage instructions.
    console.log("Usage: npx npui add <ComponentName>");
}
