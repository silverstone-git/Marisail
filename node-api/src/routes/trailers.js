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

trailersRouter.get("/all2", async (req, res) => {
  let connection;
  try {
    connection = await dbConnection.getConnection();
    const [rows] = await connection.query(
      `
      SELECT
        MarisailID,
        Make,
        Model,
        Year,
        Type,
        GVWR,
        LoadCapacity,
        Length,
        Width,
        FrameMaterial,
        FrameCoating,
        FrameCrossmemberType,
        FrameWeldType,
        MaximumAngleofApproach,
        FloorMaterial,
        SidesMaterial,
        RoofMaterial,
        GreasePoints,
        BearingType,
        MaintenanceSchedule,
        Storage,
        TieDownPoints,
        ToolBox,
        BumperType,
        RampType,
        WinchPost,
        Fenders,
        Color,
        Decals,
        StorageBox,
        LightingPackage,
        SuspensionUpgrade,
        AxleType,
        AxleCapacity,
        AxleSealType,
        AxleHubSize,
        AxlePosition,
        SuspensionType,
        SuspensionCapacity,
        SuspensionAdjustment,
        TyreSize,
        TyreLoadRange,
        TyreType,
        WheelType,
        WheelBoltPattern,
        HubLubricationSystem,
        BrakeType,
        BrakeActuator,
        BrakeLineMaterial,
        BrakeDrumDiameter,
        BrakeFluidType,
        CouplerSize,
        CouplerType,
        CouplerLockType,
        HitchClass,
        HitchReceiverSize,
        SafetyChains,
        WinchType,
        WinchCapacity,
        WinchRopeLength,
        WinchDrumMaterial,
        WinchGearRatio,
        WinchRemoteControl,
        WinchBrakeType,
        WinchCableType,
        WinchStrapLength,
        WinchHandleLength,
        WinchMounting,
        Lighting,
        LightMountingPosition,
        LightType,
        ElectricalConnectorType,
        ElectricalWiringType,
        BatteryType,
        BatteryChargerType,
        SpareTyreCarrier,
        SpareTyreSize,
        SpareTyreMountingLocation,
        JackType,
        JackWheelType,
        JackCapacity,
        JackLiftHeight,
        LoadingSystem,
        Bunks,
        BunkMaterial,
        BunkWidth,
        BunkHeightAdjustment,
        BunkMountingBracketMaterial,
        Rollers,
        RollerMaterial,
        RollerAxleDiameter,
        WheelLocks,
        LockType,
        AlarmSystem,
        GPSTrackingDevice,
        CorrosionProtection,
        RustInhibitors,
        MaximumSpeedRating,
        TurningRadius,
        TongueMaterial,
        TongueShape,
        TongueJackWheelSize,
        TongueJackType,
        TongueWeight,
        TongueWeightRatio,
        OwnerManual,
        Warranty,
        DOTCompliance,
        NATMCertification,
        EUTypeApproval,
        ADRCompliance 
      FROM trailers_2
      `
    );

    return res.status(200).json({
      ok: true,
      MarisailID: rows[0].MarisailID,
      Make: rows[0].Make,
      Model: rows[0].Model,
      Year: rows[0].Year,
      Type: rows[0].Type,
      GVWR: rows[0].GVWR,
      LoadCapacity: rows[0].LoadCapacity,
      Length: rows[0].Length,
      Width: rows[0].Width,
      FrameMaterial: rows[0].FrameMaterial,
      FrameCoating: rows[0].FrameCoating,
      FrameCrossmemberType: rows[0].FrameCrossmemberType,
      FrameWeldType: rows[0].FrameWeldType,
      MaximumAngleofApproach: rows[0].MaximumAngleofApproach,
      FloorMaterial: rows[0].FloorMaterial,
      SidesMaterial: rows[0].SidesMaterial,
      RoofMaterial: rows[0].RoofMaterial,
      GreasePoints: rows[0].GreasePoints,
      BearingType: rows[0].BearingType,
      MaintenanceSchedule: rows[0].MaintenanceSchedule,
      Storage: rows[0].Storage,
      TieDownPoints: rows[0].TieDownPoints,
      ToolBox: rows[0].ToolBox,
      BumperType: rows[0].BumperType,
      RampType: rows[0].RampType,
      WinchPost: rows[0].WinchPost,
      Fenders: rows[0].Fenders,
      Color: rows[0].Color,
      Decals: rows[0].Decals,
      StorageBox: rows[0].StorageBox,
      LightingPackage: rows[0].LightingPackage,
      SuspensionUpgrade: rows[0].SuspensionUpgrade,
      AxleType: rows[0].AxleType,
      AxleCapacity: rows[0].AxleCapacity,
      AxleSealType: rows[0].AxleSealType,
      AxleHubSize: rows[0].AxleHubSize,
      AxlePosition: rows[0].AxlePosition,
      SuspensionType: rows[0].SuspensionType,
      SuspensionCapacity: rows[0].SuspensionCapacity,
      SuspensionAdjustment: rows[0].SuspensionAdjustment,
      TyreSize: rows[0].TyreSize,
      TyreLoadRange: rows[0].TyreLoadRange,
      TyreType: rows[0].TyreType,
      WheelType: rows[0].WheelType,
      WheelBoltPattern: rows[0].WheelBoltPattern,
      HubLubricationSystem: rows[0].HubLubricationSystem,
      BrakeType: rows[0].BrakeType,
      BrakeActuator: rows[0].BrakeActuator,
      BrakeLineMaterial: rows[0].BrakeLineMaterial,
      BrakeDrumDiameter: rows[0].BrakeDrumDiameter,
      BrakeFluidType: rows[0].BrakeFluidType,
      CouplerSize: rows[0].CouplerSize,
      CouplerType: rows[0].CouplerType,
      CouplerLockType: rows[0].CouplerLockType,
      HitchClass: rows[0].HitchClass,
      HitchReceiverSize: rows[0].HitchReceiverSize,
      SafetyChains: rows[0].SafetyChains,
      WinchType: rows[0].WinchType,
      WinchCapacity: rows[0].WinchCapacity,
      WinchRopeLength: rows[0].WinchRopeLength,
      WinchDrumMaterial: rows[0].WinchDrumMaterial,
      WinchGearRatio: rows[0].WinchGearRatio,
      WinchRemoteControl: rows[0].WinchRemoteControl,
      WinchBrakeType: rows[0].WinchBrakeType,
      WinchCableType: rows[0].WinchCableType,
      WinchStrapLength: rows[0].WinchStrapLength,
      WinchHandleLength: rows[0].WinchHandleLength,
      WinchMounting: rows[0].WinchMounting,
      Lighting: rows[0].Lighting,
      LightMountingPosition: rows[0].LightMountingPosition,
      LightType: rows[0].LightType,
      ElectricalConnectorType: rows[0].ElectricalConnectorType,
      ElectricalWiringType: rows[0].ElectricalWiringType,
      BatteryType: rows[0].BatteryType,
      BatteryChargerType: rows[0].BatteryChargerType,
      SpareTyreCarrier: rows[0].SpareTyreCarrier,
      SpareTyreSize: rows[0].SpareTyreSize,
      SpareTyreMountingLocation: rows[0].SpareTyreMountingLocation,
      JackType: rows[0].JackType,
      JackWheelType: rows[0].JackWheelType,
      JackCapacity: rows[0].JackCapacity,
      JackLiftHeight: rows[0].JackLiftHeight,
      LoadingSystem: rows[0].LoadingSystem,
      Bunks: rows[0].Bunks,
      BunkMaterial: rows[0].BunkMaterial,
      BunkWidth: rows[0].BunkWidth,
      BunkHeightAdjustment: rows[0].BunkHeightAdjustment,
      BunkMountingBracketMaterial: rows[0].BunkMountingBracketMaterial,
      Rollers: rows[0].Rollers,
      RollerMaterial: rows[0].RollerMaterial,
      RollerAxleDiameter: rows[0].RollerAxleDiameter,
      WheelLocks: rows[0].WheelLocks,
      LockType: rows[0].LockType,
      AlarmSystem: rows[0].AlarmSystem,
      GPSTrackingDevice: rows[0].GPSTrackingDevice,
      CorrosionProtection: rows[0].CorrosionProtection,
      RustInhibitors: rows[0].RustInhibitors,
      MaximumSpeedRating: rows[0].MaximumSpeedRating,
      TurningRadius: rows[0].TurningRadius,
      TongueMaterial: rows[0].TongueMaterial,
      TongueShape: rows[0].TongueShape,
      TongueJackWheelSize: rows[0].TongueJackWheelSize,
      TongueJackType: rows[0].TongueJackType,
      TongueWeight: rows[0].TongueWeight,
      TongueWeightRatio: rows[0].TongueWeightRatio,
      OwnerManual: rows[0].OwnerManual,
      Warranty: rows[0].Warranty,
      DOTCompliance: rows[0].DOTCompliance,
      NATMCertification: rows[0].NATMCertification,
      EUTypeApproval: rows[0].EUTypeApproval,
      ADRCompliance: rows[0].ADRCompliance
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
