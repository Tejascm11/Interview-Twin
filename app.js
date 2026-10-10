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

