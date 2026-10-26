let candidateProfile = {name:"",skills:[],projects:[],technologies:[],experience:[],resumeText:""};
let history = [];
let currentUser = null;
let authMode = "signup";
let settings = {type:"Technical", difficulty:"Easy", count:5};
let state = {questions:[], index:0, answers:[], skipped:0};

const questionBank = {
Technical:{
Easy:[
["What is Python?","A good answer should define Python and mention its main characteristics and common uses.","Python is a high-level, interpreted programming language known for its readable syntax. It supports multiple programming paradigms and is widely used for automation, web development, data analysis, machine learning and AI.","Python is a high-level, interpreted language known for simple, readable syntax. It is widely used for automation, web development, data analysis, machine learning and AI.","definition,interpreted,readable,uses"],
["What is a variable in programming?","Explain that a variable stores or refers to a value and can change during program execution.","A variable is a named reference used to store a value in a program. The value can be changed during execution, depending on the language and how the variable is defined.","A variable is a named place or reference used to hold a value. The value can change while the program runs.","value,store,named,change"],
["What is a database?","Define a database and explain why applications use it.","A database is an organized collection of data that can be stored, retrieved, updated and managed efficiently. Applications use databases to persist and query information.","A database is an organized collection of data. Applications use databases to store, retrieve, update and manage information efficiently.","data,store,retrieve,manage"],
["What is SQL?","Mention that SQL is used to work with relational databases and give examples of operations.","SQL is a language used to interact with relational databases. It is commonly used to create, read, update and delete data and to define and query database structures.","SQL is used to communicate with relational databases. I can use it to query, insert, update and delete data and work with database structures.","relational,query,select,insert,update,delete"],
["What is an API?","Explain communication between software components and give a simple example.","An API is an interface that allows one software component to communicate with another through defined rules. For example, a web application can call a REST API to request user or product data.","An API is a defined way for two software components to communicate. For example, a frontend can call a REST API to get data from a backend.","interface,communication,rules,rest,data"]
],
Medium:[
["What is the difference between a list and a tuple in Python?","Compare mutability and typical use cases.","A list is mutable, so its elements can be changed after creation. A tuple is immutable, so it cannot normally be modified after creation. Lists are useful for changing collections, while tuples are useful for fixed collections.","A list is mutable, while a tuple is immutable. I use lists when the collection may change and tuples when I want a fixed collection of values.","mutable,immutable,change,fixed"],
["What is normalization in databases?","Explain reducing redundancy and improving data integrity.","Normalization is the process of organizing relational database tables to reduce unnecessary data redundancy and improve consistency. It commonly uses normal forms such as 1NF, 2NF and 3NF.","Normalization organizes database tables to reduce duplicate data and improve consistency and data integrity. Common normal forms include 1NF, 2NF and 3NF.","redundancy,consistency,1nf,2nf,3nf"],
["What is OOP?","Mention objects, classes and core principles.","Object-oriented programming organizes software around objects and classes. Important principles include encapsulation, inheritance, polymorphism and abstraction.","OOP is a programming approach based on classes and objects. Its main principles are encapsulation, inheritance, polymorphism and abstraction.","object,class,encapsulation,inheritance,polymorphism,abstraction"],
["What is a primary key?","Explain uniqueness and identifying records.","A primary key is a column or set of columns that uniquely identifies each row in a relational table. It should provide unique identification and normally cannot contain NULL values.","A primary key uniquely identifies each row in a table. It is used to make records uniquely identifiable and normally cannot be NULL.","unique,identify,row,table,null"],
["What is Git used for?","Explain version control and collaboration.","Git is a distributed version control system used to track code changes, create branches, collaborate with others and maintain different versions of a project.","Git is a version control system. I use it to track changes, create branches, collaborate and safely manage project versions.","version,control,changes,branch,collaboration"]
],
Hard:[
["Explain time complexity and Big O notation.","Explain how algorithm growth is measured and give examples.","Time complexity describes how an algorithm's running time grows as input size increases. Big O notation expresses the growth rate, such as O(1), O(log n), O(n), O(n log n) or O(n²).","Time complexity describes how the work done by an algorithm grows with input size. Big O expresses that growth, for example O(1), O(log n), O(n) and O(n²).","time,growth,input,big o,on,algorithm"],
["What is a database index and what is its trade-off?","Mention faster reads but additional storage and write cost.","A database index is a data structure that helps the database find rows faster without scanning the entire table. Indexes can improve read performance but require storage and can make inserts, updates and deletes more expensive.","An index helps a database locate rows faster. The trade-off is extra storage and additional work when indexed data is inserted or updated.","index,search,read,storage,insert,update"],
["Explain REST API principles.","Mention resources, HTTP methods and stateless requests.","A REST API exposes resources through URLs and commonly uses HTTP methods such as GET, POST, PUT or PATCH and DELETE. REST communication is typically stateless, meaning each request contains the information needed to process it.","A REST API exposes resources and uses HTTP methods such as GET, POST, PUT or DELETE. Requests are generally stateless, so each request contains the information needed to process it.","resource,http,get,post,put,delete,stateless"],
["What is exception handling in Python?","Explain try, except and optionally else/finally.","Exception handling lets a program respond to runtime errors without crashing unexpectedly. Python commonly uses try and except, with else for successful execution and finally for cleanup.","Exception handling allows a program to handle runtime errors safely. In Python I commonly use try and except, and finally when cleanup must happen.","try,except,error,finally,cleanup"],
["What is the difference between authentication and authorization?","Authentication verifies identity; authorization checks permissions.","Authentication verifies who a user is, while authorization determines what that authenticated user is allowed to access or do.","Authentication answers 'Who are you?' and authorization answers 'What are you allowed to do?'.","authentication,identity,authorization,permission,access"]
]},
Behavioral:{
Easy:[
["Tell me about yourself.","Give a short professional introduction covering education, skills, projects and career direction.","I am a recent engineering graduate with an interest in software development. I have worked on projects involving Python, databases and AI, and I am currently strengthening my coding and interview skills. I am looking for an entry-level role where I can learn and contribute.","I am a recent engineering graduate interested in software development. I have built projects using Python, databases and AI, and I am now focused on improving my coding skills and starting my career in a software role.","graduate,skills,projects,career"],
["What are your strengths?","Choose 2–3 strengths and support them with evidence.","My strengths are willingness to learn, persistence and practical problem solving. When I face a technical issue, I try to understand the cause, test possible solutions and learn from the result.","My strengths are willingness to learn, persistence and problem solving. I try to understand the root cause of a problem, test solutions and improve from the experience.","strengths,example,problem,learn"],
["What is one weakness you are working on?","Give a genuine but manageable weakness and explain the improvement plan.","One area I am improving is confidence while explaining technical topics. I am working on it by practicing answers aloud, doing mock interviews and explaining my projects clearly.","One weakness I am actively improving is confidence while speaking about technical topics. I practice speaking answers aloud and explaining my projects regularly.","weakness,improve,practice,confidence"]
],
Medium:[
["Tell me about a time you faced a difficult problem.","Use Situation, Task, Action and Result.","In a project, I faced a technical issue that prevented a feature from working correctly. I first reproduced the problem, checked the error and isolated the likely cause. I tested a few fixes and verified the final solution. This taught me to debug systematically rather than changing many things at once.","I faced a technical issue in a project. I reproduced it, identified the cause, tested a solution and verified the result. The experience taught me to debug systematically.","situation,task,action,result,problem,solution"],
["How do you handle criticism?","Show that you listen, separate the feedback from emotion and improve.","I try to treat constructive criticism as information that can help me improve. I listen carefully, ask questions if the feedback is unclear, and then apply the useful points to my work.","I listen to criticism carefully, understand what I can improve, and apply the useful feedback rather than taking it personally.","feedback,listen,improve,apply"]
],
Hard:[
["Describe a failure and what you learned.","Be honest and focus on ownership, learning and changed behavior.","A project task did not go as planned because I underestimated the time needed for testing. I took responsibility, broke the remaining work into smaller tasks and added testing earlier. The main lesson was to plan for validation instead of considering the feature finished immediately after implementation.","I once underestimated testing time on a project. I took responsibility, reorganized the work and started testing earlier. It taught me to include validation in the plan from the beginning.","failure,responsibility,testing,lesson,improve"]
]},
HR:{
Easy:[
["Why should we hire you?","Connect your skills, learning attitude and ability to contribute as a fresher.","As a fresher, I may not have extensive industry experience, but I bring a strong willingness to learn, practical project experience and a disciplined approach to solving problems. I can learn the team's processes quickly and contribute consistently.","You should hire me because I am willing to learn, have practical project experience and take responsibility for improving my skills. I can learn quickly and contribute consistently.","fresher,learn,project,contribute"],
["Why do you want this job?","Connect the role to your skills and growth.","I want this role because it matches my interest in software development and gives me an opportunity to apply my programming and problem-solving skills in a professional environment while learning from experienced teammates.","I want this role because it matches my interest in software development and will let me apply my skills while learning from an experienced team.","role,skills,learn,development"],
["Where do you see yourself in five years?","Give a realistic growth-focused answer.","In five years, I want to be a dependable software professional with strong technical skills, experience delivering production-quality work and the ability to take ownership of meaningful features and projects.","In five years I want to be a strong software professional who can independently handle features, solve technical problems and contribute to important projects.","skills,experience,ownership,growth"]
],
Medium:[
["Why did you choose software development?","Connect interest, problem solving and continuous learning.","I like software development because it combines problem solving with continuous learning. I enjoy turning an idea into something useful, debugging problems and improving a solution over time.","I chose software development because I enjoy problem solving, building useful things and continuously learning new technologies.","problem,build,learn,technology"],
["How do you prioritize multiple tasks?","Mention impact, urgency, dependencies and progress.","I first identify deadlines, business impact and dependencies. I handle urgent high-impact work first, break larger tasks into smaller steps and communicate early if priorities conflict.","I prioritize based on urgency, impact and dependencies. I break large tasks into smaller steps and communicate when priorities conflict.","priority,urgency,impact,deadline,dependencies"]
],
Hard:[
["What would you do if you disagreed with your manager?","Show respectful communication and evidence-based discussion.","I would first make sure I understand the manager's reasoning. If I still had a concern, I would explain it respectfully with evidence, risks and an alternative if I have one. Once a decision is made, I would support the agreed direction unless there is a serious issue that needs escalation.","I would understand the reasoning first, then respectfully explain my concern with evidence and an alternative. After a decision, I would support the agreed approach.","understand,respect,evidence,alternative,decision"]
]},
Projects:{
Easy:[
["Explain one project you have worked on.","Use problem, solution, technology and result.","I worked on a project that solved a practical problem using software. I first identified the problem, designed the main workflow, implemented the required features and tested the result. I chose the technologies based on the project requirements and learned from the issues I encountered during development.","I worked on a practical software project. I explain it by covering the problem, my solution, the technologies I used, the main features and what I learned.","problem,solution,technology,features,result"],
["What was your role in the project?","Clearly separate your own contribution from team work.","My responsibility was to design and implement the features assigned to me, debug issues, test the workflow and improve the project based on the results. I can explain the specific decisions I made and why I made them.","My role was to implement features, debug problems, test the workflow and improve the project. I can explain the technical decisions I personally made.","role,implement,debug,test,decisions"]
],
Medium:[
["Why did you choose the technologies used in your project?","Explain choices based on requirements rather than saying they were popular.","I selected technologies based on the project's requirements, development speed, available libraries and ease of integration. For example, I would choose Python when rapid development and data or AI libraries are important, and a database based on the application's data model.","I chose technologies based on the requirements, available libraries, development speed and integration needs rather than simply choosing popular tools.","requirements,libraries,integration,development"],
["What was the biggest technical challenge in your project?","Explain the problem, debugging process and final solution.","The biggest challenge was getting different parts of the application to work together reliably. I reproduced the issue, checked logs and inputs, isolated the failing component, tested fixes and then verified the complete workflow.","The biggest challenge was integrating components reliably. I reproduced the issue, isolated the failing part, tested fixes and verified the full workflow.","challenge,debugging,logs,isolate,test,solution"]
],
Hard:[
["How would you improve your project if you had more time?","Mention scalability, security, testing, UX or maintainability based on the project.","I would improve the project by adding stronger validation, automated tests, better error handling, security controls and a cleaner architecture. I would also measure performance and user experience before deciding which improvements have the highest impact.","With more time I would improve testing, validation, error handling, security and architecture, then use performance and user feedback to prioritize further changes.","testing,validation,error,security,architecture,performance"]
]}
};

