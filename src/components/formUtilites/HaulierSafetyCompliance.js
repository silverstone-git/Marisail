import React from "react";

export default function HaulierSafetyCompliance({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h2>Haulier Safety and Compliance</h2>
      <form className="form">
      <div className="set">
        <label>Safety Certifications:</label>
            <input type="text" name="safetyCertifications" onChange={handleChange("safetyCertifications")} value={props.safetyCertifications} />
        </div>

        <div className="set">
            <label>Environmental Regulations Compliance:</label>
            <input type="text" name="environmentalRegulationsCompliance" onChange={handleChange("environmentalRegulationsCompliance")} value={props.environmentalRegulationsCompliance} />
        </div>

        <div className="set">
            <label>Hazardous Materials Handling:</label>
            <input type="text" name="hazardousMaterialsHandling" onChange={handleChange("hazardousMaterialsHandling")} value={props.hazardousMaterialsHandling} />
        </div>

        <div className="set">
            <label>Safety Training Programs:</label>
            <input type="text" name="safetyTrainingPrograms" onChange={handleChange("safetyTrainingPrograms")} value={props.safetyTrainingPrograms} />
        </div>

        <div className="set">
            <label>Accident Reporting Procedure:</label>
            <input type="text" name="accidentReportingProcedure" onChange={handleChange("accidentReportingProcedure")} value={props.accidentReportingProcedure} />
        </div>

        <div className="set">
            <label>Health And Safety Policy:</label>
            <input type="text" name="healthAndSafetyPolicy" onChange={handleChange("healthAndSafetyPolicy")} value={props.healthAndSafetyPolicy} />
        </div>

        <div className="set">
            <label>Safety Audits:</label>
            <input type="text" name="safetyAudits" onChange={handleChange("safetyAudits")} value={props.safetyAudits} />
        </div>

        <div className="set">
            <label>Risk Assessments:</label>
            <input type="text" name="riskAssessments" onChange={handleChange("riskAssessments")} value={props.riskAssessments} />
        </div>

        <div className="set">
            <label>Incident Management:</label>
            <input type="text" name="incidentManagement" onChange={handleChange("incidentManagement")} value={props.incidentManagement} />
        </div>

        <div className="set">
            <label>Compliance Records:</label>
            <input type="text" name="complianceRecords" onChange={handleChange("complianceRecords")} value={props.complianceRecords} />
        </div>

        <div className="set">
            <label>Permits And Licenses:</label>
            <input type="text" name="permitsAndLicenses" onChange={handleChange("permitsAndLicenses")} value={props.permitsAndLicenses} />
        </div>

        <div className="set">
            <label>Transport Regulations Compliance:</label>
            <input type="text" name="transportRegulationsCompliance" onChange={handleChange("transportRegulationsCompliance")} value={props.transportRegulationsCompliance} />
        </div>


      </form>
    </div>
  );
}