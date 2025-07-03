import { Command } from "commander"
import * as fs from "fs-extra"
import * as path from "path"
import chalk from "chalk"

const program = new Command()

program.name("npui").description("CLI for npui component library").version("0.0.1")

program
  .command("add <componentName>")
  .description("Add a npui component to your project. E.g., `npx @npui/cli add button`")
  .action(async (componentName: string) => {
    console.log(chalk.blue(`Attempting to add component: ${componentName}...`))

    // IMPORTANT: In a real published CLI, this path would likely fetch from a remote source (e.g., GitHub raw files)
    // or a pre-built package. For this  simulation, we assume the CLI is run from the monorepo root
    // for demonstration purposes, allowing it to access the local component files.
    const sourceComponentDir = path.join(process.cwd(), "components", "npui-components", componentName)
    const destComponentDir = path.join(process.cwd(), "src", "components", "ui", componentName) // Common destination in Next.js projects

    try {
      if (!(await fs.pathExists(sourceComponentDir))) {
        console.error(chalk.red(`Error: Component '${componentName}' not found at ${sourceComponentDir}`))
        console.error(
          chalk.red(
            "Please ensure the component name is correct. If running locally, ensure you are in the monorepo root.",
          ),
        )
        return
      }

      // Copy component's main file (e.g., button.tsx)
      const componentFileName = `${componentName}.tsx`
      const sourceComponentFile = path.join(sourceComponentDir, componentFileName)
      const destComponentFile = path.join(destComponentDir, componentFileName)

      // Ensure destination directory exists
      await fs.ensureDir(destComponentDir)

      // Copy the component file itself
      if (await fs.pathExists(sourceComponentFile)) {
        await fs.copy(sourceComponentFile, destComponentFile, { overwrite: true })
        console.log(chalk.green(`Copied ${componentFileName} to ${destComponentFile}`))
      } else {
        console.warn(
          chalk.yellow(`Warning: Main component file ${componentFileName} not found at ${sourceComponentFile}.`),
        )
      }

      // Optionally, copy data file if it exists (e.g., button-data.ts)
      const dataFileName = `${componentName}-data.ts`
      const sourceDataFile = path.join(sourceComponentDir, dataFileName)
      const destDataFile = path.join(destComponentDir, dataFileName) // You might want to put data files elsewhere in a user's project

      if (await fs.pathExists(sourceDataFile)) {
        await fs.copy(sourceDataFile, destDataFile, { overwrite: true })
        console.log(chalk.green(`Copied ${dataFileName} to ${destDataFile}`))
      }

      console.log(chalk.green(`\nSuccessfully added ${componentName} component.`))
      console.log(chalk.yellow('Remember to import it from "@/components/ui" in your project.'))
      console.log(chalk.cyan("For full documentation, visit: https://github.com/NextProduction/npui" + componentName)) // Conceptual URL
    } catch (error) {
      console.error(chalk.red(`Failed to add component ${componentName}:`), error)
    }
  })

program
  .command("init")
  .description("Initialize your project to use npui (e.g., configure Tailwind CSS, add global styles).")
  .action(() => {
    console.log(chalk.blue("Initializing npui project setup..."))
    console.log(chalk.yellow("This command would typically:"))
    console.log(chalk.yellow("  - Update your `tailwind.config.ts` with npui presets/colors."))
    console.log(chalk.yellow("  - Add necessary CSS variables to your `app/globals.css`."))
    console.log(chalk.yellow("  - Create a `components/ui` directory if it doesn't exist."))
    console.log(chalk.green("Project initialization complete (conceptual)."))
    console.log(chalk.cyan("Please refer to the npui documentation for manual setup steps."))
  })

program.parse(process.argv)

// If no command is provided, show help
if (!process.argv.slice(2).length) {
  program.outputHelp()
}
