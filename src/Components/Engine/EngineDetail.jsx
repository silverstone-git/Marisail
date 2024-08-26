import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EngineDetailsPanel from "./EngineDetailPanel";

const EngineDetail = () => {
  const { id } = useParams();
  const [engine, setEngine] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEngineDetails = async (id) => {
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
        setError(error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchEngineDetails(id);
    } else {
      setLoading(false);
    }
  }, [id]);

  const mapEngineToPanelData = (engine) => {
    return [
      {
        title: "Engine Details",
        details: {
          "Marisail Vessel ID": engine.marisail_vesselid,
          "Engine Make": engine.engine_make,
          "Engine Model": engine.engine_model,
          "Engine Model Year": engine.engine_modelyear,
          "Engine Type": engine.engine_type,
          "Type Designation": engine.type_designation,
          "Engine Year": engine.engine_year,
          "Engine Serial": engine.engine_serial,
          "CE Design Category": engine.ce_category,
          "Number Drives": engine.number_drives,
          "Number Engines": engine.number_engines,
          "Engine Range (Miles)": engine.engine_range,
          "Cruising Speed (Knots)": engine.cruise_speed,
          "Drive Type": engine.drive_type,
          "Engine Hours": engine.engine_hours,
          "Ignition System (Starting)": engine.ignition_system,
          "Noise Level (dB)": engine.noiselevel_db,
          "Engine Soundproofing Kits": engine.enginesound_proofingkits,
        },
      },
      {
        title: "General",
        details: {
          "Engine Classification": engine.engine_classifiable,
          Certification: engine.engine_certification,
          "Manufacturer Warranty": engine.manufacture_warranty,
          "Engine Serial Number": engine.engine_serial,
          "CE Design Category": engine.ce_category,
          "Number Drives": engine.number_drives,
          "Number Engines": engine.number_engines,
          "Range (Miles)": engine.engine_range,
          "Cruising Speed (Knots)": engine.cruise_speed,
          "Drive Type": engine.drive_type,
          "Ignition System (Starting)": engine.ignition_system,
          "Noise Level (dB)": engine.noiselevel_db,
          "Engine Soundproofing Kits": engine.enginesound_proofingkits,
        },
      },
      {
        title: "Transmission",
        details: {
          "Transmission Type": engine.transmission_type,
          "Gear Shift": engine.gear_shift,
          "Gear Ratio": engine.gear_ratio,
          "Gear Shift Type": engine.gearshift_type,
          "Flywheel SAE": engine.flywheel_SAE,
          "Flywheel Housing": engine.flywheel_housing,
          Camshaft: engine.camshaft,
          "Crankshaft Alloy": engine.crankshaft_alloy,
          "Crankcase Design": engine.crankcase_design,
        },
      },
      {
        title: "Installation and Mounting",
        details: {
          "Engine Mounting Orientation": engine.enginemounting_orientation,
          "Engine Suspension": engine.engine_suspension,
          "Engine Mounting Type": engine.engine_mountingtype,
          "Mounting Bracket Material": engine.mountingbracket_material,
          "Alignment Requirements": engine.alignment_requirements,
          "Engine Block": engine.engine_block,
        },
      },
      {
        title: "Service & Maintenance",
        details: {
          "Scheduled Maintenance Plan": engine.scheduled_maintenanceplan,
          "Service Interval": engine.service_interval,
          "Maintenance Log Requirements": engine.maintenancelog_requirements,
          "Availability of Spare Parts": engine.availability_spareparts,
          "Operation Mode": engine.operation_mode,
          "Last Service Date": engine.last_servicedate,
        },
      },
      {
        title: "Equipment",
        details: {
          "Engine Management System (EMS)": engine.engine_monitoringsystem,
          "Engine Control System": engine.engine_controlsystem,
          "Unit Injectors": engine.unit_injectors,
          Turbocharger: engine.turbocharger,
          Turbocharging: engine.turbocharging,
          "Starter Motor": engine.starter_motor,
          "Protection Covers": engine.protection_covers,
          "Closed Crankcase Ventilation": engine.closed_crankcase_ventilation,
          "Heat Exchanger": engine.heat_exchanger,
          "Heat Exchanger With Expansion Tank":
            engine.heat_exchanger_with_expansion_tank,
          "Sea Water Pump": engine.sea_water_pump,
          "Sea Water-Cooled Charge Air Cooler":
            engine.sea_water_cooled_charge_air_cooler,
          "Working Principle": engine.working_principle,
          "Compression Ratio": engine.compression_ratio,
          "Piston Speed At 1500 RPM": engine.piston_speed_at_1500_rpm,
          "Piston Speed At 1800 RPM": engine.piston_speed_at_1800_rpm,
          "Firing Order": engine.firing_order,
          Pistons: engine.pistons,
          "Connection Rods": engine.connection_rods,
          "Auxiliary Power Take-Off (PTO)": engine.auxiliary_power_takeoff,
          "Remote Control Systems": engine.remote_control_systems,
        },
      },
      {
        title: "Dimensions",
        details: {
          Displacement: engine.displacement,
          "Length (mm)": engine.length,
          "Width (mm)": engine.width,
          "Height (mm)": engine.height,
          "Length From Front End To Edge Of Flywheel Housing (mm)":
            engine.Engine_length,
          "Engine Weight": engine.engine_weight,
          "Dry Weight (Kg)": engine.dry_weight,
          "Weight (Excl Oil And Coolant)": engine.weight_excloil,
          "Weight With Heat Exchanger": engine.weight_heatexchanger,
          "Weight With Keel Cooling": engine.weight_keelcooling,
        },
      },
      {
        title: "Performance",
        details: {
          "Nominal Rating (Kw) (HP)": engine.nominal_rating,
          "Engine Performance": engine.engine_performance,
          "Max Power Output": engine.max_poweroutput,
          "Max. Power (BHP)": engine.max_power,
          "Max. Speed (Knots)": engine.max_speed,
          Supercharged: engine.supercharged,
          "Valve Train": engine.valve_train,
          "Gross Power, Full Load (Kw)": engine.GP_fullloadKW,
          "Gross Power, Full Load (Hp, Metric)": engine.GP_fullloadmetric,
          "Gross Power, Propeller Curve (Kw)": engine.GP_propellercurveKW,
          "Gross Power, Propeller Curve (Hp, Metric)":
            engine.GP_propellercurvemetric,
          "Gross Torque (Nm)": engine.gross_torque,
          "Continuous Power (kW/HP)": engine.continuouspower_KWHP,
          "Maximum Continuous Rating (MCR)": engine.Max_Continuousrating,
          "Engine Speed Range (RPM)": engine.Engine_speedrange,
          "Engine Efficiency": engine.engine_efficiency,
          "Power-to-Weight Ratio": engine.powertoweight_ratio,
        },
      },
      {
        title: "Cylinders",
        details: {
          "Cylinder Configuration": engine.cylinder_configuration,
          "Number Cylinders": engine.number_cylinders,
          "Cylinders And Arrangement": engine.cylinders_arrangement,
          "Number Valves": engine.number_valves,
          "Valve per Cylinder": engine.valve_percylinder,
          "Bore X Stroke": engine.bore_stroke,
          Bore: engine.bore,
          Stroke: engine.stroke,
        },
      },
      {
        title: "RPM",
        details: {
          "Idle RPM": engine.idle_rpm,
          "Rated Speed (RPM)": engine.rated_speed,
          "RPM at Max Power": engine.rpm_maxpower,
        },
      },
      {
        title: "Torque",
        details: {
          "Maximum Torque (Nm)": engine.max_torque,
          "Maximum Torque At Speed (RPM)": engine.max_torquerpm,
          "Torque At Rated Speed (Nm)": engine.torque_ratedspeed,
        },
      },
      {
        title: "Cooling System",
        details: {
          Aftercooled: engine.after_cooled,
          "Cooling System": engine.cooling_system,
          "Closed Cooling System": engine.closed_coolingsystem,
          "Open Cooling System": engine.open_coolingsystem,
          Intercooled: engine.intercooled,
          "Recommended Coolant": engine.recommended_coolant,
          "Type Of Cooling": engine.cooling_type,
          "Heat Exchanger Material": engine.heat_exchangermaterial,
          "Heat Dissipation Rate": engine.heat_dissipationrate,
          "Engine Lubrication": engine.engine_lubrication,
          "Lubrication System": engine.lubrication_system,
          "Cooling Fluid Type": engine.cooling_fluidtype,
          "Cooling System Pressure": engine.cooling_systempressure,
          "Air Filter Type": engine.air_filtertype,
          "Circulation Pump Type": engine.circulation_pumptype,
          "Raw Water Pump Type": engine.rawwater_pumptype,
        },
      },
      {
        title: "Propulsion System",
        details: {
          Propulsion: engine.propulsion,
          Bowthruster: engine.bowthruster,
          "Propulsion System": engine.propulsion_system,
          "Propulsion System Type": engine.propulsion_systemtype,
          "Propeller Diameter": engine.propeller_diameter,
          "Propeller Material": engine.propeller_material,
          "Propeller Pitch": engine.propeller_pitch,
          "Propeller Type": engine.propeller_type,
          "Propeller Shaft Diameter": engine.propeller_shaftdiameter,
          "Gearbox Type": engine.gearbox_type,
          "Transmission Cooling": engine.transmission_cooling,
          "Propeller Blade Material": engine.propeller_bladematerial,
          "Propeller Shaft Material": engine.propeller_shaftmaterial,
          "Steering System": engine.steering_system,
        },
      },
      {
        title: "Safety and Monitoring",
        details: {
          "Engine Monitoring Systems": engine.engine_monitoringsystem,
          "Overheat Protection": engine.overheat_protection,
          "Low Oil Pressure Alarm": engine.lowoil_pressurealarm,
          "Emergency Stop System": engine.emergency_stopsystem,
        },
      },
      {
        title: "Location",
        details: {
          Location: engine.location,
          Distance: engine.distance,
          "Address Details": engine.address_details,
        },
      },
      {
        title: "Payment Terms",
        details: {
          "Payment Terms": engine.payment_terms,
          Currency: engine.currency,
          "Preferred Payment Methods": engine.preferred_payment_methods,
          "Invoice and Receipt Procedures": engine.invoice_receipt_procedures,
        },
      },
      {
        title: "Calculate Price & Pay",
        details: {
          "Price Label": engine.price_label,
          "Price Drop": engine.price_drop,
          Currency: engine.currency,
          VAT: engine.vat,
          "Total Price": engine.total_price,
        },
      },
      {
        title: "Country (Lying)",
        details: {
          "Address Details": engine.address_details,
          Distance: engine.distance,
          "Contact Details": engine.contact_details,
          "Upload Photos": engine.upload_photos,
          "Upload Videos": engine.upload_videos,
        },
      },
    ];
  };
  const images = [
    "https://cdn.pixabay.com/photo/2020/05/29/21/46/seascape-5236865_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/29/21/46/seascape-5236865_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/29/21/46/seascape-5236865_960_720.jpg",
  ];
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!engine) return <p>No engine details available.</p>;

  const panelData = mapEngineToPanelData(engine);

  return (
    <div className="engine-detail-page">
      <div className="engine-main-section">
        <div className="engine-image-gallery">
          <img
            src="../images/engine.jpg"
            alt="Engine"
            className="engine-main-image"
          />
          <div className="engine-thumbnails">
            <img
              src="../images/engine.jpg"
              alt="Thumbnail 1"
              className="thumbnail"
            />
            <img
              src="../images/engine.jpg"
              alt="Thumbnail 2"
              className="thumbnail"
            />
          </div>
        </div>
        <div>
          {panelData.map((section) => (
            <EngineDetailsPanel
              key={section.title}
              title={section.title}
              details={section.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineDetail;
