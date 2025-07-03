#!/usr/bin/env node
// This line is a shebang, which tells the system to execute this file using Node.js.
// It ensures that the script can be run as an executable directly from the command line.

import fs from "fs"; // Importing the file system module to interact with the filesystem (e.g., create directories, write files).
import path from "path"; // Importing the path module to handle and transform file paths.
import fetch from "node-fetch"; // Importing node-fetch to make HTTP requests (used to fetch component files from GitHub).

// Base URL for raw content of your GitHub repository where the components are stored.
// This URL will be used to dynamically download the components.
const GITHUB_RAW_BASE_URL =
  "https://raw.githubusercontent.com/NextProduction/npui/main/src/components";

// Asynchronous function to download the specified component.
async function downloadComponent(componentName) {
  // Construct the filename and the full URL to the raw component file on GitHub.
  const componentFile = `${componentName}.tsx`;
  const componentUrl = `${GITHUB_RAW_BASE_URL}/${componentName}/${componentFile}`;

  try {
    // Check if the 'npui' directory exists in the user's project.
    // If it doesn't exist, create it to store downloaded components.
    if (!fs.existsSync("npui")) {
      fs.mkdirSync("npui"); // Create 'npui' directory.
    }

    // Create a specific directory for the component inside the 'npui' folder (e.g., npui/Table).
    const componentPath = path.join("npui", componentName);
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
    console.log(
      `Component ${componentName} downloaded successfully to ${filePath}`
    ); // Log success message.
  } catch (error) {
    // Handle errors that occur during the process (e.g., failed download or file system issues).
    console.error(`Error: ${error.message}`);
  }
}

// Function to remove the specified component.
function removeComponent(componentName) {
  const componentPath = path.join("npui", componentName);

  // Check if the component's directory exists.
  if (fs.existsSync(componentPath)) {
    fs.rmdirSync(componentPath, { recursive: true }); // Remove the component directory recursively.
    console.log(`Component ${componentName} removed successfully.`); // Log success message.
  } else {
    console.error(`Error: Component ${componentName} does not exist.`); // Log error if the component does not exist.
  }
}

// Function to list all downloaded components.
function listComponents() {
  const npuiPath = "npui";

  // Check if the npui directory exists.
  if (fs.existsSync(npuiPath)) {
    const components = fs.readdirSync(npuiPath); // Read the contents of the npui directory.
    if (components.length > 0) {
      console.log("Downloaded components:");
      components.forEach((component) => {
        console.log(`- ${component}`); // Print each component name.
      });
    } else {
      console.log("No components found in the npui directory.");
    }
  } else {
    console.log("The npui directory does not exist.");
  }
}

// Function to read version and name from package.json
function readPackageInfo() {
  const packageJsonPath = path.join(process.cwd(), "package.json"); // Get the path to package.json in the current directory

  try {
    const packageJson = fs.readFileSync(packageJsonPath, "utf-8"); // Read the package.json file
    const packageInfo = JSON.parse(packageJson); // Parse the JSON content

    return {
      name: packageInfo.name || "unknown",
      version: packageInfo.version || "unknown",
    };
  } catch (error) {
    console.error("Error reading package.json:", error.message);
    return {
      name: "unknown",
      version: "unknown",
    };
  }
}

// Function to show a helper for how to use npui cli
function helpCommand() {
  const help = `
Usage: npx npui <command> [options]

Commands:
  add <ComponentName>    Download and add the specified component to your project.
                          Example: npx npui add Table

  update <ComponentName> Update the specified component in your project to the latest version.
                          Example: npx npui update Table

  remove <ComponentName>  Remove the specified component from your project.
                          Example: npx npui remove Table

  list                   List all downloaded components in the 'npui' directory.
                          Example: npx npui list

  version                Show the current version of the npui tool.
                          Example: npx npui version

  help                   Display this help message with information about commands.
                          Example: npx npui help

For more information, visit the documentation at [nextproduction.dev/npui].
    `;
  console.log(help);
}

// Command-line arguments handler. 'process.argv' contains all arguments passed to the script.
// We slice the array to get the relevant arguments. The first argument indicates the command.
const args = process.argv.slice(2);
const command = args[0];
const componentName = args[1];

// Using switch-case for command handling.
switch (command) {
  case "add":
    if (componentName) {
      downloadComponent(componentName);
    } else {
      console.error("Error: Component name is required for the add command.");
    }
    break;

  case "update":
    if (componentName) {
      console.log(`Updating component ${componentName}...`);
      downloadComponent(componentName);
    } else {
      console.error(
        "Error: Component name is required for the update command."
      );
    }
    break;

  case "remove":
    if (componentName) {
      removeComponent(componentName);
    } else {
      console.error(
        "Error: Component name is required for the remove command."
      );
    }
    break;

  case "list":
    listComponents(); // List available components in the npui directory.
    break;

  case "version":
    const { name, version } = readPackageInfo(); // Read version and name from package.json
    console.log(`${name} version ${version}`); // Log the name and version
    break;

  case "help":
    helpCommand();
    break;

  default:
    console.log("~ Hint Run : npx npui help");
    break;
}