function save(){
 localStorage.setItem("it_candidate",JSON.stringify(candidateProfile));
 localStorage.setItem("it_history",JSON.stringify(history));
 saveProfileToFirebase();
}

async function saveProfileToFirebase(){
 const f=window.InterviewTwinFirebase;
 if(!f || !f.isConfigured || !currentUser) return;
 try{
  await f.setDoc(f.doc(f.db,"users",currentUser.uid),{
   name:candidateProfile.name||currentUser.displayName||"",
   email:currentUser.email||"",
   skills:candidateProfile.skills||[],
   projects:candidateProfile.projects||[],
   technologies:candidateProfile.technologies||[],
   experience:candidateProfile.experience||[],
   resumeText:candidateProfile.resumeText||"",
   updatedAt:f.serverTimestamp()
  },{merge:true});
 }catch(err){console.error("Could not save profile:",err);}
}

async function saveInterviewToFirebase(record){
 const f=window.InterviewTwinFirebase;
 if(!f || !f.isConfigured || !currentUser) return;
 try{
  await f.addDoc(f.collection(f.db,"users",currentUser.uid,"interviews"),record);
 }catch(err){console.error("Could not save interview:",err);}
}

async function loadFirebaseData(user){
 const f=window.InterviewTwinFirebase;
 if(!f || !f.isConfigured || !user) return;
 try{
  const profileSnap=await f.getDoc(f.doc(f.db,"users",user.uid));
  if(profileSnap.exists()){
   const data=profileSnap.data();
   candidateProfile={name:data.name||user.displayName||"",skills:data.skills||[],projects:data.projects||[],technologies:data.technologies||[],experience:data.experience||[],resumeText:data.resumeText||""};
  }else{
   candidateProfile={name:user.displayName||"",skills:[],projects:[],technologies:[],experience:[],resumeText:""};
   await saveProfileToFirebase();
  }
  const snap=await f.getDocs(f.collection(f.db,"users",user.uid,"interviews"));
  history=snap.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>new Date(b.date)-new Date(a.date));
  localStorage.setItem("it_candidate",JSON.stringify(candidateProfile));
  localStorage.setItem("it_history",JSON.stringify(history));
 }catch(err){
  console.error("Could not load Firebase data:",err);
  showAuthError("Could not load your account data. Check your Firestore rules and Firebase setup.");
 }
 updateAccountUI();
 updateDashboard();
}
function esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}

function showAuthError(message){
 const el=document.getElementById("authError");
 if(!el) return;
 el.textContent=message;
 el.classList.remove("hidden");
}
function clearAuthError(){const el=document.getElementById("authError");if(el){el.textContent="";el.classList.add("hidden");}}
function updateAccountUI(){
 const name=document.getElementById("accountName"),email=document.getElementById("accountEmail");
 if(name) name.textContent=currentUser?.displayName || candidateProfile.name || "Account";
 if(email) email.textContent=currentUser?.email || "—";
}
function setAuthMode(mode){
 authMode=mode;
 const signup=mode==="signup";
 document.getElementById("authTitle").textContent=signup?"Create your account":"Welcome back";
 document.getElementById("authSubtitle").textContent=signup?"Save your interviews, resume analysis and progress securely.":"Log in to continue your interview practice.";
 document.getElementById("authSubmit").textContent=signup?"Create Account":"Log In";
 document.getElementById("authToggle").textContent=signup?"Already have an account? Log in":"New here? Create an account";
 document.getElementById("authNameLabel").style.display=signup?"block":"none";
 document.getElementById("authName").style.display=signup?"block":"none";
 clearAuthError();
}
async function submitAuth(){
 clearAuthError();
 const f=window.InterviewTwinFirebase;
 if(!f?.isConfigured){showAuthError("Firebase is not connected yet. Open firebase-init.js and paste your Firebase web configuration.");return;}
 const email=document.getElementById("authEmail").value.trim();
 const password=document.getElementById("authPassword").value;
 const name=document.getElementById("authName").value.trim();
 if(!email||!password||(authMode==="signup"&&!name)){showAuthError("Please fill in all required fields.");return;}
 if(password.length<6){showAuthError("Password must be at least 6 characters.");return;}
 const btn=document.getElementById("authSubmit");btn.disabled=true;btn.textContent="Please wait...";
 try{
  let result;
  if(authMode==="signup"){
   result=await f.createUserWithEmailAndPassword(f.auth,email,password);
   await f.updateProfile(result.user,{displayName:name});
  }else{
   result=await f.signInWithEmailAndPassword(f.auth,email,password);
  }
 }catch(err){
  const messages={"auth/email-already-in-use":"An account with this email already exists. Log in instead.","auth/invalid-credential":"Email or password is incorrect.","auth/invalid-email":"Please enter a valid email address.","auth/weak-password":"Password should be at least 6 characters."};
  showAuthError(messages[err.code]||err.message||"Authentication failed.");
 }finally{btn.disabled=false;btn.textContent=authMode==="signup"?"Create Account":"Log In";}
}
function initFirebaseAuth(){
 const f=window.InterviewTwinFirebase;
 if(!f) return;
 document.getElementById("authSubmit").onclick=submitAuth;
 document.getElementById("authToggle").onclick=()=>setAuthMode(authMode==="signup"?"login":"signup");
 document.getElementById("logoutBtn").onclick=async()=>{if(currentUser) await f.signOut(f.auth);};
 setAuthMode("signup");
 if(!f.isConfigured){showAuthError("Firebase is not connected. Paste your Firebase config into firebase-init.js.");return;}
 f.onAuthStateChanged(f.auth,async user=>{
  currentUser=user;
  const authScreen=document.getElementById("authScreen"),app=document.getElementById("appShell");
  if(user){
   authScreen.style.display="none";app.style.display="flex";
   updateAccountUI();
   await loadFirebaseData(user);
  }else{
   authScreen.style.display="grid";app.style.display="none";
   history=[];candidateProfile={name:"",skills:[],projects:[],technologies:[],experience:[],resumeText:""};
  }
 });
}
window.addEventListener("firebase-ready",initFirebaseAuth);
if(window.InterviewTwinFirebase) initFirebaseAuth();

