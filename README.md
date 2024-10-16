# Hahn_TicketAppFront Setup Guide
# Setting Up an Angular Application
## Prerequisites
Before running the Angular application, ensure you have the following installed:

- **Node.js** (which includes npm)  
  Download and install from [Node.js official website](https://nodejs.org/).

- **Angular CLI**  
  Install the Angular CLI globally using npm:

  ```bash
  npm install -g @angular/cli
  ```

## Clone the Repository

1. Open your terminal or command prompt.

2. Navigate to the directory where you want to clone the repository.

3. Run the following command to clone the repository:

   ```bash
   
   ```

## Navigate to the Angular Project Directory

Change to the directory where the Angular application is located. This is typically within a folder like `Hahn_TicketApp`:

```bash
cd Hahn_TicketAppFront  # Replace with the actual folder name
```

## Install Dependencies

Run the following command to install the project dependencies defined in the `package.json` file:

```bash
npm install
```

## Update Environment Configuration

If your application has environment-specific configurations (like API URLs), navigate to the `src/environments` folder.

Update the `environment.ts` and `environment.prod.ts` files as necessary.

## Run the Application

Start the Angular development server using:

```bash
ng serve
```

By default, the application will run on `http://localhost:4200/`. You can specify a different port with the `--port` flag, if needed:

```bash
ng serve --port 4300  # For example, to run on port 4300
```

## Open the Application in Your Browser

Open your web browser and navigate to `http://localhost:4200/` (or the port you specified) to see your Angular application running.
