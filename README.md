# Task Manager Application

## 📚 Concepts Learned

### 🧩 Spring Boot (Backend)

- **@SpringBootApplication**: Main entry point for Spring Boot app (auto-configuration + component scan).
  
### MVC Architecture:
- **Model (@Entity)**: Represents database tables.
- **Controller (@RestController)**: Handles HTTP requests.
- **Service (@Service)**: Business logic layer, communicates between Controller and Repository.
- **Repository (@Repository)**: Direct database operations using Spring Data JPA.

### Dependency Injection:
- Using `@Autowired` to inject Service and Repository automatically.

### CRUD Operations:
- **Create**, **Read**, **Update**, **Delete** endpoints.

### Project Structure:
- **controller/
- **service/
- **repository/
- **model/
- **TaskManagerApplication.java

Database Connection:

- **H2 Database (in-memory) for quick testing.
- **application.properties for database and JPA settings.

⚛️ React / Next.js (Frontend)
- **useState Hook:
- **Storing dynamic data like task lists and form input.

Example:
- **const [tasks, setTasks] = useState<Task[]>([]);
- **useEffect Hook: Fetch tasks when the page loads.

Example:

useEffect(() => {
  fetchTasks();
}, []);

Axios:
- **Sending HTTP requests to backend (GET, POST, PUT, DELETE).

Components:

TaskItem Component to display each task separately.

TypeScript: Defining interfaces like:

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

Spread Operator (...):

- **Copying objects easily while adding or changing properties.

Example:

{ ...newTask, completed: false }

Await/Async:
- **Wait for API responses to finish before continuing.

Example:
- **await createTask({ ...newTask, completed: false });

TailwindCSS:
- **Quickly building beautiful UIs with utility classes.
- **Examples: bg-gray-100, text-center, rounded, shadow-xl.

📈 Application Flow

- **Frontend (Next.js) sends API requests to Backend (Spring Boot).
- **Controller accepts the request and calls Service.
- **Service calls Repository to interact with the Database.
- **Repository saves/fetches data and returns it back up the chain.
- **Frontend displays updated task list dynamically.

⚡ Commands for Running the App
Spring Boot (Backend)]

- **mvn spring-boot:run

Next.js Frontend

- **npm install
- **npm run dev
- **Open: http://localhost:3000

✅ Checklist of What I Learned
 Spring Boot Project Structure

 - **MVC Architecture
 - **Entity, Repository, Service, Controller layers
 - **Dependency Injection
 - **useState, useEffect hooks
 - **API Integration with Axios
 - **TypeScript Interfaces

 TailwindCSS Styling

 Connecting Frontend with Backend

 Full CRUD Operation End-to-End

