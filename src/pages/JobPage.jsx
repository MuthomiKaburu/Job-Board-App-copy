import React from "react";

import {useJobContext} from "../context/JobContext"
import JobCard from "../components/JobCard";
import "./Jobpage.css"

export default function JobPage(){
    const {jobs} = useJobContext();
    console.log(jobs)

    return(
        <>
        <div className="jobs-page">
            <h2>Available Jobs</h2>

             {
            jobs.length === 0 ? <p>No Jobs found</p> :

            (
                <div className="jobs-container">
                    {jobs.map((job)=>(
                        <JobCard key={job.id} job={job}/>
                    ))}
                </div>
            )



        }
        </div>
       
        </>
    )
}