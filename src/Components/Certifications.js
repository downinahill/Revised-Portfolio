import React from "react";
import { certifications } from "../data"


export default function Certifications() {
    return (
        certifications.map((certification) => (
          <div className="container px-5 py-10 mx-auto text-center">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certifications
        </h1>
        
            <div key={certification.image} className="container px-5 py-10 mx-auto text-center flex items-center justify-center">
                <img 
                className="object-scale-down"
                src={certification.image} alt="Certification"
                />
            </div>
        </div>
        
        
        ))
    
    )
        }