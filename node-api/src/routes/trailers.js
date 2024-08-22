import { Router } from "express";
import dbConnection from "../config/dbConfig.js";

const trailersRouter = Router();

trailersRouter.get("/marisail_id/", async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [rows] = await connection.query(
      "SELECT DISTINCT marisail_id FROM trailers ORDER BY marisail_id"
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
      `SELECT DISTINCT trailer_make FROM trailers ${filterTrailerMake}`
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
      `SELECT DISTINCT trailer_model FROM trailers ${filterTrailersIdAndMake} ORDER BY trailer_model`
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
      `SELECT DISTINCT trailer_year FROM trailers ${filterOptions} ORDER BY trailer_year`
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
      `SELECT DISTINCT trailer_id FROM trailers ${filterOptions} ORDER BY trailer_id`
    );

    const [trailersFields] = await connection.query(
      `SELECT marisail_id ,trailer_make,trailer_model,trailer_year,type,gvwr,load_capacity,length,width,frame_material,frame_coating,frame_crossmember_type,frame_weld_type,maximum_angle_of_approach,floor_material,sides_material,roof_material,grease_points,bearing_type,maintenance_schedule,storage,tie_down_points,tool_box,bumper_type,total_height,axle_height_from_ground,hydraulic_tilt,extendable_tongue,adjustable_deck_height,detachable_side_panels,ramp_type,winch_post,splash_guards,fenders,side_rails,color,decals,storage_box,lighting_package,suspension_upgrade,axle_type,axle_capacity,axle_seal_type,axle_hub_size,axle_position,drop_axle_option,suspension_type,suspension_capacity,suspension_adjustment,tyre_size,tyre_load_range,tyre_type,wheel_type,wheel_bolt_pattern,hub_lubrication_system,brake_type,brake_actuator,brake_line_material,brake_drum_diameter,brake_fluid_type,brakes,coupler_size,coupler_type,coupler_lock_type,hitch_class,hitch_receiver_size,safety_chains,breakaway_system,winch_type,winch_capacity,winch_rope_length,winch_drum_material,winch_gear_ratio,winch_remote_control,winch_brake_type,winch_cable_type,winch_strap_length,winch_handle_length,winch_mounting,lighting,light_mounting_position,light_type,electrical_connector_type,electrical_wiring_type,battery_type,battery_charger_type,spare_tyre_carrier,spare_tyre_size,spare_tyre_mounting_location,jack_type,jack_wheel_type,jack_capacity,jack_lift_height,loading_system,bunks,bunk_material,bunk_width,bunk_height_adjustment,bunk_mounting_bracket_material,rollers,roller_material,roller_axle_diameter,wheel_locks,lock_type,alarm_system,gps_tracking_device,corrosion_protection,rust_inhibitors,maximum_speed_rating,turning_radius,tongue_material,tongue_shape,tongue_jack_wheel_size,tongue_jack_type,tongue_weight,tongue_weight_ratio,owner_manual,warranty,dot_compliance,natm_certification,eu_type_approval,adr_compliance, WHERE trailer_id IN (${trailerId})`
    );

    return res.status(200).json({
      ok: true,
      trailerIdData: trailersFields,
    });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});

export default trailersRouter;
