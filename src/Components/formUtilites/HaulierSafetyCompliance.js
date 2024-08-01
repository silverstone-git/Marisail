import React from "react";

export default function HaulierSafetyCompliance({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h1>Haulier Safety and Compliance</h1>
      <form>
        <label>Safety Certifications:</label>
        <input type="text" name="safetyCertifications" onChange={handleChange("safetyCertifications")} value={props.safetyCertifications}/>
        <label>Environmental Regulations Compliance:</label>
        <input type="text" name="environmentalRegulationsCompliance" onChange={handleChange("environmentalRegulationsCompliance")} value={props.environmentalRegulationsCompliance}/>
        <label>Hazardous Materials Handling:</label>
        <input type="text" name="hazardousMaterialsHandling" onChange={handleChange("hazardousMaterialsHandling")} value={props.hazardousMaterialsHandling}/>
        <label>Safety Training Programs:</label>
        <input type="text" name="safetyTrainingPrograms" onChange={handleChange("safetyTrainingPrograms")} value={props.safetyTrainingPrograms}/>
        <label>Accident Reporting Procedure:</label>
        <input type="text" name="accidentReportingProcedure" onChange={handleChange("accidentReportingProcedure")} value={props.accidentReportingProcedure}/>   
        <label>Health And Safety Policy:</label>
        <input type="text" name="healthAndSafetyPolicy" onChange={handleChange("healthAndSafetyPolicy")} value={props.healthAndSafetyPolicy}/>
        <label>Safety Audits:</label>
        <input type="text" name="safetyAudits" onChange={handleChange("safetyAudits")} value={props.safetyAudits}/>
        <label>Risk Assessments:</label>
        <input type="text" name="riskAssessments" onChange={handleChange("riskAssessments")} value={props.riskAssessments}/>
        <label>Incident Management:</label>
        <input type="text" name="incidentManagement" onChange={handleChange("incidentManagement")} value={props.incidentManagement}/>
        <label>Compliance Records:</label>
        <input type="text" name="complianceRecords" onChange={handleChange("complianceRecords")} value={props.complianceRecords}/>
        <label>Permits And Licenses:</label>
        <input type="text" name="permitsAndLicenses" onChange={handleChange("permitsAndLicenses")} value={props.permitsAndLicenses}/>
        <label>Transport Regulations Compliance:</label>
        <input type="text" name="transportRegulationsCompliance" onChange={handleChange("transportRegulationsCompliance")} value={props.transportRegulationsCompliance}/>
      </form>
    </div>
  );
}