function showPage(id){
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
 const page=document.getElementById(id); if(page) page.classList.add("active");
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
 if(id==="dashboard") updateDashboard();
 if(id==="history") renderHistory();
 if(id==="progress") renderProgress();
}

// Topic-based question generator. Uses curated topic patterns and a safe generic fallback.
const topicQuestionTemplates = {
  python: [
    ['What is {topic}, and where is it commonly used?','Define the concept, explain its purpose, and give one practical example.'],
    ['Explain the most important features of {topic}.','Choose two or three features and explain why they matter.'],
    ['What is the difference between the main concepts related to {topic}?','Compare the concepts by purpose, behavior, and use case.'],
    ['Write or describe a small example using {topic}.','Explain the steps and what the example produces.'],
    ['What common mistakes do developers make when using {topic}?','Mention a mistake, why it happens, and how to avoid it.'],
    ['How would you debug a problem involving {topic}?','Describe how you reproduce the issue, inspect evidence, and test a fix.'],
    ['Describe a real project feature where you could use {topic}.','Connect the topic to a requirement, implementation, and outcome.'],
    ['What are the limitations or trade-offs of {topic}?','Discuss performance, readability, complexity, or maintainability where relevant.'],
    ['How would you test a solution that uses {topic}?','Include normal cases, edge cases, and invalid inputs.'],
    ['How does {topic} work with other parts of an application?','Explain dependencies, data flow, and integration concerns.']
  ],
  sql: [
    ['What is {topic}, and why is it used in databases?','Define it and give a practical database example.'],
    ['Explain the difference between WHERE and HAVING in {topic}.','Explain when filtering happens and include a grouped-query example.'],
    ['How would you use joins in {topic}?','Describe INNER, LEFT, and other relevant joins with related tables.'],
    ['Write a query using {topic} to retrieve or summarize data.','State the table assumptions, query logic, and expected result.'],
    ['How do NULL values affect operations in {topic}?','Explain NULL comparisons and safe handling.'],
    ['How would you find and fix a slow query involving {topic}?','Discuss execution plans, indexes, filtering, and measuring performance.'],
    ['What is the difference between a primary key and a foreign key?','Explain uniqueness, relationships, and referential integrity.'],
    ['How would you remove duplicate records using {topic}?','Describe a safe approach and how you would verify the rows affected.'],
    ['Explain transactions and ACID properties in relation to {topic}.','Cover atomicity, consistency, isolation, and durability.'],
    ['How would you design tables for a small real-world application using {topic}?','Identify entities, relationships, keys, and normalization choices.']
  ],
  mongodb: [
    ['What is {topic}, and when would you choose it?','Explain its data model and an appropriate use case.'],
    ['How are documents and collections organized in {topic}?','Compare them with rows and tables if useful.'],
    ['How would you query, filter, and sort data in {topic}?','Describe a query and the expected output.'],
    ['What is an aggregation pipeline in {topic}?','Explain stages such as match, group, project, and sort.'],
    ['How do indexes improve performance in {topic}?','Explain read benefits and write/storage trade-offs.'],
    ['When would you embed documents versus reference other documents?','Discuss access patterns, duplication, and update consistency.'],
    ['How would you update a nested field safely in {topic}?','Explain the update operation and how to verify the result.'],
    ['How would you troubleshoot a slow query in {topic}?','Mention explain plans, indexes, and query shape.'],
    ['How do replication and sharding differ in {topic}?','Explain availability versus horizontal data distribution.'],
    ['How would you secure and validate data in {topic}?','Cover authentication, permissions, validation, and safe input handling.']
  ],
  javascript: [
    ['What is {topic}, and where is it useful?','Define it and give a browser or application example.'],
    ['Explain scope and closures in JavaScript.','Describe lexical scope and a practical closure example.'],
    ['How do promises and async/await work?','Explain asynchronous flow and error handling.'],
    ['What is the difference between let, const, and var?','Discuss scope, reassignment, and hoisting at a high level.'],
    ['How would you handle errors in code involving {topic}?','Cover validation, try/catch where appropriate, and useful messages.'],
    ['How would you debug a browser issue involving {topic}?','Use the console, breakpoints, network panel, and a minimal reproduction.'],
    ['How would you test a function that uses {topic}?','Cover expected values, edge cases, and failure cases.'],
    ['What performance or security issues should you consider with {topic}?','Discuss the relevant risks and mitigations.'],
    ['How does {topic} interact with APIs or asynchronous data?','Explain request flow, loading states, and failed requests.'],
    ['Describe how you would use {topic} in a maintainable project.','Mention separation of concerns, naming, reusable code, and tests.']
  ]
};
const roleInterviewBank = {
  'software developer': [
    ['What is the software development life cycle (SDLC)?','SDLC is the structured process of planning, designing, building, testing, deploying, and maintaining software. Common models include Agile and Waterfall.'],
    ['What is the difference between a bug, an error, and a failure?','An error is a human mistake, a bug or defect is a flaw in code or design, and a failure is when the running system does not behave as expected.'],
    ['What is version control, and why is Git useful?','Version control records changes to files so developers can collaborate, review history, branch safely, and revert unwanted changes. Git is a widely used distributed version-control system.'],
    ['What is an API?','An API is a defined way for software components to communicate. For example, a frontend can call a backend API to retrieve user details.'],
    ['How do you debug a problem in an application?','Reproduce the issue, read the error and logs, isolate the failing part, inspect variables or requests, make a small fix, and run regression tests.'],
    ['What is the difference between unit testing and integration testing?','Unit tests check a small component in isolation; integration tests check whether multiple components work together correctly.'],
    ['Why are clean code and code reviews important?','Readable, consistent code is easier to maintain. Code reviews help catch defects, improve design, share knowledge, and maintain team standards.'],
    ['What would you do if a feature worked locally but failed after deployment?','Check environment variables, configuration, build output, permissions, network requests, logs, and differences between local and production environments.']
  ],
  'web developer': [
    ['What is the difference between frontend and backend development?','Frontend is the user-facing interface that runs in the browser. Backend handles server-side logic, data access, authentication, and APIs.'],
    ['What are HTML, CSS, and JavaScript used for?','HTML structures content, CSS controls presentation and layout, and JavaScript adds behavior and interactivity.'],
    ['What is responsive web design?','Responsive design adapts layout and content to different screen sizes using flexible layouts, relative units, media queries, and responsive images.'],
    ['What is the difference between GET and POST?','GET requests retrieve data and should not change server state. POST sends data to create a resource or trigger processing. Both must still be secured appropriately.'],
    ['What is the DOM?','The Document Object Model represents a webpage as a tree of objects that JavaScript can read and update.'],
    ['How do you make a website accessible?','Use semantic HTML, labels for form controls, keyboard navigation, visible focus, adequate contrast, descriptive alternative text, and meaningful headings.'],
    ['How would you improve a slow website?','Measure first, then optimize image sizes, reduce unnecessary JavaScript and CSS, cache assets, reduce network requests, and inspect server/API latency.'],
    ['What is CORS?','Cross-Origin Resource Sharing is a browser security mechanism that lets a server specify which other origins may access its resources. The server must return the appropriate headers.']
  ],
  'tester': [
    ['What is software testing?','Software testing evaluates whether an application meets requirements and helps find defects before users are affected.'],
    ['What is the difference between QA and testing?','Quality Assurance focuses on improving processes to prevent defects; testing is an activity used to detect defects and assess product behavior.'],
    ['What is the difference between severity and priority?','Severity describes the impact of a defect on the system. Priority describes how urgently the team should fix it.'],
    ['What is the difference between smoke and sanity testing?','Smoke testing checks whether a build’s critical functions are stable enough for further testing. Sanity testing checks a narrower area after a small change or fix.'],
    ['What should a good bug report contain?','Include a clear title, environment, preconditions, reproducible steps, expected result, actual result, evidence, and severity/priority where applicable.'],
    ['What is regression testing?','Regression testing checks that recent changes have not broken features that previously worked.'],
    ['What is the difference between black-box and white-box testing?','Black-box testing checks behavior without relying on internal code. White-box testing uses knowledge of internal logic and code paths.'],
    ['How would you test a login page?','Test valid and invalid credentials, empty fields, password masking, validation messages, lockout/rate limits, session behavior, keyboard access, and security cases.']
  ],
  'application developer': [
    ['What is application development?','Application development is the process of designing, coding, testing, deploying, and maintaining software for a particular user or business need.'],
    ['What is the difference between a web app and a mobile app?','A web app runs in a browser and is commonly accessed by URL. A mobile app is installed or packaged for a mobile platform, though some apps use cross-platform frameworks.'],
    ['What is the role of a database in an application?','A database stores and retrieves persistent information such as users, orders, settings, and transactions. The application accesses it through controlled queries or services.'],
    ['What is authentication versus authorization?','Authentication verifies who a user is. Authorization determines what that user is allowed to access or do.'],
    ['How should an application handle errors?','Validate inputs, catch expected failures, show clear user-safe messages, log useful diagnostic details securely, and avoid exposing secrets or stack traces to users.'],
    ['What is an application programming interface (API)?','An API defines how parts of an application or different applications exchange data and request operations.'],
    ['How do you protect user data in an application?','Use least-privilege access, secure transport, appropriate validation, safe secret storage, secure authentication, and avoid logging sensitive information.'],
    ['How would you test an application before release?','Combine unit, integration, functional, usability, compatibility, performance, and security checks according to the application’s risks and requirements.']
  ],
  'frontend developer': [
    ['What is the difference between HTML, CSS, and JavaScript?','HTML provides structure, CSS provides styling and layout, and JavaScript provides interactive behavior.'],
    ['What are props and state in React?','Props are inputs passed from a parent component. State is data managed by a component that can change over time and trigger a re-render.'],
    ['Why are React keys used when rendering lists?','Keys help React identify which list items changed, were added, or were removed, so it can update the interface reliably.'],
    ['What is event bubbling?','An event triggered on a nested element can propagate to its ancestors. Event handlers can use this behavior or stop propagation when needed.'],
    ['How do you validate a form?','Check required fields, data types, and formats on the client for usability, then validate again on the server because client-side checks can be bypassed.'],
    ['What is the difference between localStorage and sessionStorage?','Both store string data in the browser. localStorage persists across browser sessions; sessionStorage is scoped to a tab session. Neither should hold sensitive secrets.'],
    ['How do you improve frontend performance?','Reduce bundle size, lazy-load noncritical content, optimize images, avoid unnecessary renders, cache resources, and measure using browser performance tools.'],
    ['What is semantic HTML?','Semantic HTML uses elements such as nav, main, button, and article according to their meaning, improving accessibility and maintainability.']
  ],
  'backend developer': [
    ['What is the role of a backend developer?','Backend developers build server-side logic, APIs, authentication, business rules, database access, and integrations.'],
    ['What is REST?','REST is an architectural style for networked services. RESTful APIs commonly use resource-oriented URLs and HTTP methods such as GET, POST, PUT, PATCH, and DELETE.'],
    ['What is the difference between SQL and NoSQL databases?','SQL databases commonly use relational tables and structured queries. NoSQL databases include document, key-value, graph, and wide-column models suited to different access patterns.'],
    ['What is middleware?','Middleware is code that runs during a request/response pipeline, for example to authenticate users, log requests, or handle errors.'],
    ['How do you prevent SQL injection?','Use parameterized queries or prepared statements, validate inputs, apply least-privilege database accounts, and avoid building queries by concatenating user input.'],
    ['What is caching and when would you use it?','Caching stores reusable results temporarily to reduce repeated computation or database/network work. Choose expiration and invalidation rules carefully to avoid stale data.'],
    ['How should passwords be stored?','Never store plaintext passwords. Use a password-hashing algorithm designed for passwords, such as Argon2id, bcrypt, or scrypt, with appropriate parameters and salts.'],
    ['How do you design an API error response?','Use meaningful HTTP status codes and a consistent response structure with a safe error message and, where useful, a trace/request ID. Do not expose secrets or internal stack traces.']
  ],
  'qa engineer': [
    ['What is the role of a QA engineer?','A QA engineer helps ensure product quality by understanding requirements, planning tests, executing them, reporting defects, and improving test processes.'],
    ['What is a test case?','A test case defines preconditions, inputs or steps, and expected results used to verify a particular behavior.'],
    ['What is the difference between functional and non-functional testing?','Functional testing checks what the system does. Non-functional testing checks qualities such as performance, security, accessibility, reliability, and usability.'],
    ['What is boundary value analysis?','It tests values at and around input limits because defects often occur at boundaries, such as minimum and maximum allowed values.'],
    ['What is equivalence partitioning?','It divides inputs into groups expected to behave similarly, then selects representative values from each group to reduce redundant tests.'],
    ['What is automation testing?','Automation testing uses scripts or tools to run checks repeatedly. It is especially useful for stable, repetitive regression tests, while exploratory testing still needs human judgment.'],
    ['What is a test plan?','A test plan describes scope, objectives, approach, resources, schedule, environment, risks, and entry/exit criteria for testing.'],
    ['How do you decide which tests to run first?','Prioritize critical user journeys, high-risk features, frequently used functionality, recent changes, and areas with a history of defects.']
  ],

  'devops engineer': [
    ['What is DevOps, and why do teams use it?',''],['What is the difference between continuous integration and continuous delivery?',''],['What is a CI/CD pipeline?',''],['How have you used Git branches and pull requests?',''],['What is Docker, and why are containers useful?',''],['What is the difference between a container and a virtual machine?',''],['How would you investigate a failed deployment?',''],['What is infrastructure as code?','']
  ],
  'data analyst': [
    ['How do you approach a new dataset that contains missing or inconsistent values?',''],['What is the difference between INNER JOIN and LEFT JOIN in SQL?',''],['When would you use a pivot table?',''],['How do you explain a KPI to a non-technical stakeholder?',''],['What is the difference between correlation and causation?',''],['How would you validate that a report is accurate?',''],['Which chart would you choose to compare categories over time, and why?',''],['Tell me about a time you used data to answer a business question.','']
  ],
  'data engineer': [
    ['What is the difference between ETL and ELT?',''],['How would you design a pipeline to process daily data from multiple sources?',''],['What is a data warehouse, and how is it different from a data lake?',''],['What are batch processing and stream processing?',''],['How do you handle duplicate records in a data pipeline?',''],['What is partitioning, and when is it useful?',''],['How would you monitor and troubleshoot a failed data pipeline?',''],['What is the difference between a fact table and a dimension table?','']
  ],
  'cloud engineer': [
    ['What is cloud computing, and what are its main service models?',''],['What is the difference between a public, private, and hybrid cloud?',''],['How do you apply least-privilege access in a cloud environment?',''],['What is auto-scaling, and when would you use it?',''],['How would you troubleshoot an application that cannot connect to a cloud database?',''],['What is the purpose of a virtual private cloud or virtual network?',''],['How would you plan backups and disaster recovery for a cloud application?',''],['How do you monitor cloud costs and avoid unnecessary spending?','']
  ],
  'cybersecurity analyst': [
    ['What is the difference between a threat, a vulnerability, and a risk?',''],['What is phishing, and how would you respond to a suspected phishing email?',''],['What is multi-factor authentication, and why is it important?',''],['What steps would you take after detecting a suspicious login?',''],['What is the principle of least privilege?',''],['What is the difference between encryption and hashing?',''],['How would you prioritize security vulnerabilities?',''],['What information should be included in a security incident report?','']
  ],
  'database administrator': [
    ['What responsibilities does a database administrator have?',''],['How would you investigate a slow-running SQL query?',''],['What is an index, and what are its trade-offs?',''],['What is the difference between a full backup and an incremental backup?',''],['What are database transactions and ACID properties?',''],['How do you manage database users and permissions securely?',''],['What steps would you take if a database server ran out of storage?',''],['How would you test whether a database backup can be restored?','']
  ],
  'ui ux designer': [
    ['What is the difference between UI design and UX design?',''],['How do you gather requirements before designing a user interface?',''],['What is a user persona, and when would you use one?',''],['How do you make a design accessible?',''],['How would you conduct usability testing?',''],['What is a wireframe, and how is it different from a prototype?',''],['How do you handle conflicting feedback from stakeholders?',''],['How would you measure whether a design change improved the user experience?','']
  ],
  'it support engineer': [
    ['How would you troubleshoot a computer that cannot connect to the internet?',''],['What would you do if a user could not log in to their account?',''],['How do you prioritize multiple support tickets?',''],['What is the difference between RAM and storage?',''],['How would you troubleshoot a printer that is not responding?',''],['What information should you record in a support ticket?',''],['How would you explain a technical issue to a non-technical user?',''],['When should an issue be escalated to another team?','']
  ],
  'business analyst': [
    ['What does a business analyst do in a software project?',''],['How do you gather and document requirements?',''],['What is the difference between a functional and a non-functional requirement?',''],['What are user stories and acceptance criteria?',''],['How would you handle two stakeholders with conflicting requirements?',''],['What is the purpose of a requirements traceability matrix?',''],['How do you confirm that a delivered feature meets business needs?',''],['How would you explain a technical limitation to a business stakeholder?','']
  ],
  'ai ml engineer': [
    ['What is the difference between artificial intelligence, machine learning, and deep learning?',''],['What is the difference between supervised and unsupervised learning?',''],['What is overfitting, and how can you reduce it?',''],['Why do we split data into training, validation, and test sets?',''],['What is the difference between classification and regression?',''],['How would you handle missing values and imbalanced classes in a dataset?',''],['Which metrics would you use to evaluate a classification model, and why?',''],['How would you monitor a machine-learning model after deployment?','']
  ],
  'android developer': [
    ['What is the Android activity lifecycle?',''],['What is the difference between an Activity and a Fragment?',''],['How do you handle configuration changes such as screen rotation?',''],['How would you store app data locally on an Android device?',''],['How do you call a REST API from an Android application?',''],['How would you investigate an application crash?',''],['What steps would you take to improve app performance and battery usage?',''],['How do you protect sensitive information stored by a mobile app?','']
  ],
  'ios developer': [
    ['What is the difference between UIKit and SwiftUI?',''],['What is the purpose of optionals in Swift?',''],['How do you manage asynchronous network requests in an iOS app?',''],['How would you persist data locally in an iOS application?',''],['How do you debug a crash reported by a user?',''],['What is the app lifecycle on iOS?',''],['How would you improve accessibility in an iOS app?',''],['How do you manage permissions for camera, location, or notifications?','']
  ],
  'full stack developer': [
    ['How does a browser request travel from the frontend to the backend and database?',''],['How do you decide which logic belongs on the client and which belongs on the server?',''],['How would you implement authentication for a full-stack application?',''],['How do you validate user input on both frontend and backend?',''],['How would you investigate an API that works in Postman but fails in the browser?',''],['How do you structure and manage environment variables across development and production?',''],['How would you test a feature that spans the UI, API, and database?',''],['Describe a full-stack project and the technical decisions you made.','']
  ],
  'network engineer': [
    ['What is the difference between TCP and UDP?',''],['What is the purpose of DNS?',''],['What is the difference between a router and a switch?',''],['What is an IP address and subnet mask?',''],['How would you troubleshoot a device that can reach an IP address but not a domain name?',''],['What is the purpose of a firewall?',''],['What is the difference between public and private IP addresses?',''],['How would you investigate intermittent network connectivity?','']
  ],
  'system administrator': [
    ['What routine tasks does a system administrator perform?',''],['How do you investigate high CPU or memory usage on a server?',''],['How would you manage user accounts and permissions?',''],['Why are operating system updates and patches important?',''],['How do you monitor disk space and prevent a server from running out?',''],['What is the purpose of system logs?',''],['How would you recover a server after a failed update?',''],['How do you verify that scheduled backups are working?','']
  ],
  'scrum master': [
    ['What is Scrum, and what are its main events?',''],['What is the difference between a Scrum Master and a Product Owner?',''],['How would you help a team handle blockers during a sprint?',''],['What is the purpose of a sprint retrospective?',''],['How would you respond if sprint work repeatedly carries over?',''],['How do you help a team manage changing priorities?',''],['What is the difference between a product backlog and a sprint backlog?',''],['How would you handle a disagreement between team members?','']
  ],
  'technical support engineer': [
    ['How do you troubleshoot an application that fails to launch?',''],['How would you collect useful logs from a user while protecting private information?',''],['How do you distinguish a user configuration issue from a product defect?',''],['What would you do if an issue cannot be reproduced on your machine?',''],['How do you communicate a workaround to a customer?',''],['When would you escalate a support issue to development?',''],['How do you document a recurring technical issue?',''],['How would you handle an urgent issue affecting many users?','']
  ]

};
function getRoleKey(topic){
  const t=topic.toLowerCase().replace(/[–—]/g,'-');
  const aliases=[
    [['devops','dev ops','site reliability','sre'],'devops engineer'],
    [['data analyst','business intelligence','bi analyst','power bi','tableau'],'data analyst'],
    [['data engineer','data pipeline','etl developer'],'data engineer'],
    [['cloud engineer','cloud computing','aws engineer','azure engineer','gcp engineer'],'cloud engineer'],
    [['cybersecurity','cyber security','security analyst','information security'],'cybersecurity analyst'],
    [['database administrator','dba','database admin'],'database administrator'],
    [['ui ux','ui/ux','ux designer','ui designer','user experience designer'],'ui ux designer'],
    [['it support','help desk','helpdesk','desktop support'],'it support engineer'],
    [['business analyst','ba role'],'business analyst'],
    [['ai/ml','ai ml','machine learning engineer','ml engineer','artificial intelligence engineer'],'ai ml engineer'],
    [['android developer','android development'],'android developer'],
    [['ios developer','iOS development','swift developer'],'ios developer'],
    [['full stack','full-stack','fullstack'],'full stack developer'],
    [['network engineer','networking role'],'network engineer'],
    [['system administrator','sysadmin','system admin'],'system administrator'],
    [['scrum master','agile scrum'],'scrum master'],
    [['technical support','application support'],'technical support engineer'],
    [['web developer','web development'],'web developer'],
    [['frontend','front-end','ui developer'],'frontend developer'],
    [['backend','back-end'],'backend developer'],
    [['application developer','app developer','mobile developer'],'application developer'],
    [['qa engineer','quality assurance'],'qa engineer'],
    [['tester','testing','test engineer','software test'],'tester'],
    [['software developer','software engineer','developer','development'],'software developer']
  ];
  for(const [terms,key] of aliases){if(terms.some(term=>t.includes(term.toLowerCase())))return key;}
  return null;
}
function buildTopicQuestions(topic, difficulty, count){
  const normalized=topic.toLowerCase();
  const roleKey=getRoleKey(topic);
  if(roleKey){
    const bank=roleInterviewBank[roleKey].map(([question],i)=>({question,guide:'',difficultyLead:'',level:difficulty,index:i}));
    return bank.slice(0,Math.min(count,bank.length));
  }
  let key = normalized.includes('sql') || normalized.includes('database query') ? 'sql' : normalized.includes('mongo') ? 'mongodb' : (normalized.includes('javascript') || normalized.includes('react') || normalized.includes('html') || normalized.includes('css') || normalized.includes('web')) ? 'javascript' : 'python';
  let templates=topicQuestionTemplates[key];
  const custom = templates.map(([q,guide],i)=>({question:q.replaceAll('{topic}',topic), guide:guide, difficultyLead:'', level:difficulty, index:i}));
  if (difficulty==='Beginner') {
    custom[0].question=`What is ${topic}? Explain it in simple terms.`;
    custom[1].question=`Why is ${topic} important, and where is it used?`;
  } else if (difficulty==='Advanced') {
    custom[0].question=`Explain the internal behavior and key design trade-offs of ${topic}.`;
    custom[1].question=`How would you optimize and troubleshoot a production system using ${topic}?`;
  }
  return custom.slice(0, Math.min(count, custom.length));
}
function generateTopicQuestions(){
  const input=document.getElementById('topicInput');
  const status=document.getElementById('topicQuestionStatus');
  const results=document.getElementById('topicQuestionResults');
  const list=document.getElementById('topicQuestionList');
  const topic=(input.value||'').trim();
  if(!topic){status.textContent='Please enter a topic first, such as Python, SQL joins, or React hooks.';input.focus();return;}
  if(topic.length>100){status.textContent='Please keep the topic under 100 characters.';return;}
  const difficulty=document.getElementById('topicDifficulty').value;
  const count=Number(document.getElementById('topicCount').value);
  const questions=buildTopicQuestions(topic,difficulty,count);
  document.getElementById('topicResultsTitle').textContent=`${topic} — ${difficulty} Questions`;
  list.innerHTML=questions.map((q,i)=>{
    const text=q.question.toLowerCase();
    let hint='Start with a clear definition, then explain why it matters and give a practical example.';
    if(/difference|compare|versus| vs /.test(text)) hint='Compare the two concepts point by point, explain when each is used, and give an example.';
    else if(/how would you|what would you do|scenario|production|fails|failure|issue|problem|troubleshoot|debug/.test(text)) hint='Explain your steps in order: understand the problem, investigate evidence, choose a fix, test it, and communicate the result.';
    else if(/project|experience|tell me about|describe a time|challenge/.test(text)) hint='Use a real project or situation. Cover the goal, your own responsibility, the tools you used, the challenge, and the outcome.';
    else if(/test|bug|defect|quality|regression|automation/.test(text)) hint='Think about test objectives, test data, expected versus actual results, edge cases, and how you would report findings.';
    else if(/security|secure|password|attack|risk|privacy/.test(text)) hint='Mention the main risks, prevention measures, safe handling of data, and how you would verify the protection works.';
    else if(/database|sql|query|data|index|transaction/.test(text)) hint='Think about data structure, correctness, performance, constraints, and a small example query or use case.';
    else if(/api|http|request|server|client|network/.test(text)) hint='Explain the request-and-response flow, the key components involved, common errors, and how you would test it.';
    else if(/code|program|algorithm|function|write/.test(text)) hint='Clarify the input and output first, describe your approach, consider edge cases, then explain time or space complexity if relevant.';
    else if(/team|conflict|feedback|deadline|communicat|strength|weakness/.test(text)) hint='Answer honestly and specifically. Describe the situation, the action you took, and what you learned.';
    return `<article class="topic-question"><h3><span class="topic-number">${i+1}</span>${esc(q.question)}</h3><details><summary>Show hint</summary><div class="answer-guide">${esc(hint)}</div></details></article>`;
  }).join('');
  results.classList.remove('hidden');
  status.textContent=`Generated ${questions.length} interview questions for “${topic}”. These are curated examples, not live AI-generated content.`;
}
function copyTopicQuestions(){
  const topic=(document.getElementById('topicInput').value||'').trim();
  const items=[...document.querySelectorAll('#topicQuestionList .topic-question h3')].map((h,i)=>`${i+1}. ${h.innerText.replace(/^\d+\s*/, '').trim()}`);
  if(!items.length)return;
  const text=`Interview questions: ${topic}\n\n${items.join('\n')}`;
  if(navigator.clipboard && window.isSecureContext){navigator.clipboard.writeText(text).then(()=>{document.getElementById('topicQuestionStatus').textContent='Questions copied to clipboard.';}).catch(()=>fallbackCopyTopic(text));}
  else fallbackCopyTopic(text);
}
function fallbackCopyTopic(text){const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');document.getElementById('topicQuestionStatus').textContent='Questions copied to clipboard.';}catch(e){document.getElementById('topicQuestionStatus').textContent='Copy was blocked by the browser. You can select and copy the questions manually.';}ta.remove();}
document.getElementById('generateTopicQuestions')?.addEventListener('click',generateTopicQuestions);
document.getElementById('topicInput')?.addEventListener('keydown',e=>{if(e.key==='Enter')generateTopicQuestions();});
document.getElementById('copyTopicQuestions')?.addEventListener('click',copyTopicQuestions);


document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));

