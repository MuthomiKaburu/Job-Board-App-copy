# Project Overview

The Job Board App is a React-based application that allows users to view job postings, create new jobs, edit existing jobs, and delete jobs. It uses JSON Server as a backend to simulate a REST API. Users can also navigate to a detailed view for each job and apply for a position. The app features a fixed navbar, responsive layout, and real-time updates on CRUD operations.

# Technologies Used
Frontend: React, React Router, React Context API
Server: JSON Server
Styling: CSS
Notifications: React Toastify

# Features
Home Page: Displays all job postings with job title, description, company, location, and salary.
 search and filter functionality for job listings.

Job Form: Users can post a new job with full details.
Job Details: Users can view detailed information about each job.
Update Job: Users can edit job details on a dedicated update page.
Delete Job: Users can delete a job directly from the job card.
Apply Page: Users can apply for a job using an application form.


# Project Structure
src/
│
├─ components/
│   ├─ JobCard.jsx        # Displays a single job card with update/delete buttons
│   └─ JobForm.jsx        # Form to create a new job posting
│
├─ context/
│   └─ JobContext.jsx     # Context API to manage job state with JSON Server
│
├─ pages/
│   ├─ HomePage.jsx       # Displays all jobs
│   ├─ JobDetails.jsx     # Shows details for a specific job
│   ├─ UpdateJob.jsx      # Page to edit a specific job
│   └─ Apply.jsx          # Job application form
│
├─ App.jsx                # Routing setup

# CRUD Functionality

Create: JobForm.jsx submits a new job to JSON Server using POST.
Read: HomePage fetches jobs from JSON Server using GET.
Update: UpdateJob.jsx edits job details using PUT and updates context state.
Delete: JobCard delete button removes a job using DELETE and updates context state.
All CRUD operations automatically update the React Context state to reflect changes in the UI.

# Routing & Navigation
React Router handles routing:
/ → Home page
/form → Create job form
/jobs/:id → Job details
/edit/:id → Update job page
/apply/:id → Apply for a job


# Styling & UI
Navbar: Fixed top position, full width, dark background, responsive links.
Job Cards: Display title, description, company, location, salary, and buttons for View, Update, and Delete.
Forms: Clean input fields with validation and error messages.
Notifications: React Toastify shows success/error messages on CRUD operations.

# Challenges Faced
ID Mismatch: JSON Server uses numeric IDs, React created string IDs. Fixed by letting JSON Server generate IDs.
Delete/Update Not Working: Initially due to state not syncing with JSON Server. Fixed with async fetch and state updates.
Navbar Overlap: Content was hiding under the fixed navbar. Fixed with padding-top on the main content container.
Responsive Layout: Ensuring job cards and forms look good on all screen sizes required CSS adjustments.

# Future Improvements
Add user authentication for posting and editing jobs.
Improve mobile responsiveness and design with CSS frameworks like Tailwind.
Add pagination for large numbers of jobs.
Include upload feature for resumes in Apply page.