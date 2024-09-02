import { Router } from "express";
import dbConnection from "../config/dbConfig.js";

const trailersRouter = Router();

trailersRouter.get("/All/", async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [rows] = await connection.query("SELECT * FROM trailers");
    return res.status(200).json({
      ok: true,
      MarisailID: rows
        .filter((row) => row.MarisailID !== null && row.MarisailID !== "")
        .map((row) => row.MarisailID),
      Make: rows
        .filter((row) => row.Make !== null && row.Make !== "")
        .map((row) => row.Make),
      Model: rows
        .filter((row) => row.Model !== null && row.Model !== "")
        .map((row) => row.Model),
      Year: rows
        .filter((row) => row.Year !== null && row.Year !== "")
        .map((row) => row.Year),
      Type: rows
        .filter((row) => row.Type !== null && row.Type !== "")
        .map((row) => row.Type),
      GVWR: rows
        .filter((row) => row.GVWR !== null && row.GVWR !== "")
        .map((row) => row.GVWR),
      LoadCapacity: rows
        .filter((row) => row.LoadCapacity !== null && row.LoadCapacity !== "")
        .map((row) => row.LoadCapacity),
      Length: rows
        .filter((row) => row.Length !== null && row.Length !== "")
        .map((row) => row.Length),
      Width: rows
        .filter((row) => row.Width !== null && row.Width !== "")
        .map((row) => row.Width),
      FrameMaterial: rows
        .filter((row) => row.FrameMaterial !== null && row.FrameMaterial !== "")
        .map((row) => row.FrameMaterial),
      FrameCoating: rows
        .filter((row) => row.FrameCoating !== null && row.FrameCoating !== "")
        .map((row) => row.FrameCoating),
      FrameCrossmemberType: rows
        .filter(
          (row) =>
            row.FrameCrossmemberType !== null && row.FrameCrossmemberType !== ""
        )
        .map((row) => row.FrameCrossmemberType),
      FrameWeldType: rows
        .filter((row) => row.FrameWeldType !== null && row.FrameWeldType !== "")
        .map((row) => row.FrameWeldType),
      MaximumAngleofApproach: rows
        .filter(
          (row) =>
            row.MaximumAngleofApproach !== null &&
            row.MaximumAngleofApproach !== ""
        )
        .map((row) => row.MaximumAngleofApproach),
      FloorMaterial: rows
        .filter((row) => row.FloorMaterial !== null && row.FloorMaterial !== "")
        .map((row) => row.FloorMaterial),
      SidesMaterial: rows
        .filter((row) => row.SidesMaterial !== null && row.SidesMaterial !== "")
        .map((row) => row.SidesMaterial),
      RoofMaterial: rows
        .filter((row) => row.RoofMaterial !== null && row.RoofMaterial !== "")
        .map((row) => row.RoofMaterial),
      GreasePoints: rows
        .filter((row) => row.GreasePoints !== null && row.GreasePoints !== "")
        .map((row) => row.GreasePoints),
      BearingType: rows
        .filter((row) => row.BearingType !== null && row.BearingType !== "")
        .map((row) => row.BearingType),
      MaintenanceSchedule: rows
        .filter(
          (row) =>
            row.MaintenanceSchedule !== null && row.MaintenanceSchedule !== ""
        )
        .map((row) => row.MaintenanceSchedule),
      Storage: rows
        .filter((row) => row.Storage !== null && row.Storage !== "")
        .map((row) => row.Storage),
      TieDownPoints: rows
        .filter((row) => row.TieDownPoints !== null && row.TieDownPoints !== "")
        .map((row) => row.TieDownPoints),
      ToolBox: rows
        .filter((row) => row.ToolBox !== null && row.ToolBox !== "")
        .map((row) => row.ToolBox),
      BumperType: rows
        .filter((row) => row.BumperType !== null && row.BumperType !== "")
        .map((row) => row.BumperType),
      RampType: rows
        .filter((row) => row.RampType !== null && row.RampType !== "")
        .map((row) => row.RampType),
      Fenders: rows
        .filter((row) => row.Fenders !== null && row.Fenders !== "")
        .map((row) => row.Fenders),
      Color: rows
        .filter((row) => row.Color !== null && row.Color !== "")
        .map((row) => row.Color),
      Decals: rows
        .filter((row) => row.Decals !== null && row.Decals !== "")
        .map((row) => row.Decals),
      StorageBox: rows
        .filter((row) => row.StorageBox !== null && row.StorageBox !== "")
        .map((row) => row.StorageBox),
      LightingPackage: rows
        .filter(
          (row) => row.LightingPackage !== null && row.LightingPackage !== ""
        )
        .map((row) => row.LightingPackage),
      SuspensionUpgrade: rows
        .filter(
          (row) =>
            row.SuspensionUpgrade !== null && row.SuspensionUpgrade !== ""
        )
        .map((row) => row.SuspensionUpgrade),
      AxleType: rows
        .filter((row) => row.AxleType !== null && row.AxleType !== "")
        .map((row) => row.AxleType),
      AxleCapacity: rows
        .filter((row) => row.AxleCapacity !== null && row.AxleCapacity !== "")
        .map((row) => row.AxleCapacity),
      AxleSealType: rows
        .filter((row) => row.AxleSealType !== null && row.AxleSealType !== "")
        .map((row) => row.AxleSealType),
      AxleHubSize: rows
        .filter((row) => row.AxleHubSize !== null && row.AxleHubSize !== "")
        .map((row) => row.AxleHubSize),
      AxlePosition: rows
        .filter((row) => row.AxlePosition !== null && row.AxlePosition !== "")
        .map((row) => row.AxlePosition),
      SuspensionType: rows
        .filter(
          (row) => row.SuspensionType !== null && row.SuspensionType !== ""
        )
        .map((row) => row.SuspensionType),
      SuspensionCapacity: rows
        .filter(
          (row) =>
            row.SuspensionCapacity !== null && row.SuspensionCapacity !== ""
        )
        .map((row) => row.SuspensionCapacity),
      SuspensionAdjustment: rows
        .filter(
          (row) =>
            row.SuspensionAdjustment !== null && row.SuspensionAdjustment !== ""
        )
        .map((row) => row.SuspensionAdjustment),
      TyreSize: rows
        .filter((row) => row.TyreSize !== null && row.TyreSize !== "")
        .map((row) => row.TyreSize),
      TyreLoadRange: rows
        .filter((row) => row.TyreLoadRange !== null && row.TyreLoadRange !== "")
        .map((row) => row.TyreLoadRange),
      TyreType: rows
        .filter((row) => row.TyreType !== null && row.TyreType !== "")
        .map((row) => row.TyreType),
      WheelType: rows
        .filter((row) => row.WheelType !== null && row.WheelType !== "")
        .map((row) => row.WheelType),
      WheelBoltPattern: rows
        .filter(
          (row) => row.WheelBoltPattern !== null && row.WheelBoltPattern !== ""
        )
        .map((row) => row.WheelBoltPattern),
      HubLubricationSystem: rows
        .filter(
          (row) =>
            row.HubLubricationSystem !== null && row.HubLubricationSystem !== ""
        )
        .map((row) => row.HubLubricationSystem),
      BrakeType: rows
        .filter((row) => row.BrakeType !== null && row.BrakeType !== "")
        .map((row) => row.BrakeType),
      BrakeActuator: rows
        .filter((row) => row.BrakeActuator !== null && row.BrakeActuator !== "")
        .map((row) => row.BrakeActuator),
      BrakeLineMaterial: rows
        .filter(
          (row) =>
            row.BrakeLineMaterial !== null && row.BrakeLineMaterial !== ""
        )
        .map((row) => row.BrakeLineMaterial),
      BrakeDrumDiameter: rows
        .filter(
          (row) =>
            row.BrakeDrumDiameter !== null && row.BrakeDrumDiameter !== ""
        )
        .map((row) => row.BrakeDrumDiameter),
      BrakeFluidType: rows
        .filter(
          (row) => row.BrakeFluidType !== null && row.BrakeFluidType !== ""
        )
        .map((row) => row.BrakeFluidType),
      CouplerSize: rows
        .filter((row) => row.CouplerSize !== null && row.CouplerSize !== "")
        .map((row) => row.CouplerSize),
      CouplerType: rows
        .filter((row) => row.CouplerType !== null && row.CouplerType !== "")
        .map((row) => row.CouplerType),
      CouplerLockType: rows
        .filter(
          (row) => row.CouplerLockType !== null && row.CouplerLockType !== ""
        )
        .map((row) => row.CouplerLockType),
      HitchClass: rows
        .filter((row) => row.HitchClass !== null && row.HitchClass !== "")
        .map((row) => row.HitchClass),
      HitchReceiverSize: rows
        .filter(
          (row) =>
            row.HitchReceiverSize !== null && row.HitchReceiverSize !== ""
        )
        .map((row) => row.HitchReceiverSize),
      SafetyChains: rows
        .filter((row) => row.SafetyChains !== null && row.SafetyChains !== "")
        .map((row) => row.SafetyChains),
      WinchType: rows
        .filter((row) => row.WinchType !== null && row.WinchType !== "")
        .map((row) => row.WinchType),
      WinchCapacity: rows
        .filter((row) => row.WinchCapacity !== null && row.WinchCapacity !== "")
        .map((row) => row.WinchCapacity),
      WinchRopeLength: rows
        .filter(
          (row) => row.WinchRopeLength !== null && row.WinchRopeLength !== ""
        )
        .map((row) => row.WinchRopeLength),
      WinchDrumMaterial: rows
        .filter(
          (row) =>
            row.WinchDrumMaterial !== null && row.WinchDrumMaterial !== ""
        )
        .map((row) => row.WinchDrumMaterial),
      WinchGearRatio: rows
        .filter(
          (row) => row.WinchGearRatio !== null && row.WinchGearRatio !== ""
        )
        .map((row) => row.WinchGearRatio),
      WinchRemoteControl: rows
        .filter(
          (row) =>
            row.WinchRemoteControl !== null && row.WinchRemoteControl !== ""
        )
        .map((row) => row.WinchRemoteControl),
      WinchBrakeType: rows
        .filter(
          (row) => row.WinchBrakeType !== null && row.WinchBrakeType !== ""
        )
        .map((row) => row.WinchBrakeType),
      WinchCableType: rows
        .filter(
          (row) => row.WinchCableType !== null && row.WinchCableType !== ""
        )
        .map((row) => row.WinchCableType),
      WinchStrapLength: rows
        .filter(
          (row) => row.WinchStrapLength !== null && row.WinchStrapLength !== ""
        )
        .map((row) => row.WinchStrapLength),
      WinchHandleLength: rows
        .filter(
          (row) =>
            row.WinchHandleLength !== null && row.WinchHandleLength !== ""
        )
        .map((row) => row.WinchHandleLength),
      WinchMounting: rows
        .filter((row) => row.WinchMounting !== null && row.WinchMounting !== "")
        .map((row) => row.WinchMounting),
      Lighting: rows
        .filter((row) => row.Lighting !== null && row.Lighting !== "")
        .map((row) => row.Lighting),
      LightMountingPosition: rows
        .filter(
          (row) =>
            row.LightMountingPosition !== null &&
            row.LightMountingPosition !== ""
        )
        .map((row) => row.LightMountingPosition),
      LightType: rows
        .filter((row) => row.LightType !== null && row.LightType !== "")
        .map((row) => row.LightType),
      ElectricalConnectorType: rows
        .filter(
          (row) =>
            row.ElectricalConnectorType !== null &&
            row.ElectricalConnectorType !== ""
        )
        .map((row) => row.ElectricalConnectorType),
      ElectricalWiringType: rows
        .filter(
          (row) =>
            row.ElectricalWiringType !== null && row.ElectricalWiringType !== ""
        )
        .map((row) => row.ElectricalWiringType),
      BatteryType: rows
        .filter((row) => row.BatteryType !== null && row.BatteryType !== "")
        .map((row) => row.BatteryType),
      BatteryChargerType: rows
        .filter(
          (row) =>
            row.BatteryChargerType !== null && row.BatteryChargerType !== ""
        )
        .map((row) => row.BatteryChargerType),
      SpareTyreCarrier: rows
        .filter(
          (row) => row.SpareTyreCarrier !== null && row.SpareTyreCarrier !== ""
        )
        .map((row) => row.SpareTyreCarrier),
      SpareTyreSize: rows
        .filter((row) => row.SpareTyreSize !== null && row.SpareTyreSize !== "")
        .map((row) => row.SpareTyreSize),
      SpareTyreMountingLocation: rows
        .filter(
          (row) =>
            row.SpareTyreMountingLocation !== null &&
            row.SpareTyreMountingLocation !== ""
        )
        .map((row) => row.SpareTyreMountingLocation),
      JackType: rows
        .filter((row) => row.JackType !== null && row.JackType !== "")
        .map((row) => row.JackType),
      JackWheelType: rows
        .filter((row) => row.JackWheelType !== null && row.JackWheelType !== "")
        .map((row) => row.JackWheelType),
      JackCapacity: rows
        .filter((row) => row.JackCapacity !== null && row.JackCapacity !== "")
        .map((row) => row.JackCapacity),
      JackLiftHeight: rows
        .filter(
          (row) => row.JackLiftHeight !== null && row.JackLiftHeight !== ""
        )
        .map((row) => row.JackLiftHeight),
      LoadingSystem: rows
        .filter((row) => row.LoadingSystem !== null && row.LoadingSystem !== "")
        .map((row) => row.LoadingSystem),
      Bunks: rows
        .filter((row) => row.Bunks !== null && row.Bunks !== "")
        .map((row) => row.Bunks),
      BunkMaterial: rows
        .filter((row) => row.BunkMaterial !== null && row.BunkMaterial !== "")
        .map((row) => row.BunkMaterial),
      BunkWidth: rows
        .filter((row) => row.BunkWidth !== null && row.BunkWidth !== "")
        .map((row) => row.BunkWidth),
      BunkHeightAdjustment: rows
        .filter(
          (row) =>
            row.BunkHeightAdjustment !== null && row.BunkHeightAdjustment !== ""
        )
        .map((row) => row.BunkHeightAdjustment),
      BunkMountingBracketMaterial: rows
        .filter(
          (row) =>
            row.BunkMountingBracketMaterial !== null &&
            row.BunkMountingBracketMaterial !== ""
        )
        .map((row) => row.BunkMountingBracketMaterial),
      Rollers: rows
        .filter((row) => row.Rollers !== null && row.Rollers !== "")
        .map((row) => row.Rollers),
      RollerMaterial: rows
        .filter(
          (row) => row.RollerMaterial !== null && row.RollerMaterial !== ""
        )
        .map((row) => row.RollerMaterial),
      RollerAxleDiameter: rows
        .filter(
          (row) =>
            row.RollerAxleDiameter !== null && row.RollerAxleDiameter !== ""
        )
        .map((row) => row.RollerAxleDiameter),
      WheelLocks: rows
        .filter((row) => row.WheelLocks !== null && row.WheelLocks !== "")
        .map((row) => row.WheelLocks),
      LockType: rows
        .filter((row) => row.LockType !== null && row.LockType !== "")
        .map((row) => row.LockType),
      AlarmSystem: rows
        .filter((row) => row.AlarmSystem !== null && row.AlarmSystem !== "")
        .map((row) => row.AlarmSystem),
      GPSTrackingDevice: rows
        .filter(
          (row) =>
            row.GPSTrackingDevice !== null && row.GPSTrackingDevice !== ""
        )
        .map((row) => row.GPSTrackingDevice),
      CorrosionProtection: rows
        .filter(
          (row) =>
            row.CorrosionProtection !== null && row.CorrosionProtection !== ""
        )
        .map((row) => row.CorrosionProtection),
      RustInhibitors: rows
        .filter(
          (row) => row.RustInhibitors !== null && row.RustInhibitors !== ""
        )
        .map((row) => row.RustInhibitors),
      MaximumSpeedRating: rows
        .filter(
          (row) =>
            row.MaximumSpeedRating !== null && row.MaximumSpeedRating !== ""
        )
        .map((row) => row.MaximumSpeedRating),
      TurningRadius: rows
        .filter((row) => row.TurningRadius !== null && row.TurningRadius !== "")
        .map((row) => row.TurningRadius),
      TongueMaterial: rows
        .filter(
          (row) => row.TongueMaterial !== null && row.TongueMaterial !== ""
        )
        .map((row) => row.TongueMaterial),
      TongueShape: rows
        .filter((row) => row.TongueShape !== null && row.TongueShape !== "")
        .map((row) => row.TongueShape),
      TongueJackWheelSize: rows
        .filter(
          (row) =>
            row.TongueJackWheelSize !== null && row.TongueJackWheelSize !== ""
        )
        .map((row) => row.TongueJackWheelSize),
      TongueJackType: rows
        .filter(
          (row) => row.TongueJackType !== null && row.TongueJackType !== ""
        )
        .map((row) => row.TongueJackType),
      TongueWeight: rows
        .filter((row) => row.TongueWeight !== null && row.TongueWeight !== "")
        .map((row) => row.TongueWeight),
      TongueWeightRatio: rows
        .filter(
          (row) =>
            row.TongueWeightRatio !== null && row.TongueWeightRatio !== ""
        )
        .map((row) => row.TongueWeightRatio),
      OwnerManual: rows
        .filter((row) => row.OwnerManual !== null && row.OwnerManual !== "")
        .map((row) => row.OwnerManual),
      Warranty: rows
        .filter((row) => row.Warranty !== null && row.Warranty !== "")
        .map((row) => row.Warranty),
    });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  } finally {
    connection.release();
  }
});


trailersRouter.get("/marisail_id/", async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [rows] = await connection.query(
      "SELECT DISTINCT marisail_id FROM trailers_identification ORDER BY marisail_id"
    );
    return res
      .status(200)
      .json({ ok: true, result: rows.map((row) => row.marisail_id) });
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
export default trailersRouter;