document.querySelectorAll("#typeChoices .choice").forEach(b=>b.onclick=()=>{document.querySelectorAll("#typeChoices .choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");settings.type=b.dataset.value;});
document.querySelectorAll("#difficultyChoices button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#difficultyChoices button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");settings.difficulty=b.dataset.value;});
document.querySelectorAll("#countChoices button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#countChoices button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");settings.count=Number(b.dataset.value);});

function quickStart(type){settings.type=type;settings.difficulty="Easy";settings.count=5;startInterview();}
function getBaseQuestions(){
 const arr=(questionBank[settings.type]||questionBank.Technical)[settings.difficulty]||questionBank.Technical.Easy;
 return arr.map(x=>({question:x[0],hint:x[1],ideal:x[2],say:x[3],keywords:x[4].split(",")}));
}
function personalizedQuestions(){
 const q=[];
 candidateProfile.skills.slice(0,4).forEach(s=>q.push({question:`You listed ${s} on your resume. How have you used ${s} in a project?`,hint:"Be specific about what you built and your own contribution.",ideal:`I used ${s} in a project to solve a specific requirement. I can explain the feature I implemented, why I chose ${s}, the challenges I faced and the result.`,say:`I have practical experience with ${s}. I used it in a project where I was responsible for implementing and testing the relevant functionality.`,keywords:[s.toLowerCase(),"project","used"]}));
 candidateProfile.projects.slice(0,3).forEach(p=>q.push({question:`Explain the ${p} project and your contribution.`,hint:"Cover problem, solution, technologies, contribution and result.",ideal:`The ${p} project was created to solve a practical problem. I should explain the problem, architecture or workflow, technologies used, my individual contribution, challenges and result.`,say:`The project is ${p}. Its goal was to solve a practical problem. I worked on the implementation, testing and debugging, and I can explain the main technical decisions I made.`,keywords:["project","problem","solution","technology","contribution"]}));
 return q;
}
// Built-in AI Interview Agent — no API key required.
// It uses the resume/profile and the question already loaded in this browser.
function resumeContext(){
  const parts=[];
  if(candidateProfile.name) parts.push(`Candidate name: ${candidateProfile.name}`);
  if(candidateProfile.skills?.length) parts.push(`Skills: ${candidateProfile.skills.join(', ')}`);
  if(candidateProfile.technologies?.length) parts.push(`Technologies: ${candidateProfile.technologies.join(', ')}`);
  if(candidateProfile.projects?.length) parts.push(`Projects: ${candidateProfile.projects.join(', ')}`);
  if(candidateProfile.experience?.length) parts.push(`Experience: ${candidateProfile.experience.join(', ')}`);
  return parts.join('\n');
}
function getAgentFacts(q){
  const facts=[];
  const all=[...(candidateProfile.skills||[]),...(candidateProfile.technologies||[]),...(candidateProfile.projects||[])];
  const low=(q.question||'').toLowerCase();
  all.forEach(x=>{ if(low.includes(String(x).toLowerCase()) || String(q.ideal||'').toLowerCase().includes(String(x).toLowerCase())) facts.push(x); });
  return [...new Set(facts)].slice(0,6);
}
function localAgent(mode,q,answer=''){
  const facts=getAgentFacts(q);
  const subject=facts.length?facts.join(', '):'the topic in this question';
  const keywords=(q.keywords||[]).slice(0,6);
  if(mode==='suggest'){
    return `<b>💡 Suggestions</b>
      <ul>
        <li>Start with a direct definition or main point.</li>
        <li>Explain <b>${esc(subject)}</b> using your own experience when it is genuinely on your resume.</li>
        <li>Cover the key concepts: <b>${esc(keywords.join(', ')||'definition, reasoning, example')}</b>.</li>
        <li>Give one concrete example instead of listing too many points.</li>
        <li>Do not claim a technology, feature or responsibility that you did not actually use.</li>
      </ul>`;
  }
  if(mode==='coach'){
    return `<b>🎯 What the interviewer is checking</b>
      <ul>
        <li>Whether you understand the concept, not whether you memorized a definition.</li>
        <li>Whether you can explain your reasoning clearly.</li>
        <li>Whether your project claims match the resume.</li>
        <li>Whether you can give a practical example.</li>
      </ul>
      <b>Likely follow-up:</b><p>“Can you give a specific example from your project or explain why you chose that approach?”</p>
      <b>Avoid:</b><p>Do not invent implementation details that are not in your resume.</p>`;
  }
  return `<b>✅ Strong answer structure</b>
    <p><b>1.</b> Answer the question directly.</p>
    <p><b>2.</b> Explain the important technical points: ${esc(keywords.join(', ')||'the main concept')}.</p>
    <p><b>3.</b> Connect it to your real project/experience if applicable.</p>
    <p><b>4.</b> Finish with the result, trade-off or lesson learned.</p>
    <hr>
    <b>Example based on the current question:</b>
    <p>${esc(q.say||q.ideal||'Give a concise, technically correct answer and personalize it with your real experience.')}</p>`;
}

