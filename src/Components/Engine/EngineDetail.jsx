import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EngineDetail = () => {
  const { id } = useParams();
  const [engine, setEngine] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEngineDetails = async (id) => {
      console.log(id);
      try {
        const response = await fetch(
          `http://localhost:3001/api/search_engine/engine-detail/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setEngine(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch engine details:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchEngineDetails(id);
    } else {
      console.error("ID is undefined or invalid");
      setLoading(false);
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!engine) return <p>No engine details available.</p>;

  return (
    <div className="engine-detail-page">
      <div className="engine-main-section">
        <div className="engine-image-gallery">
          <img
            src="https://cdn.pixabay.com/photo/2020/05/29/21/46/seascape-5236865_960_720.jpg"
            alt="Engine"
            className="engine-main-image"
          />
          <div className="engine-thumbnails">
            <img
              src="https://cdn.pixabay.com/photo/2020/05/29/21/46/seascape-5236865_960_720.jpg"
              alt="Thumbnail 1"
              className="thumbnail"
            />
            <img
              src="https://cdn.pixabay.com/photo/2020/05/29/21/46/seascape-5236865_960_720.jpg"
              alt="Thumbnail 2"
              className="thumbnail"
            />
          </div>
        </div>
        <div>
          <h2>Engine Details</h2>

          <p>Marisail Vessel ID: {engine.marisail_vesselid}</p>
          <p>Engine Make: {engine.engine_make}</p>
          <p>Engine Classifiable: {engine.engine_classifiable}</p>
          <p>Engine Certification: {engine.engine_certification}</p>
          <p>Engine Model: {engine.engine_model}</p>
          <p>Manufacture Warranty: {engine.manufacture_warranty}</p>
          <p>Engine Model Year: {engine.engine_modelyear}</p>
          <p>Engine Serial: {engine.engine_serial}</p>
          <p>Engine Type: {engine.engine_type}</p>
          <p>Type Designation: {engine.type_designation}</p>
          <p>Engine Year: {engine.engine_year}</p>
          <p>CE Category: {engine.ce_category}</p>
          <p>Number Drives: {engine.number_drives}</p>
          <p>Number Engines: {engine.number_engines}</p>
          <p>Engine Range: {engine.engine_range}</p>
          <p>Cruise Speed: {engine.cruise_speed}</p>
          <p>Drive Type: {engine.drive_type}</p>
          <p>Engine Hours: {engine.engine_hours}</p>
          <p>Ignition System: {engine.ignition_system}</p>
          <p>Noise Level DB: {engine.noiselevel_db}</p>
          <p>Engine Sound Proofing Kits: {engine.enginesound_proofingkits}</p>
          <p>Engine ID: {engine.engine_id}</p>
          <p>Condition 1: {engine.condition_1}</p>
          <p>Seller: {engine.seller}</p>
          <p>Offered By: {engine.offered_by}</p>
          <p>Last Survey Date: {engine.lastsurvey_date}</p>
          <p>Broker Valuation: {engine.broker_valuation}</p>
          <p>Used Condition: {engine.used_condition}</p>
          <p>Condition Detail: {engine.Condition_detail}</p>
          <p>After Cooled: {engine.after_cooled}</p>
          <p>Cooling System: {engine.cooling_system}</p>
          <p>Closed Cooling System: {engine.closed_coolingsystem}</p>
          <p>Open Cooling System: {engine.open_coolingsystem}</p>
          <p>Intercooled: {engine.intercooled}</p>
          <p>Recommended Coolant: {engine.recommended_coolant}</p>
          <p>Cooling Type: {engine.cooling_type}</p>
          <p>Heat Exchanger Material: {engine.heat_exchangermaterial}</p>
          <p>Heat Dissipation Rate: {engine.heat_dissipationrate}</p>
          <p>Engine Lubrication: {engine.engine_lubrication}</p>
          <p>Lubrication System: {engine.lubrication_system}</p>
          <p>Cooling Fluid Type: {engine.cooling_fluidtype}</p>
          <p>Cooling System Pressure: {engine.cooling_systempressure}</p>
          <p>Air Filter Type: {engine.air_filtertype}</p>
          <p>Circulation Pump Type: {engine.circulation_pumptype}</p>
          <p>Raw Water Pump Type: {engine.rawwater_pumptype}</p>
          <p>Displacement: {engine.displacement}</p>
          <p>Length: {engine.length}</p>
          <p>Width: {engine.width}</p>
          <p>Height: {engine.height}</p>
          <p>Engine Length: {engine.Engine_length}</p>
          <p>Engine Weight: {engine.engine_weight}</p>
          <p>Dry Weight: {engine.dry_weight}</p>
          <p>Weight Excluding Oil: {engine.weight_excloil}</p>
          <p>Weight Heat Exchanger: {engine.weight_heatexchanger}</p>
          <p>Weight Keel Cooling: {engine.weight_keelcooling}</p>
          <p>Alternator: {engine.alternator}</p>
          <p>Alternator Output: {engine.alternator_output}</p>
          <p>Battery Type: {engine.battery_type}</p>
          <p>Battery Voltage: {engine.battery_voltage}</p>
          <p>Alternator Output Amps: {engine.alternator_outputAMPS}</p>
          <p>Starter Motor Voltage: {engine.starter_MotorVoltage}</p>
          <p>ECU Model: {engine.ECU_Model}</p>
          <p>Battery Charging System: {engine.Battery_ChargingSystem}</p>
          <p>Integrated Generator: {engine.integrated_generator}</p>
          <p>Battery Voltage Number: {engine.battery_voltagenumber}</p>
          <p>Emission Compliance: {engine.Emission_compliance}</p>
          <p>Exhaust System: {engine.exhaust_system}</p>
          <p>Exhaust System Type: {engine.exhaust_systemtype}</p>
          <p>Exhaust Gas Aftertreatment: {engine.exhaustgas_aftertreatment}</p>
          <p>Exhaust Gas Status: {engine.exhaustGas_status}</p>
          <p>Exhaust Valve Timing: {engine.exhaust_valvetiming}</p>
          <p>Intake Valve Timing: {engine.intake_valvetiming}</p>
          <p>
            Emission Control Technology: {engine.emission_controltechnology}
          </p>
          <p>NOx Emission: {engine.NOx_Emission}</p>
          <p>SOx Emission: {engine.SOx_Emission}</p>
          <p>COx Emission: {engine.COx_Emission}</p>
          <p>
            Compliance International Maritime:{" "}
            {engine.compliance_internationalmaritime}
          </p>
          <p>EFI: {engine.EFI}</p>
          <p>Fuel Prefilter: {engine.fuel_prefilter}</p>
          <p>Fuel Filter: {engine.fuel_filter}</p>
          <p>Fuel Filter Type: {engine.fuel_filtertype}</p>
          <p>Fuel Reserve: {engine.fuel_reserve}</p>
          <p>Fuel System: {engine.fuel_system}</p>
          <p>Fuel Tank Capacity: {engine.fuel_tankcapacity}</p>
          <p>Fuel Type: {engine.fuel_type}</p>
          <p>Lowest Fuel Consumption: {engine.lowest_fuelconsumption}</p>
          <p>Fuel Consumption Rate: {engine.fuel_consumptionrate}</p>
          <p>FC Full Load: {engine.FC_fullload}</p>
          <p>Fuel Injection System Type: {engine.FuelInjection_systemtype}</p>
          <p>Fuel Delivery Pressure: {engine.Fuel_deliverypressure}</p>
          <p>Fuel Tank Material: {engine.Fuel_tankmaterial}</p>
          <p>Fuel Line Diameter: {engine.fuel_linediameter}</p>
          <p>FC 3/4 Load: {engine.FC_3Quarterload}</p>
          <p>FC 1/2 Load: {engine.FC_halfload}</p>
          <p>FC Propeller Curve: {engine.FC_propellercurve}</p>
          <p>Heat Rejection: {engine.heat_rejection}</p>
          <p>Recommended Fuel: {engine.recommended_fuel}</p>
          <p>Automatic Updates: {engine.automatic_updates}</p>
          <p>Scheduled Maintenance Plan: {engine.scheduled_maintenanceplan}</p>
          <p>Service Interval: {engine.service_interval}</p>
          <p>
            Maintenance Log Requirements: {engine.maintenancelog_requirements}
          </p>
          <p>Availability Spare Parts: {engine.availability_spareparts}</p>
          <p>Operation Mode: {engine.operation_mode}</p>
          <p>Last Service Date: {engine.last_servicedate}</p>
          <p>Oil Filter: {engine.oil_filter}</p>
          <p>Oil Filter Type: {engine.oil_filtertype}</p>
          <p>Centrifugal Oil Cleaner: {engine.centrifugal_oilcleaner}</p>
          <p>Oil Cooler: {engine.oil_cooler}</p>
          <p>Oil Filler: {engine.oil_filler}</p>
          <p>Oil Dipstick: {engine.oil_dipstick}</p>
          <p>Recommended Oil: {engine.recommended_oil}</p>
          <p>Oil Capacity: {engine.oil_capacity}</p>
          <p>Oil Change Interval: {engine.oil_changeinterval}</p>
          <p>Oil Cooling Method: {engine.oil_coolingmethod}</p>
          <p>Lubrication Oil Pressure: {engine.lubrication_oilpressure}</p>
          <p>Oil Filter Bypass Valve: {engine.oilfilter_bypassvalve}</p>
          <p>Nominal Rating: {engine.nominal_rating}</p>
          <p>Engine Performance: {engine.engine_performance}</p>
          <p>Max Power Output: {engine.max_poweroutput}</p>
          <p>Max Power: {engine.max_power}</p>
          <p>Max Speed: {engine.max_speed}</p>
          <p>Supercharged: {engine.supercharged}</p>
          <p>Valve Train: {engine.valve_train}</p>
          <p>GP Full Load kW: {engine.GP_fullloadKW}</p>
          <p>GP Full Load Metric: {engine.GP_fullloadmetric}</p>
          <p>GP Propeller Curve kW: {engine.GP_propellercurveKW}</p>
          <p>GP Propeller Curve Metric: {engine.GP_propellercurvemetric}</p>
          <p>Gross Torque: {engine.gross_torque}</p>
          <p>Continuous Power kW/HP: {engine.continuouspower_KWHP}</p>
          <p>Max Continuous Rating: {engine.Max_Continuousrating}</p>
          <p>Engine Speed Range: {engine.Engine_speedrange}</p>
          <p>Engine Efficiency: {engine.engine_efficiency}</p>
          <p>Power to Weight Ratio: {engine.powertoweight_ratio}</p>
          <p>Cylinder Configuration: {engine.cylinder_configuration}</p>
          <p>Number Cylinders: {engine.number_cylinders}</p>
          <p>Cylinders Arrangement: {engine.cylinders_arrangement}</p>
          <p>Number Valves: {engine.number_valves}</p>
          <p>Valve Per Cylinder: {engine.valve_percylinder}</p>
          <p>Bore Stroke: {engine.bore_stroke}</p>
          <p>Bore: {engine.bore}</p>
          <p>Idle RPM: {engine.idle_rpm}</p>
          <p>Rated Speed: {engine.rated_speed}</p>
          <p>RPM Max Power: {engine.rpm_maxpower}</p>
          <p>Max Torque: {engine.max_torque}</p>
          <p>Max Torque RPM: {engine.max_torquerpm}</p>
          <p>Torque Rated Speed: {engine.torque_ratedspeed}</p>
          <p>Propulsion: {engine.propulsion}</p>
          <p>Bow Thruster: {engine.bowthruster}</p>
          <p>Propulsion System: {engine.propulsion_system}</p>
          <p>Propulsion System Type: {engine.propulsion_systemtype}</p>
          <p>Propeller Diameter: {engine.propeller_diameter}</p>
          <p>Propeller Material: {engine.propeller_material}</p>
          <p>Propeller Pitch: {engine.propeller_pitch}</p>
          <p>Propeller Type: {engine.propeller_type}</p>
          <p>Propeller Shaft Diameter: {engine.propeller_shaftdiameter}</p>
          <p>Gearbox Type: {engine.gearbox_type}</p>
          <p>Transmission Cooling: {engine.transmission_cooling}</p>
          <p>Propeller Blade Material: {engine.propeller_bladematerial}</p>
          <p>Propeller Shaft Material: {engine.propeller_shaftmaterial}</p>
          <p>Steering System: {engine.steering_system}</p>
          <p>Steering Control Type: {engine.steering_controltype}</p>
          <p>Trim System: {engine.trim_system}</p>
          <p>Trim Tab Material: {engine.trim_tabmaterial}</p>
          <p>Trim Tab Type: {engine.trim_tab_type}</p>
          <p>Engine Monitoring System: {engine.engine_monitoringsystem}</p>
          <p>Overheat Protection: {engine.overheat_protection}</p>
          <p>Low Oil Pressure Alarm: {engine.lowoil_pressurealarm}</p>
          <p>Emergency Stop System: {engine.emergency_stopsystem}</p>
          <p>Transmission Type: {engine.transmission_type}</p>
          <p>Gear Shift: {engine.gear_shift}</p>
          <p>Gear Ratio: {engine.gear_ratio}</p>
          <p>Gearshift Type: {engine.gearshift_type}</p>
          <p>Flywheel SAE: {engine.flywheel_SAE}</p>
          <p>Flywheel Housing: {engine.flywheel_housing}</p>
          <p>Camshaft: {engine.camshaft}</p>
          <p>Crankshaft Alloy: {engine.crankshaft_alloy}</p>
          <p>Crankcase Design: {engine.crankcase_design}</p>
        </div>
      </div>
    </div>
  );
};

export default EngineDetail;
