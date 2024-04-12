# Passwords Made Easy

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (version 12.x or above)
- npm (latest version)

You can check your node and npm versions with the following commands:

```
node -v
npm -v
```

## Installation

Follow these steps to install **Password Manager**:

### Clone the repository:
```
git clone https://github.com/ThierryGibbons/CS205-Password-Manager.git
```

### Backend

1. Navigate to the server directory:
    ```
    cd './Server'
    ```

2. Create a Python virtual environment for the Flask backend:
    ```
    python3 -m venv venv
    ```

3. Activate the virtual environment:
    ```
    .\venv\Scripts\activate #On Windows

    source venv/bin/activate #On macOS/Linux
    ```

4. Install Flask & dependencies within the virtual environment:
    ```
    pip install Flask Flask-SQLAlchemy Flask-CORS
    ```

### Website

1. Navigate to the website directory:
    ```
    cd './Passwords Made Easy'
    ```

2. Install dependencies with npm:
    ```
    npm install
    ```

## Running the Project

After installation, you can run the project locally:

### Backend

1. Navigate to the server directory:
    ```
    cd './Server'
    ```

2. Activate the virtual environment:
    ```
    .\venv\Scripts\activate #On Windows
    source venv/bin/activate #On macOS/Linux
    ```

3. Run the Flask server:
    ```
    flask run
    ```

### Frontend - Website
*Ensure the Flask server is running before starting the frontend.*

1. Navigate to the `Passwords Made Easy` directory:
    ```
    cd './Passwords Made Easy'
    ```

2. Run the development server:
    ```
    npm run dev
    ```

### Frontend - Extension
*Ensure the Flask server is running before starting the frontend.*

1. Navigate to the `Extension` directory:
    ```
    cd './Extension'
    ```

2. Run the development server:
    ```
    npm run dev
    ```
    *This command will start a local development server.*

## Building for Production

### Website

1. Within the `Passwords Made Easy` directory, run:
    ```
    npm run build
    ```
    *This will generate a `dist/` directory with your compiled project.*

2. Move this dist/ directory to the `Server` directory.

3. Within the `Server` directory, open the virtual environment and run:
    ```
    flask run
    ```

### Extension

1. Within the `Extension` directory, run:
    ```
    npm run build
    ```
    *This will generate a `dist/` directory with your compiled project.*

2. Load the extension into Chrome, navigate to `chrome://extensions/` and enable Developer Mode.

3. Click "Load unpacked" and select the `dist/` directory.

## Contributing

Commit Guidelines:
https://dev.to/ishanmakadia/git-commit-message-convention-that-you-can-follow-1709