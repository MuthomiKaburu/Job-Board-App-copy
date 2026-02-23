import React, {createContext,useContext,useEffect,useState} from "react";

const JobContext = createContext();

export default  function JobProvider({children}){
    const [jobs,setJobs] = useState(() =>{
        const storedJobs = localStorage.getItem("jobs");
        return storedJobs ? JSON.parse(storedJobs) : []
    })

    useEffect(() =>{
        localStorage.setItem("jobs",JSON.stringify(jobs))
    },[jobs]);

    function addJob(job){
        setJobs((prevJobs) => [...prevJobs,job])
    }

    function updateJob(updatedJob){
        setJobs((prevJobs)=>
        prevJobs.map((job) =>
            job.id === updatedJob.id ? updatedJob : job
        
        )
        )
    }

    function deleteJob(id) {
        setJobs((prevJobs) =>
            prevJobs.filter((job) => job.id !== id)
        );
    }

    return (
        <JobContext.Provider 
        value={{
            jobs,addJob,updateJob,deleteJob
        }}
        >
            {children}
        </JobContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export  function useJobContext(){
    return useContext(JobContext)
}