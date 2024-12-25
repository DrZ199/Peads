# NelsonBot - Pediatric Knowledge Assistant

## Objective
Create a mobile-first Progressive Web App (PWA) chatbot that provides accurate, evidence-based pediatric information sourced exclusively from the Nelson Textbook of Pediatrics.

## Key Features
1. **Mobile-First Chatbot Interface**: Responsive layout using Bootstrap, persistent chat history, and scrollable chat interface.
2. **PWA Functionality**: Service worker for offline support and manifest.json for app installation on mobile devices.
3. **AI-Powered Chat**: Integration with Hugging Face’s Inference API for processing user interactions with suitable references and citations.
4. **REST API Endpoints**: 
   - `/api/chat` (POST): Send user messages and receive responses.
   - `/api/citations` (GET): Fetch citations relevant to the chatbot responses.
   - `/api/logs` (GET): Retrieve user-specific chat logs.

## Technical Specifications
- **Framework**: Angular
- **Styling**: Bootstrap
- **Backend**: Node.js with Express
- **AI Processing**: Hugging Face Inference API

## Development Steps
1. **Set Up Angular Project**: 
   - Generate a new Angular application using Angular CLI.
   - Install necessary packages: Bootstrap, Angular PWA support.
2. **Create Components**: Build the chat component and set up necessary services for REST API communication.
3. **Implement Service Worker**: Configure for offline capability and caching.
4. **Develop REST API**: Set up Express server with endpoints for chat processing, citations, and logs.
5. **Testing and Validation**: Ensure chatbot accuracy and test responsiveness.
6. **Deployment**: Deploy to a hosting service like Firebase Hosting or Heroku.

## Installation Instructions
1. Clone the repository:
   