function startInterview(){
 const begin=document.querySelector('#setup button[onclick="startInterview()"]');
 if(begin){begin.disabled=true;begin.textContent="Preparing interview…";}
 let qs=[];
 try{
   const pq=personalizedQuestions();
   // Resume-aware questions are generated locally from the detected resume facts.
   if(candidateProfile.resumeText && pq.length) qs=pq;
   else qs=getBaseQuestions();
   qs=qs.sort(()=>Math.random()-.5).slice(0,settings.count);
 }catch(err){
   console.error('Question preparation failed',err);
   qs=getBaseQuestions().sort(()=>Math.random()-.5).slice(0,settings.count);
 }
 if(begin){begin.disabled=false;begin.textContent="Begin Interview";}
 if(!qs.length){alert("Upload your resume or select a standard interview mode first.");return;}
 state={questions:qs.slice(0,settings.count),index:0,answers:[],skipped:0};
 showPage("interview"); renderQuestion();
}
function renderQuestion(){
 const q=state.questions[state.index];
 document.getElementById("liveType").textContent=settings.type;
 document.getElementById("liveProgress").textContent=`Question ${state.index+1} of ${state.questions.length}`;
 document.getElementById("questionProgress").style.width=`${((state.index)/state.questions.length)*100}%`;
 document.getElementById("questionText").textContent=q.question;
 document.getElementById("questionHint").textContent=q.hint;
 const box=document.getElementById("answerInput");box.value="";updateWordCount();
 const out=document.getElementById("agentOutput");
 const status=document.getElementById("agentStatus");
 if(out) out.innerHTML=`<b>🤖 Agent ready</b><p>I can guide you without giving away the answer. Choose <b>Suggest</b>, <b>Interview Coach</b>, or <b>Ideal Answer</b>.</p>${candidateProfile.resumeText?'<p class="muted">Resume-aware mode is active.</p>':'<p class="muted">Upload a resume to make guidance more personalized.</p>'}`;
 if(status) status.textContent=candidateProfile.resumeText?'Resume aware':'Ready';
 document.querySelectorAll("[data-agent-mode]").forEach(b=>b.classList.toggle("selected",b.dataset.agentMode==="suggest"));
}
function getAgentHelp(mode){
 const q=state.questions[state.index]; if(!q)return;
 document.querySelectorAll("[data-agent-mode]").forEach(b=>b.classList.toggle("selected",b.dataset.agentMode===mode));
 const out=document.getElementById("agentOutput"),status=document.getElementById("agentStatus");
 if(!out)return;
 status.textContent='AI Agent';
 out.innerHTML=localAgent(mode,q,document.getElementById('answerInput')?.value.trim()||'');
}
document.getElementById("answerInput").addEventListener("input",updateWordCount);
function updateWordCount(){const t=document.getElementById("answerInput").value.trim();document.getElementById("wordCount").textContent=`${t?t.split(/\s+/).length:0} words`;}
function clearAnswer(){document.getElementById("answerInput").value="";updateWordCount();document.getElementById("answerInput").focus();}
function normalizeAnswerText(text){
 const value=String(text||'').toLowerCase();
 return value
   .replace(/[.,!?;:()[\]{}"'`]/g,' ')
   .replace(/\s+/g,' ')
   .trim();
}

function evaluate(q,answer){
 const text=String(answer||'').trim();

 if(!text){
  return {
   score:0,
   status:'Not Answered',
   feedback:'No answer was provided.',
   wrong:'There is no answer to evaluate.',
   missing:q.hint||'Try to answer the question before moving forward.',
   correction:'Give a direct answer first, then explain the main concept briefly.',
   correct:q.ideal,
   say:q.say
  };
 }

 const low=normalizeAnswerText(text);
 const keywords=Array.isArray(q.keywords)?q.keywords:[];
 const found=keywords.filter(k=>low.includes(normalizeAnswerText(k)));
 const missing=keywords.filter(k=>!found.includes(k));
 const coverage=keywords.length?found.length/keywords.length:1;

 // IMPORTANT: answer length is NEVER used for scoring.
 let score,status,feedback;
 if(coverage>=0.70){
   score=90;
   status='Correct';
   feedback='Your answer contains the main concepts required for this question.';
 }else if(coverage>=0.45){
   score=70;
   status='Mostly Correct';
   feedback='Your answer is generally correct, but some important concepts are missing.';
 }else if(coverage>=0.20){
   score=50;
   status='Partially Correct';
   feedback='Your answer contains part of the concept, but it needs important corrections or additional points.';
 }else{
   score=20;
   status='Needs Improvement';
   feedback='Your answer does not yet explain the main concepts expected for this question.';
 }

 let wrong;
 let correction;
 if(status==='Correct'){
   wrong='No major technical correction is needed based on the concepts detected in your answer.';
   correction='Your answer is acceptable. You can make it stronger by adding a short example when appropriate.';
 }else{
   wrong=missing.length
     ? `Your answer is missing or does not clearly explain: ${missing.slice(0,5).join(', ')}.`
     : 'Your answer needs to be clearer and more directly connected to the question.';
   correction=q.correction || `Add or correct these points: ${missing.slice(0,5).join(', ')}. Then explain the concept using your own words.`;
 }

 // Optional question-specific correction for known misconceptions.
 if(q.wrongExplanation && status!=='Correct') wrong=q.wrongExplanation;
 if(q.correction && status!=='Correct') correction=q.correction;

 return {
   score,
   status,
   feedback,
   wrong,
   missing: missing.length
      ? `Important points missing: ${missing.slice(0,6).join(', ')}.`
      : (q.hint||'No major points appear to be missing.'),
   correction,
   correct:q.ideal,
   say:q.say
 };
}
function evaluateWithAI(q, answer){
  // Kept as a local compatibility name so the rest of the app remains simple.
  return Promise.resolve(evaluate(q,answer));
}
async function submitCurrentAnswer(){
 const btn=document.querySelector('.interview-actions .primary');
 if(btn){btn.disabled=true;btn.textContent='Reviewing answer…';}
 const q=state.questions[state.index], answer=document.getElementById("answerInput").value.trim();
 const ev=evaluate(q,answer);
 state.answers.push({question:q.question,answer,score:ev.score,status:ev.status,feedback:ev.feedback,wrong:ev.wrong,missing:ev.missing,correction:ev.correction,correct:ev.correct,say:ev.say});
 if(btn){btn.disabled=false;btn.textContent='Submit Answer';}
 if(state.index<state.questions.length-1){state.index++;renderQuestion();}else finishInterview();
}
function requestFollowUp(){
 const q=state.questions[state.index];
 const answer=document.getElementById('answerInput').value.trim();
 if(!answer){alert('Write your answer first so the agent can ask a relevant follow-up.');return;}
 if(q._followUpAdded){alert('A follow-up has already been added for this question.');return;}
 const follow={
   question:`Can you explain one specific detail from your answer to “${q.question}”?`,
   hint:'Give a concrete example, explain your reasoning and clearly state your own contribution.',
   ideal:q.ideal,
   say:q.say,
   keywords:q.keywords||[]
 };
 state.questions.splice(state.index+1,0,{question:follow.question,hint:follow.hint,ideal:follow.ideal,say:follow.say,keywords:follow.keywords,source:'Built-in AI follow-up'});
 q._followUpAdded=true;
 document.getElementById('agentStatus').textContent='Follow-up added';
 document.getElementById('agentOutput').innerHTML=`<b>↪ Follow-up question added</b><p>${esc(follow.question)}</p><p class="muted">Submit your current answer to continue.</p>`;
}
function skipQuestion(){
 state.skipped++;
 const q=state.questions[state.index];
 state.answers.push({question:q.question,answer:"Skipped",score:0,feedback:"This question was skipped.",missing:"Practice answering this question instead of leaving it unanswered.",correct:q.ideal,say:q.say});
 if(state.index<state.questions.length-1){state.index++;renderQuestion();}else finishInterview();
}
function finishInterview(){
 const avg=state.answers.length?Math.round(state.answers.reduce((a,b)=>a+b.score,0)/state.answers.length):0;
 const record={date:new Date().toISOString(),type:settings.type,difficulty:settings.difficulty,score:avg,answered:state.answers.filter(x=>x.answer!=="Skipped").length,skipped:state.skipped,total:state.questions.length,answers:state.answers};
 history.unshift(record);save();saveInterviewToFirebase(record);renderResults(record);showPage("results");
}
function renderResults(r){
 document.getElementById("finalScore").textContent=r.score;
 document.getElementById("resultMessage").textContent=r.score>=80?"Strong interview performance":r.score>=60?"Good start — keep practicing":"Keep practicing — focus on the corrections below";
 document.getElementById("resultSummary").textContent=`You answered ${r.answered} of ${r.total} questions. Review the guidance below to improve your next attempt.`;
 document.getElementById("resultAnswered").textContent=r.answered;document.getElementById("resultSkipped").textContent=r.skipped;document.getElementById("resultTotal").textContent=r.total;
 document.getElementById("answerReview").innerHTML=r.answers.map((a,i)=>`<div class="review">
   <h3>Q${i+1}. ${esc(a.question)} <span class="score-badge">${a.score}/100</span></h3>
   <div class="review-status-text">${esc(a.status||'Reviewed')}</div>

   <div class="review-label">📝 YOUR ANSWER</div>
   <div class="your-answer">${a.answer&&a.answer!=="Skipped"?esc(a.answer):"No answer provided."}</div>

   <div class="review-label">❌ WHAT WAS WRONG?</div>
   <div class="wrong">${esc(a.wrong||a.feedback||'No major issue detected.')}</div>

   <div class="review-label">🔧 HOW SHOULD YOU CORRECT YOUR ANSWER?</div>
   <div class="correction-box">${esc(a.correction||a.missing||'Compare your answer with the correct answer below.')}</div>

   <div class="review-label">⚠️ WHAT WAS MISSING?</div>
   <div class="review-note">${esc(a.missing||'No major points are missing.')}</div>

   <div class="review-label">✅ CORRECT ANSWER</div>
   <div class="correct">${esc(a.correct)}</div>

   <div class="review-label">💬 HOW TO SAY IT IN AN INTERVIEW</div>
   <div class="correct">${esc(a.say)}</div>
 </div>`).join("");
 const weak={};r.answers.forEach(a=>{if(a.score<70){const key=a.question.split(" ").slice(0,5).join(" ");weak[key]=(weak[key]||0)+1;}});
 const keys=Object.keys(weak);
 document.getElementById("weakAreas").innerHTML=keys.length?keys.map(k=>`<div class="plan-item"><b>${esc(k)}...</b><p class="muted">Practice this topic again and compare your answer with the strong answer above.</p></div>`).join(""):"<div class='empty'>No major weak areas detected in this session.</div>";
 document.getElementById("learningPlan").innerHTML=`<div class="plan-item"><b>1. Review weak answers</b><p class="muted">Read the correct answer and say it aloud in your own words.</p></div><div class="plan-item"><b>2. Practice technical vocabulary</b><p class="muted">For technical questions, define the concept, explain how it works and give a simple example.</p></div><div class="plan-item"><b>3. Repeat the interview</b><p class="muted">Take another session after studying the corrections. There is no timer, so focus on accuracy first.</p></div>`;
}
function updateDashboard(){
 const completed=history.length, answered=history.reduce((a,r)=>a+r.answered,0), scores=history.map(r=>r.score);
 document.getElementById("statInterviews").textContent=completed;document.getElementById("statQuestions").textContent=answered;document.getElementById("statAverage").textContent=scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):"—";document.getElementById("statBest").textContent=scores.length?Math.max(...scores):"—";
 document.getElementById("candidateSummary").innerHTML=candidateProfile.skills.length?`<b>${esc(candidateProfile.name||"Candidate")}</b><p class="muted">${candidateProfile.skills.slice(0,8).map(esc).join(" · ")}</p>`:"Upload your resume to personalize questions.";
 document.getElementById("recentHistory").innerHTML=history.length?history.slice(0,3).map(r=>`<div class="history-row"><span>${esc(r.type)} · ${r.total} questions</span><b>${r.score}/100</b></div>`).join(""):"No interviews completed yet.";
}
function renderHistory(){
 const el=document.getElementById("historyList");el.innerHTML=history.length?history.map(r=>`<div class="history-row"><div><b>${esc(r.type)}</b><div class="muted">${new Date(r.date).toLocaleString()} · ${r.difficulty}</div></div><b>${r.score}/100</b></div>`).join(""):"No interviews completed yet.";
}
function renderProgress(){
 const scores=history.map(r=>r.score),answered=history.reduce((a,r)=>a+r.answered,0);
 document.getElementById("progressCompleted").textContent=history.length;document.getElementById("progressAverage").textContent=scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):"—";document.getElementById("progressBest").textContent=scores.length?Math.max(...scores):"—";document.getElementById("progressAnswered").textContent=answered;
 const weak={};history.flatMap(r=>r.answers||[]).forEach(a=>{if(a.score<70){const k=a.question.split(" ").slice(0,5).join(" ");weak[k]=(weak[k]||0)+1;}});
 const list=Object.entries(weak).sort((a,b)=>b[1]-a[1]).slice(0,8);
 document.getElementById("progressWeak").innerHTML=list.length?list.map(([k,v])=>`<div class="plan-item"><b>${esc(k)}...</b><span class="muted"> Needs practice · ${v} weak answer${v>1?"s":""}</span></div>`).join(""):"Complete an interview to see weak areas.";
}
document.getElementById("resumeInput").addEventListener("change",handleResume);
async function handleResume(e){
 const file=e.target.files[0];if(!file)return;
 document.getElementById("resumeStatus").textContent="Reading resume...";
 let text="";
 try{text=file.type==="application/pdf"?await extractPDFText(file):await file.text();}catch(err){document.getElementById("resumeStatus").textContent="Could not read this file.";return;}
 analyzeResume(text);document.getElementById("resumeStatus").textContent=`Resume loaded: ${file.name}`;document.getElementById("resumeResults").classList.remove("hidden");
}
async function extractPDFText(file){
 if(!window.pdfjsLib) throw new Error("PDF.js unavailable");
 const buf=await file.arrayBuffer(),pdf=await pdfjsLib.getDocument({data:buf}).promise;let out="";
 for(let i=1;i<=pdf.numPages;i++){const page=await pdf.getPage(i),content=await page.getTextContent();out+=content.items.map(x=>x.str).join(" ")+"\\n";}
 return out;
}
const skillList=["Python","Java","JavaScript","TypeScript","C","C++","C#","SQL","MongoDB","MySQL","PostgreSQL","HTML","CSS","React","Node.js","Express","Flask","FastAPI","Streamlit","Git","GitHub","Machine Learning","Deep Learning","Generative AI","Artificial Intelligence","NLP","TensorFlow","PyTorch","Pandas","NumPy","scikit-learn","Firebase","Android","Kotlin","REST API","OpenAI","Groq","yfinance","NewsAPI","Alpha Vantage","Pinecone"];
function analyzeResume(text){
 const low=text.toLowerCase();
 const containsWholeTerm=(source,term)=>{
   const escaped=term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
   return new RegExp(`(?<![A-Za-z0-9])${escaped}(?![A-Za-z0-9])`,'i').test(source);
 };
 const skills=skillList.filter(skill=>containsWholeTerm(text,skill));
 const projectTerms=["AI-Powered Stock Market Simulator","Stock Market Simulator","CareConnect AI Medical Chatbot","AI Medical Chatbot","AI-Driven Urban Traffic Flow Prediction","Synthetic Video Generation","Music Genre Classification","Loan Eligibility Checker","SmartFin","Secure P2P File Sharing","Interview Twin"];
 const projects=projectTerms.filter(p=>low.includes(p.toLowerCase()));
 const lines=text.split(/\n/).map(x=>x.trim()).filter(Boolean);
 const exp=lines.filter(x=>/intern|internship|developer|engineer|trainee|experience/i.test(x)).slice(0,6);
 candidateProfile={name:(lines.find(x=>/^[A-Z][A-Za-z]+(?:\s+[A-Z][A-Za-z]+){1,3}$/.test(x))||""),skills,projects,technologies:skills,experience:exp,resumeText:text};save();
 document.getElementById("skillsTags").innerHTML=skills.length?skills.map(s=>`<span class="tag">${esc(s)}</span>`).join(""):"<span class='muted'>No known skills detected.</span>";
 document.getElementById("projectList").innerHTML=projects.length?projects.map(p=>`<div class="plan-item">${esc(p)}</div>`).join(""):"<div class='empty'>No known project names detected.</div>";
 const ats=calculateATS(text,skills);document.getElementById("atsScore").textContent=ats.score;document.getElementById("atsMessage").innerHTML=`<b>${esc(ats.message)}</b><p class="muted">${esc(ats.tips.join(" "))}</p>`;
 document.getElementById("resumeQuestions").innerHTML=(personalizedQuestions().slice(0,8).map(q=>`<div class="plan-item">${esc(q.question)}</div>`).join(""))||"<div class='empty'>Add skills or projects to generate personalized questions.</div>";
}
function calculateATS(text,skills){
 const low=text.toLowerCase(),checks=[/email|e-mail/.test(low),/phone|mobile/.test(low),/education/.test(low),/skill/.test(low),/project/.test(low),/experience|internship/.test(low),/github|linkedin/.test(low),skills.length>=3];
 const score=Math.min(100,checks.filter(Boolean).length*10+Math.min(skills.length,8)*3+Math.min(text.split(/\s+/).length/100,1)*10);
 const tips=[];if(!/email|e-mail/.test(low))tips.push("Add a professional email.");if(!/education/.test(low))tips.push("Add an Education section.");if(!/experience|internship/.test(low))tips.push("Add relevant experience or internship details.");if(skills.length<5)tips.push("Make important job-relevant skills easy to find.");
 return {score:Math.round(score),message:score>=75?"Good ATS-style foundation":score>=50?"Needs some improvement":"Needs stronger resume structure",tips};
}
function extractJobKeywords(text){return [...new Set((text.toLowerCase().match(/[a-z][a-z0-9+#.-]{2,}/g)||[]).filter(x=>!["the","and","for","with","that","this","you","are","from","will","our","your","have","has","using","into","work","role","job","team"].includes(x)))];}
function runJobMatch(){
 const jd=document.getElementById("jobDescription").value.trim(),resume=candidateProfile.resumeText.toLowerCase();
 if(!jd){document.getElementById("jobMatchResults").innerHTML="<p class='muted'>Paste a job description first.</p>";return;}
 const keys=extractJobKeywords(jd),matched=keys.filter(k=>resume.includes(k)),missing=keys.filter(k=>!resume.includes(k)).slice(0,30),pct=keys.length?Math.round(matched.length/keys.length*100):0;
 document.getElementById("jobMatchResults").innerHTML=`<div class="match-grid"><div class="list-good"><b>Match: ${pct}%</b><p>${matched.slice(0,30).map(esc).join(", ")||"No strong keyword matches found."}</p></div><div class="list-bad"><b>Potential missing keywords</b><p>${missing.join(", ")||"No major missing keywords detected."}</p></div></div>`;
}
function startVoiceInput(){
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!SR){alert("Voice input is not supported in this browser. Try Chrome or Edge.");return;}
 const r=new SR();r.lang="en-IN";r.continuous=false;r.interimResults=false;r.onresult=e=>{document.getElementById("answerInput").value+=(document.getElementById("answerInput").value?" ":"")+e.results[0][0].transcript;updateWordCount();};r.start();
}
updateDashboard();

