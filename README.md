# Gene Portfolio

A modern portfolio website built with React, Vite, and Tailwind CSS.

## Resume Data Management

This project includes a data-driven resume section that displays information stored in a YAML file. To update the resume information displayed in the application, follow these steps:

### Updating Resume Data

1. **Locate the `resume.yaml` file**:
   - The file is located in the `/public` directory: `public/resume.yaml`.

2. **Edit the YAML File**:
   - Open the `resume.yaml` file in a text editor.
   - Add or edit entries under the `experience`, `education`, `skills`, and `certifications` sections as needed.
   - Save the file.

Here's an example structure of the `resume.yaml`:

```yaml
experience:
  - position: "Senior Software Engineer"
    company: "TechCorp Solutions"
    duration: "Jan 2022 - Present"
    details: "Lead frontend development using React, TypeScript, and Tailwind CSS."

education:
  - degree: "Bachelor of Science in Computer Science"
    institution: "State University"
    duration: "2015 - 2019"

skills:
  - "JavaScript"
  - "React"
  - "Tailwind CSS"

certifications:
  - title: "AWS Certified Solutions Architect"
    issuer: "Amazon Web Services"
    year: "2023"
```

3. **Validate Your Changes** (Optional):
   - Run `npm run validate-resume` to check your YAML file for errors before testing.
   - This script will verify the structure and required fields.

4. **Run the Application**:
   - Ensure that your local development server is running with `npm run dev`.
   - Changes to the YAML file will be reflected automatically in the application.

### Troubleshooting

- **Fetching Errors**: Make sure the `resume.yaml` is correctly placed in the `/public` directory so it's accessible to the client-side application.
- **Invalid YAML**: Ensure that the YAML syntax is correct. Use online YAML validators or run `npm run validate-resume`.
- **Missing Fields**: The validation script will warn you about missing required fields like `position`, `company`, `duration` for experience entries.

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
