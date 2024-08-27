import { Router } from "express";
import dbConnection from "../config/dbConfig.js";

const trailersRouter = Router();

trailersRouter.get("/marisail_id/", async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [rows] = await connection.query(
      "SELECT DISTINCT marisail_id FROM trailers_identification ORDER BY marisail_id"
    );
    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.trailer_make) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

trailersRouter.get("/trailer_make/", async (req, res) => {
  let connection;
  try {
    let filterTrailerMake = "";
    connection = await dbConnection.getConnection();
    if (req.query.trailer_make) {
      filterTrailerMake = ` WHERE marisail_id = '${req.query.marisail_id}' ORDER BY trailer_make`;
    } else {
      filterTrailerMake = ` ORDER BY trailer_make`;
    }
    const [rows] = await connection.query(
      `SELECT DISTINCT trailer_make FROM trailers_identification ${filterTrailerMake}`
    );

    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.trailer_make) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

trailersRouter.get("/trailer_model/", async (req, res) => {
  let connection;
  let filterTrailersIdAndMake = "";
  try {
    connection = await dbConnection.getConnection();
    if (req.query.trailer_id && req.query.trailer_make) {
      filterTrailersIdAndMake = ` WHERE marisail_id = '${req.query.trailer_id}' AND trailer_make = '${req.query.trailer_make}'`;
    } else if (req.query.trailer_id && !req.query.trailer_make) {
      filterTrailersIdAndMake = ` WHERE marisail_id = '${req.query.trailer_id}'`;
    } else if (!req.query.trailer_id && req.query.trailer_make) {
      filterTrailersIdAndMake = ` WHERE trailer_make = '${req.query.trailer_make}'`;
    } else {
      filterTrailersIdAndMake = ``;
    }
    const [rows] = await connection.query(
      `SELECT DISTINCT trailer_model FROM trailers_identification ${filterTrailersIdAndMake} ORDER BY trailer_model`
    );
    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.trailer_model) });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

trailersRouter.get("/trailer_year/", async (req, res) => {
  let connection;
  let filterOptions = "";
  try {
    connection = await dbConnection.getConnection();
    if (
      req.query.trailer_id &&
      req.query.trailer_make &&
      req.query.trailer_model
    ) {
      filterOptions = ` WHERE marisail_id = '${req.query.trailer_id}' AND trailer_make = '${req.query.trailer_make}' AND trailer_model = '${req.query.trailer_model}'`;
    } else if (
      req.query.trailer_id &&
      !req.query.trailer_make &&
      !req.query.trailer_model
    ) {
      filterOptions = ` WHERE marisail_id = '${req.query.trailer_id}'`;
    } else if (
      !req.query.trailer_id &&
      req.query.trailer_make &&
      !req.query.trailer_model
    ) {
      filterOptions = ` WHERE trailer_make = '${req.query.trailer_make}'`;
    } else if (
      !req.query.trailer_id &&
      !req.query.trailer_make &&
      req.query.trailer_model
    ) {
      filterOptions = ` WHERE trailer_model = '${req.query.trailer_model}'`;
    } else {
      filterOptions = ``;
    }
    const [rows] = await connection.query(
      `SELECT DISTINCT trailer_year FROM trailers_identification ${filterOptions} ORDER BY trailer_year`
    );

    return res.status(200).json({
      ok: true,
      result: rows.map((row) => row.trailer_year),
    });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

trailersRouter.get("/trailer_all/", async (req, res) => {
  let connection;
  let filterOptions = "";
  try {
    connection = await dbConnection.getConnection();
    if (
      req.query.trailer_id &&
      req.query.trailer_make &&
      req.query.trailer_model &&
      req.query.trailer_year
    ) {
      filterOptions = ` WHERE marisail_id = '${req.query.trailer_id}' AND trailer_make = '${req.query.trailer_make}' AND trailer_model = '${req.query.trailer_model}' AND trailer_year = '${req.query.trailer_year}'`;
    } else if (
      req.query.trailer_id &&
      !req.query.trailer_make &&
      !req.query.trailer_model
    ) {
      filterOptions = ` WHERE marisail_id = '${req.query.trailer_id}'`;
    } else if (
      !req.query.trailer_id &&
      req.query.trailer_make &&
      !req.query.trailer_model
    ) {
      filterOptions = ` WHERE trailer_make = '${req.query.trailer_make}'`;
    } else if (
      !req.query.trailer_id &&
      !req.query.trailer_make &&
      req.query.trailer_model
    ) {
      filterOptions = ` WHERE trailer_model = '${req.query.trailer_model}'`;
    } else if (
      !req.query.trailer_id &&
      !req.query.trailer_make &&
      !req.query.trailer_model &&
      req.query.trailer_year
    ) {
      filterOptions = ` WHERE trailer_year = '${req.query.trailer_year}'`;
    } else {
      filterOptions = ``;
    }

    const [trailerId] = await connection.query(
      `SELECT DISTINCT trailer_id FROM trailers_identification ${filterOptions} ORDER BY trailer_id`
    );

    const [tarilerIdentificationFields] = await connection.query(
      `SELECT marisail_id ,trailer_make,trailer_model,trailer_year,wheel_locks,lock_type,alarm_system,gps_tracking_device FROM trailers_identification WHERE trailer_id IN (${trailerId})`
    );

    const [tarilerGeneralFields] = await connection.query(
      `SELECT type,gvwr,load_capacity,length,width,total_height,axle_height_from_ground  FROM trailers_general WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerConstructionMaterialFields] = await connection.query(
      `SELECT frame_material,frame_coating,frame_crossmember_type,frame_weld_type,maximum_angle_of_approach,floor_material,sides_material,roof_material  FROM trailers_construstion_material WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerUserFeaturFields] = await connection.query(
      `SELECT storage,tie_down_points,tool_box,bumper_type FROM trailers_user_feature WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerSpecialFeatureFields] = await connection.query(
      `SELECT hydraulic_tilt,extendable_tongue,adjustable_deck_height,detachable_side_panels FROM trailers_special_feature WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerAdditionalAccessoriesFields] = await connection.query(
      `SELECT ramp_type,winch_post,splash_guards,fenders,side_rails FROM trailers_additional_accessories WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerCustomizeOptionsFields] = await connection.query(
      `SELECT color,decals,storage_box,lighting_package,suspension_upgrade FROM trailers_customize_options WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerAxelSuspenstionFields] = await connection.query(
      `SELECT axle_type,axle_capacity,axle_seal_type,axle_hub_size,axle_position,suspension_type,suspension_capacity,suspension_adjustment FROM trailers_axel_suspenstion WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerLoadingTransportFields] = await connection.query(
      `SELECT loading_system,bunks,bunk_material,bunk_width,bunk_height_adjustment,bunk_mounting_bracket_material,rollers,roller_material,roller_axle_diameter FROM trailers_loading_transport WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerBrakeSafetyFields] = await connection.query(
      `SELECT brake_type,brake_actuator,brake_line_material,brake_drum_diameter,brake_fluid_type,brakes,coupler_size,coupler_type,coupler_lock_type,hitch_class,,drop_axle_option,hitch_receiver_size,safety_chains,breakaway_system FROM trailers_brake_safety WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerWinchAccessoriesFields] = await connection.query(
      `SELECT winch_type,winch_capacity,winch_rope_length,winch_drum_material,winch_gear_ratio,winch_remote_control,winch_brake_type,winch_cable_type,winch_strap_length,winch_handle_length,winch_mounting FROM trailers_winch_accessories  WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerLightindElectricalFields] = await connection.query(
      `SELECT lighting,light_mounting_position,light_type,electrical_connector_type,electrical_wiring_type,battery_type,battery_charger_type, FROM trailers_lightind_electrical  WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerEnvirnmentCorrosionFields] = await connection.query(
      `SELECT corrosion_protection,rust_inhibitors FROM trailers_envirnment_corrosion  WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerMaintanceFeatureFields] = await connection.query(
      `SELECT grease_points,bearing_type,maintenance_schedule FROM trailers_maintance_feature  WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerPerformanceHandlingFields] = await connection.query(
      `SELECT maximum_speed_rating,turning_radius FROM trailers_performance_handling  WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerDocumentationFields] = await connection.query(
      `SELECT owner_manual,warranty FROM trailers_documentation  WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerTongueFields] = await connection.query(
      `SELECT tongue_material,tongue_shape,tongue_jack_wheel_size,tongue_jack_type,tongue_weight,tongue_weight_ratio FROM trailers_Tongue WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerTyresWheelsFields] = await connection.query(
      `SELECT tyre_size,tyre_load_range,tyre_type,wheel_type,wheel_bolt_pattern,hub_lubrication_system FROM trailers_tyres_wheels WHERE trailer_id IN (${trailerId})`
    );
    const [tarilerRegularComplianceFields] = await connection.query(
      `SELECT dot_compliance,natm_certification,eu_type_approval,adr_compliance, FROM trailers_regular_compliance WHERE trailer_id IN (${trailerId})`
    );

    return res.status(200).json({
      ok: true,
      marisailId: tarilerIdentificationFields.map((row) => row.marisail_id),
      trailerMake: tarilerIdentificationFields.map((row) => row.trailer_make),
      trailerModel: tarilerIdentificationFields.map((row) => row.trailer_model),
      trailerYear: tarilerIdentificationFields.map((row) => row.trailer_year),
      wheelLock: tarilerIdentificationFields.map((row) => row.wheel_locks),
      lockType: tarilerIdentificationFields.map((row) => row.lock_type),
      alarmSystem: tarilerIdentificationFields.map((row) => row.alarm_system),
      gpsTrackingDevice: tarilerIdentificationFields.map(
        (row) => row.gps_tracking_device
      ),

      type: tarilerGeneralFields.map((row) => row.type),
      gvwr: tarilerGeneralFields.map((row) => row.gvwr),
      loadCapacitie: tarilerGeneralFields.map((row) => row.load_capacity),
      length: tarilerGeneralFields.map((row) => row.length),
      width: tarilerGeneralFields.map((row) => row.width),
      totalHeight: tarilerGeneralFields.map((row) => row.total_height),
      axleHeightsFromGround: tarilerGeneralFields.map(
        (row) => row.axle_height_from_ground
      ),

      frameMaterial: tarilerConstructionMaterialFields.map(
        (row) => row.frame_material
      ),
      frameCoating: tarilerConstructionMaterialFields.map(
        (row) => row.frame_coating
      ),
      frameCrossmemberType: tarilerConstructionMaterialFields.map(
        (row) => row.frame_crossmember_type
      ),
      frameWeldType: tarilerConstructionMaterialFields.map(
        (row) => row.frame_weld_type
      ),
      maximumAnglesOfApproach: tarilerConstructionMaterialFields.map(
        (row) => row.maximum_angle_of_approach
      ),
      floorMaterial: tarilerConstructionMaterialFields.map(
        (row) => row.floor_material
      ),
      sidesMaterial: tarilerConstructionMaterialFields.map(
        (row) => row.sides_material
      ),
      roofMaterial: tarilerConstructionMaterialFields.map(
        (row) => row.roof_material
      ),

      storage: tarilerUserFeaturFields.map((row) => row.storage),
      tieDownPoint: tarilerUserFeaturFields.map((row) => row.tie_down_points),
      toolBoxe: tarilerUserFeaturFields.map((row) => row.tool_box),
      bumperType: tarilerUserFeaturFields.map((row) => row.bumper_type),

      hydraulicTilt: tarilerSpecialFeatureFields.map(
        (row) => row.hydraulic_tilt
      ),
      extendableTongue: tarilerSpecialFeatureFields.map(
        (row) => row.extendable_tongue
      ),
      adjustableDeckHeight: tarilerSpecialFeatureFields.map(
        (row) => row.adjustable_deck_height
      ),
      detachableSidePanel: tarilerSpecialFeatureFields.map(
        (row) => row.detachable_side_panels
      ),

      rampType: tarilerAdditionalAccessoriesFields.map((row) => row.ramp_type),
      winchPost: tarilerAdditionalAccessoriesFields.map(
        (row) => row.winch_post
      ),
      splashGuard: tarilerAdditionalAccessoriesFields.map(
        (row) => row.splash_guards
      ),
      fender: tarilerAdditionalAccessoriesFields.map((row) => row.fenders),
      sideRail: tarilerAdditionalAccessoriesFields.map((row) => row.side_rails),

      color: tarilerCustomizeOptionsFields.map((row) => row.color),
      decal: tarilerCustomizeOptionsFields.map((row) => row.decals),
      storageBoxe: tarilerCustomizeOptionsFields.map((row) => row.storage_box),
      lightingPackage: tarilerCustomizeOptionsFields.map(
        (row) => row.lighting_package
      ),
      suspensionUpgrade: tarilerCustomizeOptionsFields.map(
        (row) => row.suspension_upgrade
      ),

      axleType: tarilerAxelSuspenstionFields.map((row) => row.axle_type),
      axleCapacitie: tarilerAxelSuspenstionFields.map(
        (row) => row.axle_capacity
      ),
      axleSealType: tarilerAxelSuspenstionFields.map(
        (row) => row.axle_seal_type
      ),
      axleHubSize: tarilerAxelSuspenstionFields.map((row) => row.axle_hub_size),
      axlePosition: tarilerAxelSuspenstionFields.map(
        (row) => row.axle_position
      ),
      suspensionType: tarilerAxelSuspenstionFields.map(
        (row) => row.suspension_type
      ),
      suspensionCapacitie: tarilerAxelSuspenstionFields.map(
        (row) => row.suspension_capacity
      ),
      suspensionAdjustment: tarilerAxelSuspenstionFields.map(
        (row) => row.suspension_adjustment
      ),

      loadingSystem: tarilerLoadingTransportFields.map(
        (row) => row.loading_system
      ),
      bunk: tarilerLoadingTransportFields.map((row) => row.bunks),
      bunkMaterial: tarilerLoadingTransportFields.map(
        (row) => row.bunk_material
      ),
      bunkWidth: tarilerLoadingTransportFields.map((row) => row.bunk_width),
      bunkHeightAdjustment: tarilerLoadingTransportFields.map(
        (row) => row.bunk_height_adjustment
      ),
      bunkMountingBracketMaterial: tarilerLoadingTransportFields.map(
        (row) => row.bunk_mounting_bracket_material
      ),
      roller: tarilerLoadingTransportFields.map((row) => row.rollers),
      rollerMaterial: tarilerLoadingTransportFields.map(
        (row) => row.roller_material
      ),
      rollerAxleDiameter: tarilerLoadingTransportFields.map(
        (row) => row.roller_axle_diameter
      ),

      brakeType: tarilerBrakeSafetyFields.map((row) => row.brake_type),
      brakeActuator: tarilerBrakeSafetyFields.map((row) => row.brake_actuator),
      brakeLineMaterial: tarilerBrakeSafetyFields.map(
        (row) => row.brake_line_material
      ),
      brakeDrumDiameter: tarilerBrakeSafetyFields.map(
        (row) => row.brake_drum_diameter
      ),
      brakeFluidType: tarilerBrakeSafetyFields.map(
        (row) => row.brake_fluid_type
      ),
      brake: tarilerBrakeSafetyFields.map((row) => row.brakes),
      couplerSize: tarilerBrakeSafetyFields.map((row) => row.coupler_size),
      couplerType: tarilerBrakeSafetyFields.map((row) => row.coupler_type),
      couplerLockType: tarilerBrakeSafetyFields.map(
        (row) => row.coupler_lock_type
      ),
      hitchClasse: tarilerBrakeSafetyFields.map((row) => row.hitch_class),
      dropAxleOption: tarilerBrakeSafetyFields.map(
        (row) => row.drop_axle_option
      ),
      hitchReceiverSize: tarilerBrakeSafetyFields.map(
        (row) => row.hitch_receiver_size
      ),
      safetyChain: tarilerBrakeSafetyFields.map((row) => row.safety_chains),
      breakawaySystem: tarilerBrakeSafetyFields.map(
        (row) => row.breakaway_system
      ),

      winchType: tarilerWinchAccessoriesFields.map((row) => row.winch_type),
      winchCapacitie: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_capacity
      ),
      winchRopeLength: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_rope_length
      ),
      winchDrumMaterial: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_drum_material
      ),
      winchGearRatio: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_gear_ratio
      ),
      winchRemoteControl: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_remote_control
      ),
      winchBrakeType: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_brake_type
      ),
      winchCableType: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_cable_type
      ),
      winchStrapLength: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_strap_length
      ),
      winchHandleLength: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_handle_length
      ),
      winchMounting: tarilerWinchAccessoriesFields.map(
        (row) => row.winch_mounting
      ),

      lighting: tarilerLightindElectricalFields.map((row) => row.lighting),
      lightMountingPosition: tarilerLightindElectricalFields.map(
        (row) => row.light_mounting_position
      ),
      lightType: tarilerLightindElectricalFields.map((row) => row.light_type),
      electricalConnectorType: tarilerLightindElectricalFields.map(
        (row) => row.electrical_connector_type
      ),
      electricalWiringType: tarilerLightindElectricalFields.map(
        (row) => row.electrical_wiring_type
      ),
      batteryType: tarilerLightindElectricalFields.map(
        (row) => row.battery_type
      ),
      batteryChargerType: tarilerLightindElectricalFields.map(
        (row) => row.battery_charger_type
      ),

      corrosionProtection: tarilerEnvirnmentCorrosionFields.map(
        (row) => row.corrosion_protection
      ),
      rustInhibitor: tarilerEnvirnmentCorrosionFields.map(
        (row) => row.rust_inhibitors
      ),

      greasePoint: tarilerMaintanceFeatureFields.map(
        (row) => row.grease_points
      ),
      bearingType: tarilerMaintanceFeatureFields.map((row) => row.bearing_type),
      maintenanceSchedule: tarilerMaintanceFeatureFields.map(
        (row) => row.maintenance_schedule
      ),
      maximumSpeedRating: tarilerPerformanceHandlingFields.map(
        (row) => row.maximum_speed_rating
      ),
      turningRadiu: tarilerPerformanceHandlingFields.map(
        (row) => row.turning_radius
      ),

      ownerManual: tarilerDocumentationFields.map((row) => row.owner_manual),
      warrantie: tarilerDocumentationFields.map((row) => row.warranty),

      tongueMaterial: tarilerTongueFields.map((row) => row.tongue_material),
      tongueShape: tarilerTongueFields.map((row) => row.tongue_shape),
      tongueJackWheelSize: tarilerTongueFields.map(
        (row) => row.tongue_jack_wheel_size
      ),
      tongueJackType: tarilerTongueFields.map((row) => row.tongue_jack_type),
      tongueWeight: tarilerTongueFields.map((row) => row.tongue_weight),
      tongueWeightRatio: tarilerTongueFields.map(
        (row) => row.tongue_weight_ratio
      ),

      tyreSize: tarilerTyresWheelsFields.map((row) => row.tyre_size),
      tyreLoadRange: tarilerTyresWheelsFields.map((row) => row.tyre_load_range),
      tyreType: tarilerTyresWheelsFields.map((row) => row.tyre_type),
      wheelType: tarilerTyresWheelsFields.map((row) => row.wheel_type),
      wheelBoltPattern: tarilerTyresWheelsFields.map(
        (row) => row.wheel_bolt_pattern
      ),
      hubLubricationSystem: tarilerTyresWheelsFields.map(
        (row) => row.hub_lubrication_system
      ),

      dotCompliance: tarilerRegularComplianceFields.map(
        (row) => row.dot_compliance
      ),
      natmCertification: tarilerRegularComplianceFields.map(
        (row) => row.natm_certification
      ),
      euTypeApproval: tarilerRegularComplianceFields.map(
        (row) => row.eu_type_approval
      ),
      adrCompliance: tarilerRegularComplianceFields.map(
        (row) => row.adr_compliance
      ),
    });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

export default trailersRouter;
