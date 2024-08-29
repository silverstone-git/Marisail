import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SelectComponent from "../SelectComponent";
import InputComponent from "../InputComponent";
import CheckComponent from "../CheckComponent";

const TrailersAdvert = () => {
  const [trailerOptions, setTrailerOptions] = useState([]);
  const [error, setErrors] = useState({});
  const [form, setForm] = useState({
    MarisailID: "",
    Make: "",
    Model: "",
    Year: "",
    Type: "",
    GVWR: "",
    LoadCapacity: "",
    Length: "",
    Width: "",
    FrameMaterial: "",
    FrameCoating: "",
    FrameCrossmemberType: "",
    FrameWeldType: "",
    MaximumAngleofApproach: "",
    FloorMaterial: "",
    SidesMaterial: "",
    RoofMaterial: "",
    GreasePoints: "",
    BearingType: "",
    MaintenanceSchedule: "",
    Storage: "",
    TieDownPoints: "",
    ToolBox: "",
    BumperType: "",
    TotalHeight: "",
    AxleHeightFromGound: "",
    HydraulicTilt: "",
    ExtendableTongue: "",
    AdjustableDeckHeight: "",
    DetachableSidePanels: "",
    RampType: "",
    WinchPost: "",
    SplashGuards: "",
    Fenders: "",
    SideRails: "",
    Color: "",
    Decals: "",
    StorageBox: "",
    LightingPackage: "",
    SuspensionUpgrade: "",
    AxleType: "",
    AxleCapacity: "",
    AxleSealType: "",
    AxleHubSize: "",
    AxlePosition: "",
    DropAxleOption: "",
    SuspensionType: "",
    SuspensionCapacity: "",
    SuspensionAdjustment: "",
    TyreSize: "",
    TyreLoadRange: "",
    TyreType: "",
    WheelType: "",
    WheelBoltPattern: "",
    HubLubricationSystem: "",
    BrakeType: "",
    BrakeActuator: "",
    BrakeLineMaterial: "",
    BrakeDrumDiameter: "",
    BrakeFluidType: "",
    Brakes: "",
    CouplerSize: "",
    CouplerType: "",
    CouplerLockType: "",
    HitchClass: "",
    HitchReceiverSize: "",
    SafetyChains: "",
    BreakawaySystem: "",
    WinchType: "",
    WinchCapacity: "",
    WinchRopeLength: "",
    WinchDrumMaterial: "",
    WinchGearRatio: "",
    WinchRemoteControl: "",
    WinchBrakeType: "",
    WinchCableType: "",
    WinchStrapLength: "",
    WinchHandleLength: "",
    WinchMounting: "",
    Lighting: "",
    LightMountingPosition: "",
    LightType: "",
    ElectricalConnectorType: "",
    ElectricalWiringType: "",
    BatteryType: "",
    BatteryChargerType: "",
    SpareTyreCarrier: "",
    SpareTyreSize: "",
    SpareTyreMountingLocation: "",
    JackType: "",
    JackWheelType: "",
    JackCapacity: "",
    JackLiftHeight: "",
    LoadingSystem: "",
    Bunks: "",
    BunkMaterial: "",
    BunkWidth: "",
    BunkHeightAdjustment: "",
    BunkMountingBracketMaterial: "",
    Rollers: "",
    RollerMaterial: "",
    RollerAxleDiameter: "",
    WheelLocks: "",
    LockType: "",
    AlarmSystem: "",
    GPSTrackingDevice: "",
    CorrosionProtection: "",
    RustInhibitors: "",
    MaximumSpeedRating: "",
    TurningRadius: "",
    TongueMaterial: "",
    TongueShape: "",
    TongueJackWheelSize: "",
    TongueJackType: "",
    TongueWeight: "",
    TongueWeightRatio: "",
    OwnerManual: "",
    Warranty: "",
    DOTCompliance: "",
    NATMCertification: "",
    EUTypeApproval: "",
    ADRCompliance: "",
  });

  const [openKey, setOpenKey] = useState(null);

  const requiredField = {
    Make: false,
    Model: false,
    Year: false,
    Type: false,
    GVWR: false,
    LoadCapacity: false,
    Length: false,
    Width: false,
    TotalHeight: false,
    AxleHeightFromGound: false,
    FrameMaterial: false,
    FrameCoating: false,
    FrameCrossmemberType: false,
    FloorMaterial: false,
    SidesMaterial: false,
    RoofMaterial: false,
    TieDownPoints: false,
    HydraulicTilt: false,
    ExtendableTongue: false,
    RampType: false,
    WinchPost: false,
    SplashGuards: false,
    Fenders: false,
    SideRails: false,
    Color: false,
    AxleType: false,
    AxleCapacity: false,
    AxleHubSize: false,
    AxlePosition: false,
    SuspensionType: false,
    SuspensionCapacity: false,
    TyreSize: false,
    TyreLoadRange: false,
    TyreType: false,
    WheelType: false,
    BrakeType: false,
    BrakeActuator: false,
    CouplerSize: false,
    HitchReceiverSize: false,
    WinchType: false,
    WinchCapacity: false,
    WinchRopeLength: false,
    Lighting: false,
    LightType: false,
    ElectricalConnectorType: false,
    ElectricalWiringType: false,
    BatteryType: false,
    BatteryChargerType: false,
    SpareTyreCarrier: false,
    SpareTyreSize: false,
    JackCapacity: false,
    LoadingSystem: false,
    WheelLocks: false,
    LockType: false,
    AlarmSystem: false,
    GPSTrackingDevice: false,
    CorrosionProtection: false,
    MaximumSpeedRating: false,
    TurningRadius: false,
    TongueJackWheelSize: false,
    TongueWeight: false,
  };

  const checkRequired = () => {
    Object.entries(requiredField).forEach(([key, value]) => {
      form[key].trim() === ""
        ? (requiredField[key] = true)
        : (requiredField[key] = false);
    });
    setErrors(requiredField);
    return Object.keys(error).length === 0;
  };

  const fetchTrailers = async (
    URL = "http://localhost:3001/api/trailers/marisail_id"
  ) => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setForm({ ...form, MarisailID: toJson.result });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTrailerMake = async (trailerMake) => {
    const URL = `http://localhost:3001/api/trailers/trailer_make?marisail_id=${encodeURIComponent(
      trailerMake
    )}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setForm({ ...form, Make: toJson.result });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTrailersIdMake = async (trailerId, trailerMake) => {
    const URL = `http://localhost:3001/api/trailers/trailer_model?trailer_id=${encodeURIComponent(
      trailerId
    )}&trailer_make=${encodeURIComponent(trailerMake)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setForm({ ...form, Model: toJson.result });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTrailerYear = async (trailerId, trailerMake, trailerModel) => {
    const URL = `http://localhost:3001/api/trailers/trailer_year?trailer_id=${encodeURIComponent(
      trailerId
    )}&trailer_make=${encodeURIComponent(
      trailerMake
    )}&trailer_model=${encodeURIComponent(trailerModel)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setForm({ ...form, Year: toJson.result });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTrailerAll = async (
    trailerId,
    trailerMake,
    trailerModel,
    trailerYear
  ) => {
    const URL = `http://localhost:3001/api/trailers/trailer_all?trailer_id=${encodeURIComponent(
      trailerId
    )}&trailer_make=${encodeURIComponent(
      trailerMake
    )}&trailer_model=${encodeURIComponent(
      trailerModel
    )}$trailer_year=${encodeURIComponent(trailerYear)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setForm({
        MarisailID: toJson.marisailId,
        Make: toJson.trailerMake,
        Model: toJson.trailerModel,
        Year: toJson.trailerYear,
        Type: toJson.type,
        GVWR: toJson.gvwr,
        LoadCapacity: toJson.loadCapacitie,
        Length: toJson.length,
        Width: toJson.width,
        FrameMaterial: toJson.frameMaterial,
        FrameCoating: toJson.frameCoating,
        FrameCrossmemberType: toJson.frameCrossmemberType,
        FrameWeldType: toJson.frameWeldType,
        MaximumAngleofApproach: toJson.maximumAnglesOfApproach,
        FloorMaterial: toJson.floorMaterial,
        SidesMaterial: toJson.sidesMaterial,
        RoofMaterial: toJson.roofMaterial,
        GreasePoints: toJson.greasePoint,
        BearingType: toJson.bearingType,
        MaintenanceSchedule: toJson.maintenanceSchedule,
        Storage: toJson.storage,
        TieDownPoints: toJson.tieDownPoint,
        ToolBox: toJson.toolBoxe,
        BumperType: toJson.bumperType,
        TotalHeight: toJson.totalHeight,
        AxleHeightFromGound: toJson.axleHeightsFromGround,
        HydraulicTilt: toJson.hydraulicTilt,
        ExtendableTongue: toJson.extendableTongue,
        AdjustableDeckHeight: toJson.adjustableDeckHeight,
        DetachableSidePanels: toJson.detachableSidePanel,
        RampType: toJson.rampType,
        WinchPost: toJson.winchPost,
        SplashGuards: toJson.splashGuard,
        Fenders: toJson.fender,
        SideRails: toJson.sideRail,
        Color: toJson.color,
        Decals: toJson.decal,
        StorageBox: toJson.storageBoxe,
        LightingPackage: toJson.lightingPackage,
        SuspensionUpgrade: toJson.suspensionUpgrade,
        AxleType: toJson.axleType,
        AxleCapacity: toJson.axleCapacitie,
        AxleSealType: toJson.axleSealType,
        AxleHubSize: toJson.axleHubSize,
        AxlePosition: toJson.axlePosition,
        DropAxleOption: toJson.dropAxleOption,
        SuspensionType: toJson.suspensionType,
        SuspensionCapacity: toJson.suspensionCapacitie,
        SuspensionAdjustment: toJson.suspensionAdjustment,
        TyreSize: toJson.tyreSize,
        TyreLoadRange: toJson.tyreLoadRange,
        TyreType: toJson.tyreType,
        WheelType: toJson.wheelType,
        WheelBoltPattern: toJson.wheelBoltPattern,
        HubLubricationSystem: toJson.hubLubricationSystem,
        BrakeType: toJson.brakeType,
        BrakeActuator: toJson.brakeActuator,
        BrakeLineMaterial: toJson.brakeLineMaterial,
        BrakeDrumDiameter: toJson.brakeDrumDiameter,
        BrakeFluidType: toJson.brakeFluidType,
        Brakes: toJson.brake,
        CouplerSize: toJson.couplerSize,
        CouplerType: toJson.couplerType,
        CouplerLockType: toJson.couplerLockType,
        HitchClass: toJson.hitchClasse,
        HitchReceiverSize: toJson.hitchReceiverSize,
        SafetyChains: toJson.safetyChain,
        BreakawaySystem: toJson.breakawaySystem,
        WinchType: toJson.winchType,
        WinchCapacity: toJson.winchCapacitie,
        WinchRopeLength: toJson.winchRopeLength,
        WinchDrumMaterial: toJson.winchDrumMaterial,
        WinchGearRatio: toJson.winchGearRatio,
        WinchRemoteControl: toJson.winchRemoteControl,
        WinchBrakeType: toJson.winchBrakeType,
        WinchCableType: toJson.winchCableType,
        WinchStrapLength: toJson.winchStrapLength,
        WinchHandleLength: toJson.winchHandleLength,
        WinchMounting: toJson.winchMounting,
        Lighting: toJson.lighting,
        LightMountingPosition: toJson.lightMountingPosition,
        LightType: toJson.lightType,
        ElectricalConnectorType: toJson.electricalConnectorType,
        ElectricalWiringType: toJson.electricalWiringType,
        BatteryType: toJson.batteryType,
        BatteryChargerType: toJson.batteryChargerType,
        SpareTyreCarrier: toJson.spareTyreCarrier,
        SpareTyreSize: toJson.spareTyreSize,
        SpareTyreMountingLocation: toJson.spareTyreMountingLocation,
        JackType: toJson.jackType,
        JackWheelType: toJson.jackWheelType,
        JackCapacity: toJson.jackCapacity,
        JackLiftHeight: toJson.jackLiftHeight,
        LoadingSystem: toJson.loadingSystem,
        Bunks: toJson.bunk,
        BunkMaterial: toJson.bunkMaterial,
        BunkWidth: toJson.bunkWidth,
        BunkHeightAdjustment: toJson.bunkHeightAdjustment,
        BunkMountingBracketMaterial: toJson.bunkMountingBracketMaterial,
        Rollers: toJson.roller,
        RollerMaterial: toJson.rollerMaterial,
        RollerAxleDiameter: toJson.rollerAxleDiameter,
        WheelLocks: toJson.wheelLock,
        LockType: toJson.lockType,
        AlarmSystem: toJson.alarmSystem,
        GPSTrackingDevice: toJson.gpsTrackingDevice,
        CorrosionProtection: toJson.corrosionProtection,
        RustInhibitors: toJson.rustInhibitor,
        MaximumSpeedRating: toJson.maximumSpeedRating,
        TurningRadius: toJson.turningRadiu,
        TongueMaterial: toJson.tongueMaterial,
        TongueShape: toJson.tongueShape,
        TongueJackWheelSize: toJson.tongueJackWheelSize,
        TongueJackType: toJson.tongueJackType,
        TongueWeight: toJson.tongueWeight,
        TongueWeightRatio: toJson.tongueWeightRatio,
        OwnerManual: toJson.ownerManual,
        Warranty: toJson.warrantie,
        DOTCompliance: toJson.dotCompliance,
        NATMCertification: toJson.natmCertification,
        EUTypeApproval: toJson.euTypeApproval,
        ADRCompliance: toJson.adrCompliance,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!checkRequired()) {
        return console.log("Form is Validation not FullFilled");
      }
      console.log("This is Form >>>>>>>>", form);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAll = async (URL = "http://localhost:3001/api/trailers/All") => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setTrailerOptions(toJson);
      setForm({
        ...form,
        HydraulicTilt: "yes",
        ExtendableTongue: "yes",
        AdjustableDeckHeight: "yes",
        DetachableSidePanels: "yes",
        SplashGuards: "yes",
        SideRails: "yes",
        DropAxleOption: "yes",
        Brakes: "yes",
        BreakawaySystem: "yes",
        DOTCompliance: "yes",
        NATMCertification: "yes",
        EUTypeApproval: "yes",
        ADRCompliance: "yes",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);
  const errorDisplay = (fieldName) => {
    return <div style={{ color: "red" }}>{fieldName} field is required</div>;
  };
  return (
    <>
      <Container className="mb-5">
        <Form>
          <Row>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Identification
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2 myAcc">
                  <SelectComponent
                    label="Marisail ID"
                    value={form.MarisailID}
                    setValue={(val) => {
                      setForm({ ...form, MarisailID: val });
                    }}
                    header="Identification"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    options={trailerOptions.MarisailID}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Make}
                    value={form.Make}
                    setValue={(val) => {
                      setForm({ ...form, Make: val });
                    }}
                    label="Make"
                    header="Identification"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    isMandatory={error["Make"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Make"] && errorDisplay("Make")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Model}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Model}
                    setValue={(val) => {
                      setForm({ ...form, Model: val });
                    }}
                    label="Model"
                    isMandatory={error["Model"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Model"] && errorDisplay("Model")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Year}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Year}
                    setValue={(val) => {
                      setForm({ ...form, Year: val });
                    }}
                    label="Year"
                    isMandatory={error["Year"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Year"] && errorDisplay("Year")}</small>
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Security Features
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WheelLocks}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WheelLocks}
                    setValue={(val) => setForm({ ...form, WheelLocks: val })}
                    label="WheelLocks"
                    isMandatory={error["WheelLocks"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["WheelLocks"] && errorDisplay("Wheel Locks")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.LockType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LockType}
                    setValue={(val) => setForm({ ...form, LockType: val })}
                    label="Lock Type"
                    isMandatory={error["LockType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["LockType"] && errorDisplay("Lock Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.AlarmSystem}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AlarmSystem}
                    setValue={(val) => setForm({ ...form, AlarmSystem: val })}
                    label="Alarm System"
                    isMandatory={error["AlarmSystem"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["AlarmSystem"] && errorDisplay("Alarm System")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.GPSTrackingDevice}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.GPSTrackingDevice}
                    setValue={(val) =>
                      setForm({ ...form, GPSTrackingDevice: val })
                    }
                    label="GPS Tracking Device"
                    isMandatory={error["GPSTrackingDevice"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["GPSTrackingDevice"] &&
                          errorDisplay("GPS Tracking Device")}
                      </small>
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>General</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Type}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Type}
                    setValue={(val) => setForm({ ...form, Type: val })}
                    label="Type"
                    isMandatory={error["Type"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Type"] && errorDisplay("Type")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.GVWR}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.GVWR}
                    setValue={(val) => setForm({ ...form, GVWR: val })}
                    label="GVWR"
                    isMandatory={error["GVWR"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["GVWR"] && errorDisplay("GVWR")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.LoadCapacity}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LoadCapacity}
                    setValue={(val) => setForm({ ...form, LoadCapacity: val })}
                    label="Load Capacity"
                    isMandatory={error["LoadCapacity"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["LoadCapacity"] && errorDisplay("Load Capacity")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Length}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Length}
                    setValue={(val) => setForm({ ...form, Length: val })}
                    label="Length"
                    isMandatory={error["Length"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Length"] && errorDisplay("Length")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Width}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Width}
                    setValue={(val) => setForm({ ...form, Width: val })}
                    label="Width"
                    isMandatory={error["Width"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Width"] && errorDisplay("Width")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <InputComponent
                    label="Total Height"
                    formType={"number"}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TotalHeight}
                    setValue={(e) =>
                      setForm({ ...form, TotalHeight: e.target.value })
                    }
                    isMandatory={error["TotalHeight"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["TotalHeight"] && errorDisplay("Total Height")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <InputComponent
                    label="Axle Height From Gound"
                    formType={"number"}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxleHeightFromGound}
                    setValue={(e) =>
                      setForm({ ...form, AxleHeightFromGound: e.target.value })
                    }
                    isMandatory={error["AxleHeightFromGound"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["AxleHeightFromGound"] &&
                          errorDisplay("Axle Height From Gound")}
                      </small>
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Construction Materials
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.FrameMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FrameMaterial}
                    setValue={(val) => setForm({ ...form, FrameMaterial: val })}
                    label="Frame Material"
                    isMandatory={error["FrameMaterial"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["FrameMaterial"] &&
                          errorDisplay("Frame Material")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.FrameCoating}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FrameCoating}
                    setValue={(val) => setForm({ ...form, FrameCoating: val })}
                    label="Frame Coating"
                    isMandatory={error["FrameCoating"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["FrameCoating"] && errorDisplay("Frame Coating")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    // options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FrameCrossmemberType}
                    setValue={(val) =>
                      setForm({ ...form, FrameCrossmemberType: val })
                    }
                    label="Frame Crossmember Type"
                    isMandatory={error["FrameCrossmemberType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["FrameCrossmemberType"] &&
                          errorDisplay("Frame Crossmember Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.FrameWeldType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FrameWeldType}
                    setValue={(val) => setForm({ ...form, FrameWeldType: val })}
                    label="FrameWeld Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.MaximumAngleofApproach}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.MaximumAngleofApproach}
                    setValue={(val) =>
                      setForm({
                        ...form,
                        MaximumAngleofApproach: val,
                      })
                    }
                    label="Maximum Angle of Approach"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.FloorMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FloorMaterial}
                    setValue={(val) => setForm({ ...form, FloorMaterial: val })}
                    label="Floor Material"
                    isMandatory={error["FloorMaterial"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["FloorMaterial"] &&
                          errorDisplay("Floor Material")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.SidesMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SidesMaterial}
                    setValue={(val) => setForm({ ...form, SidesMaterial: val })}
                    label="Sides Material"
                    isMandatory={error["SidesMaterial"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["SidesMaterial"] &&
                          errorDisplay("Sides Material")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.RoofMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.RoofMaterial}
                    setValue={(val) => setForm({ ...form, RoofMaterial: val })}
                    label="Roof Material"
                    isMandatory={error["RoofMaterial"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["RoofMaterial"] && errorDisplay("Roof Material")}
                      </small>
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                User Features
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Storage}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Storage}
                    setValue={(val) => setForm({ ...form, Storage: val })}
                    label="Storage"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TieDownPoints}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TieDownPoints}
                    setValue={(val) => setForm({ ...form, TieDownPoints: val })}
                    label="Tie Down Points"
                    isMandatory={error["TieDownPoints"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["TieDownPoints"] &&
                          errorDisplay("Tie Down Points")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.ToolBox}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.ToolBox}
                    setValue={(val) => setForm({ ...form, ToolBox: val })}
                    label="Tool Box"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BumperType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BumperType}
                    setValue={(val) => setForm({ ...form, BumperType: val })}
                    label="Bumper Type"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Special Features
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="Hydraulic Tilt"
                    setValue={(val) => setForm({ ...form, HydraulicTilt: val })}
                    name="Hydraulic Tilt"
                    id="HydraulicTilt"
                    isMandatory={error["HydraulicTilt"]}
                    value={form.HydraulicTilt}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["HydraulicTilt"] &&
                          errorDisplay("Hydraulic Tilt")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="Extendable Tongue"
                    setValue={(val) =>
                      setForm({ ...form, ExtendableTongue: val })
                    }
                    name="Extendable Tongue"
                    id="ExtendableTongue"
                    isMandatory={error["ExtendableTongue"]}
                    value={form.ExtendableTongue}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["ExtendableTongue"] &&
                          errorDisplay("Extendable Tongue")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="Adjustable Deck Height"
                    setValue={(val) =>
                      setForm({ ...form, AdjustableDeckHeight: val })
                    }
                    name="Adjustable Deck Height"
                    id="AdjustableDeckHeight"
                    value={form.AdjustableDeckHeight}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="Detachable Side Panels"
                    setValue={(val) =>
                      setForm({ ...form, DetachableSidePanels: val })
                    }
                    name="Detachable Side Panels"
                    id="DetachableSidePanels"
                    value={form.DetachableSidePanels}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Additional Accessories
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.RampType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.RampType}
                    setValue={(val) => setForm({ ...form, RampType: val })}
                    label="Ramp Type"
                    isMandatory={error["RampType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["RampType"] && errorDisplay("Ramp Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchPost}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchPost}
                    setValue={(val) => setForm({ ...form, WinchPost: val })}
                    label="Winch Post"
                    isMandatory={error["WinchPost"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["WinchPost"] && errorDisplay("Winch Post")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="Splash Guards"
                    setValue={(val) => setForm({ ...form, SplashGuards: val })}
                    name="Splash Guards"
                    id="SplashGuards"
                    isMandatory={error["SplashGuards"]}
                    value={form.SplashGuards}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["SplashGuards"] && errorDisplay("Splash Guards")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Fenders}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Fenders}
                    setValue={(val) => setForm({ ...form, Fenders: val })}
                    label="Fenders"
                    isMandatory={error["Fenders"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["Fenders"] && errorDisplay("Fenders")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="Side Rails"
                    setValue={(val) => setForm({ ...form, SideRails: val })}
                    name="Side Rails"
                    id="SideRails"
                    isMandatory={error["SideRails"]}
                    value={form.SideRails}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["SideRails"] && errorDisplay("Side Rails")}
                      </small>
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Customization Options
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Color}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Color}
                    setValue={(val) => setForm({ ...form, Color: val })}
                    label="Color"
                    isMandatory={error["Color"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Color"] && errorDisplay("Color")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Decals}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Decals}
                    setValue={(val) => setForm({ ...form, Decals: val })}
                    label="Decals"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.StorageBox}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.StorageBox}
                    setValue={(val) => setForm({ ...form, StorageBox: val })}
                    label="Storage Box"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.LightingPackage}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LightingPackage}
                    setValue={(val) =>
                      setForm({ ...form, LightingPackage: val })
                    }
                    label="Lighting Package"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.SuspensionUpgrade}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SuspensionUpgrade}
                    setValue={(val) =>
                      setForm({ ...form, SuspensionUpgrade: val })
                    }
                    label="Suspension Upgrade"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Axles & Suspension
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.AxleType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxleType}
                    setValue={(val) => setForm({ ...form, AxleType: val })}
                    label="Axle Type"
                    isMandatory={error["AxleType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["AxleType"] && errorDisplay("Axle Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.AxleCapacity}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxleCapacity}
                    setValue={(val) => setForm({ ...form, AxleCapacity: val })}
                    label="Axle Capacity"
                    isMandatory={error["AxleCapacity"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["AxleCapacity"] && errorDisplay("Axle Capacity")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.AxleSealType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxleSealType}
                    setValue={(val) => setForm({ ...form, AxleSealType: val })}
                    label="Axle Seal Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.AxleHubSize}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxleHubSize}
                    setValue={(val) => setForm({ ...form, AxleHubSize: val })}
                    label="Axle Hub Size"
                    isMandatory={error["AxleHubSize"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["AxleHubSize"] && errorDisplay("Axle Hub Size")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.AxlePosition}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxlePosition}
                    setValue={(val) => setForm({ ...form, AxlePosition: val })}
                    label="Axle Position"
                    isMandatory={error["AxlePosition"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["AxlePosition"] && errorDisplay("Axle Position")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="Drop Axle Option"
                    setValue={(val) =>
                      setForm({ ...form, DropAxleOption: val })
                    }
                    name="Drop Axle Option"
                    id="DropAxleOption"
                    value={form.DropAxleOption}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.SuspensionType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SuspensionType}
                    setValue={(val) =>
                      setForm({ ...form, SuspensionType: val })
                    }
                    label="Suspension Type"
                    isMandatory={error["SuspensionType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["SuspensionType"] &&
                          errorDisplay("Suspension Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.SuspensionCapacity}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SuspensionCapacity}
                    setValue={(val) =>
                      setForm({ ...form, SuspensionCapacity: val })
                    }
                    label="Suspension Capacity"
                    isMandatory={error["SuspensionCapacity"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["SuspensionCapacity"] &&
                          errorDisplay("Suspension Capacity")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.SuspensionAdjustment}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SuspensionAdjustment}
                    setValue={(val) =>
                      setForm({ ...form, SuspensionAdjustment: val })
                    }
                    label="Suspension Adjustment"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Loading & Transport Features
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.LoadingSystem}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LoadingSystem}
                    setValue={(val) => setForm({ ...form, LoadingSystem: val })}
                    label="Loading System"
                    isMandatory={error["LoadingSystem"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["LoadingSystem"] &&
                          errorDisplay("Loading System")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Bunks}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Bunks}
                    setValue={(val) => setForm({ ...form, Bunks: val })}
                    label="Bunks"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BunkMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BunkMaterial}
                    setValue={(val) => setForm({ ...form, BunkMaterial: val })}
                    label="Bunk Material"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BunkWidth}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BunkWidth}
                    setValue={(val) => setForm({ ...form, BunkWidth: val })}
                    label="Bunk Width"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BunkHeightAdjustment}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BunkHeightAdjustment}
                    setValue={(val) =>
                      setForm({ ...form, BunkHeightAdjustment: val })
                    }
                    label="Bunk Height Adjustment"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BunkMountingBracketMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BunkMountingBracketMaterial}
                    setValue={(val) =>
                      setForm({ ...form, BunkMountingBracketMaterial: val })
                    }
                    label="Bunk Mounting Bracket Material"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Rollers}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Rollers}
                    setValue={(val) => setForm({ ...form, Rollers: val })}
                    label="Rollers"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.RollerMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.RollerMaterial}
                    setValue={(val) =>
                      setForm({ ...form, RollerMaterial: val })
                    }
                    label="Roller Material"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.RollerAxleDiameter}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.RollerAxleDiameter}
                    setValue={(val) =>
                      setForm({ ...form, RollerAxleDiameter: val })
                    }
                    label="Roller Axle Diameter"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Brakes & Safety
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BrakeType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BrakeType}
                    setValue={(val) => setForm({ ...form, BrakeType: val })}
                    label="Brake Type"
                    isMandatory={error["BrakeType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["BrakeType"] && errorDisplay("Brake Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BrakeActuator}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BrakeActuator}
                    setValue={(val) => setForm({ ...form, BrakeActuator: val })}
                    label="Brake Actuator"
                    isMandatory={error["BrakeActuator"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["BrakeActuator"] &&
                          errorDisplay("Brake Actuator")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BrakeLineMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BrakeLineMaterial}
                    setValue={(val) =>
                      setForm({ ...form, BrakeLineMaterial: val })
                    }
                    label="Brake Line Material"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BrakeDrumDiameter}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BrakeDrumDiameter}
                    setValue={(val) =>
                      setForm({ ...form, BrakeDrumDiameter: val })
                    }
                    label="Brake Drum Diameter"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BrakeFluidType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BrakeFluidType}
                    setValue={(val) =>
                      setForm({ ...form, BrakeFluidType: val })
                    }
                    label="Brake Fluid Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="Drop Axle Option"
                    setValue={(val) => setForm({ ...form, Brakes: val })}
                    name="Brakes"
                    id="Brakes"
                    value={form.Brakes}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.CouplerSize}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.CouplerSize}
                    setValue={(val) => setForm({ ...form, CouplerSize: val })}
                    label="Coupler Size"
                    isMandatory={error["CouplerSize"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["CouplerSize"] && errorDisplay("Coupler Size")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.CouplerType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.CouplerType}
                    setValue={(val) => setForm({ ...form, CouplerType: val })}
                    label="Coupler Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.CouplerLockType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.CouplerLockType}
                    setValue={(val) =>
                      setForm({ ...form, CouplerLockType: val })
                    }
                    label="Coupler Lock Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.HitchClass}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.HitchClass}
                    setValue={(val) => setForm({ ...form, HitchClass: val })}
                    label="Hitch Class"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.HitchReceiverSize}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.HitchReceiverSize}
                    setValue={(val) =>
                      setForm({ ...form, HitchReceiverSize: val })
                    }
                    label="Hitch Receiver Size"
                    isMandatory={error["HitchReceiverSize"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["HitchReceiverSize"] &&
                          errorDisplay("Hitch Receiver Size")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.SafetyChains}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SafetyChains}
                    setValue={(val) => setForm({ ...form, SafetyChains: val })}
                    label="Safety Chains"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="Breakaway System"
                    setValue={(val) =>
                      setForm({ ...form, BreakawaySystem: val })
                    }
                    name="Breakaway System"
                    id="BreakawaySystem"
                    value={form.BreakawaySystem}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Winch & Winch Accessories
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchType}
                    setValue={(val) => setForm({ ...form, WinchType: val })}
                    label="Winch Type"
                    isMandatory={error["WinchType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["WinchType"] && errorDisplay("Winch Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchCapacity}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchCapacity}
                    setValue={(val) => setForm({ ...form, WinchCapacity: val })}
                    label="Winch Capacity"
                    isMandatory={error["WinchCapacity"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["WinchCapacity"] &&
                          errorDisplay("Winch Capacity")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchRopeLength}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchRopeLength}
                    setValue={(val) =>
                      setForm({ ...form, WinchRopeLength: val })
                    }
                    label="Winch Rope Length"
                    isMandatory={error["WinchRopeLength"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["WinchRopeLength"] &&
                          errorDisplay("Winch Rope Length")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchDrumMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchDrumMaterial}
                    setValue={(val) =>
                      setForm({ ...form, WinchDrumMaterial: val })
                    }
                    label="Winch Drum Material"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchGearRatio}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchGearRatio}
                    setValue={(val) =>
                      setForm({ ...form, WinchGearRatio: val })
                    }
                    label="Winch Gear Ratio"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchRemoteControl}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchRemoteControl}
                    setValue={(val) =>
                      setForm({ ...form, WinchRemoteControl: val })
                    }
                    label="Winch Remote Control"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchBrakeType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchBrakeType}
                    setValue={(val) =>
                      setForm({ ...form, WinchBrakeType: val })
                    }
                    label="Winch Brake Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchCableType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchCableType}
                    setValue={(val) =>
                      setForm({ ...form, WinchCableType: val })
                    }
                    label="Winch Cable Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchStrapLength}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchStrapLength}
                    setValue={(val) =>
                      setForm({ ...form, WinchStrapLength: val })
                    }
                    label="Winch Strap Length"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchHandleLength}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchHandleLength}
                    setValue={(val) =>
                      setForm({ ...form, WinchHandleLength: val })
                    }
                    label="Winch Handle Length"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WinchMounting}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchMounting}
                    setValue={(val) => setForm({ ...form, WinchMounting: val })}
                    label="Winch Mounting"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Lighting & Electrical
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Lighting}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Lighting}
                    setValue={(val) => setForm({ ...form, Lighting: val })}
                    label="Lighting"
                    isMandatory={error["Lighting"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["Lighting"] && errorDisplay("Lighting")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.LightMountingPosition}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LightMountingPosition}
                    setValue={(val) =>
                      setForm({ ...form, LightMountingPosition: val })
                    }
                    label="Light Mounting Position"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.LightType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LightType}
                    setValue={(val) => setForm({ ...form, LightType: val })}
                    label="Light Type"
                    isMandatory={error["LightType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["LightType"] && errorDisplay("Light Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.ElectricalConnectorType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.ElectricalConnectorType}
                    setValue={(val) =>
                      setForm({ ...form, ElectricalConnectorType: val })
                    }
                    label="Electrical Connector Type"
                    isMandatory={error["ElectricalConnectorType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["ElectricalConnectorType"] &&
                          errorDisplay("Electrical Connector Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.ElectricalWiringType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.ElectricalWiringType}
                    setValue={(val) =>
                      setForm({ ...form, ElectricalWiringType: val })
                    }
                    label="Electrical Wiring Type"
                    isMandatory={error["ElectricalWiringType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["ElectricalWiringType"] &&
                          errorDisplay("Electrical Wiring Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BatteryType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BatteryType}
                    setValue={(val) => setForm({ ...form, BatteryType: val })}
                    label="Battery Type"
                    isMandatory={error["BatteryType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["BatteryType"] && errorDisplay("Battery Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BatteryChargerType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BatteryChargerType}
                    setValue={(val) =>
                      setForm({ ...form, BatteryChargerType: val })
                    }
                    label="Battery Charger Type"
                    isMandatory={error["BatteryChargerType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["BatteryChargerType"] &&
                          errorDisplay("Battery Charger Type")}
                      </small>
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>Accessories</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.SpareTyreCarrier}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SpareTyreCarrier}
                    setValue={(val) =>
                      setForm({ ...form, SpareTyreCarrier: val })
                    }
                    label="Spare Tyre Carrier"
                    isMandatory={error["SpareTyreCarrier"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["SpareTyreCarrier"] &&
                          errorDisplay("Spare Tyre Carrier")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.SpareTyreSize}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SpareTyreSize}
                    setValue={(val) => setForm({ ...form, SpareTyreSize: val })}
                    label="Spare Tyre Size"
                    isMandatory={error["SpareTyreSize"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["SpareTyreSize"] &&
                          errorDisplay("Spare Tyre Size")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.SpareTyreMountingLocation}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SpareTyreMountingLocation}
                    setValue={(val) =>
                      setForm({ ...form, SpareTyreMountingLocation: val })
                    }
                    label="Spare Tyre Mounting Location"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.JackType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.JackType}
                    setValue={(val) => setForm({ ...form, JackType: val })}
                    label="Jack Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.JackWheelType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.JackWheelType}
                    setValue={(val) => setForm({ ...form, JackWheelType: val })}
                    label="Jack Wheel Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.JackCapacity}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.JackCapacity}
                    setValue={(val) => setForm({ ...form, JackCapacity: val })}
                    label="Jack Capacity"
                    isMandatory={error["JackCapacity"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["JackCapacity"] && errorDisplay("Jack Capacity")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.JackLiftHeight}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.JackLiftHeight}
                    setValue={(val) =>
                      setForm({ ...form, JackLiftHeight: val })
                    }
                    label="Jack Lift Height"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Environmental & Corrosion Resistance
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.CorrosionProtection}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.CorrosionProtection}
                    setValue={(val) =>
                      setForm({ ...form, CorrosionProtection: val })
                    }
                    label="Corrosion Protection"
                    isMandatory={error["CorrosionProtection"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["CorrosionProtection"] &&
                          errorDisplay("Corrosion Protection")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.RustInhibitors}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.RustInhibitors}
                    setValue={(val) =>
                      setForm({ ...form, RustInhibitors: val })
                    }
                    label="Rust Inhibitors"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Maintenance Features
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.GreasePoints}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.GreasePoints}
                    setValue={(val) => setForm({ ...form, GreasePoints: val })}
                    label="Grease Points"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BearingType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BearingType}
                    setValue={(val) => setForm({ ...form, BearingType: val })}
                    label="Bearing Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.MaintenanceSchedule}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.MaintenanceSchedule}
                    setValue={(val) =>
                      setForm({ ...form, MaintenanceSchedule: val })
                    }
                    label="Maintenance Schedule"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Performance & Handling
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.MaximumSpeedRating}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.MaximumSpeedRating}
                    setValue={(val) =>
                      setForm({ ...form, MaximumSpeedRating: val })
                    }
                    label="Maximum Speed Rating"
                    isMandatory={error["MaximumSpeedRating"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["MaximumSpeedRating"] &&
                          errorDisplay("Maximum Speed Rating")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TurningRadius}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TurningRadius}
                    setValue={(val) => setForm({ ...form, TurningRadius: val })}
                    label="Turning Radius"
                    isMandatory={error["TurningRadius"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["TurningRadius"] &&
                          errorDisplay("Turning Radius")}
                      </small>
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Documentation
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.OwnerManual}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.OwnerManual}
                    setValue={(val) => setForm({ ...form, OwnerManual: val })}
                    label="Owner Manual"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Warranty}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Warranty}
                    setValue={(val) => setForm({ ...form, Warranty: val })}
                    label="Warranty"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>Tongue</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TongueMaterial}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TongueMaterial}
                    setValue={(val) =>
                      setForm({ ...form, TongueMaterial: val })
                    }
                    label="Tongue Material"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TongueShape}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TongueShape}
                    setValue={(val) => setForm({ ...form, TongueShape: val })}
                    label="Tongue Shape"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TongueJackWheelSize}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TongueJackWheelSize}
                    setValue={(val) =>
                      setForm({ ...form, TongueJackWheelSize: val })
                    }
                    label="Tongue Jack Wheel Size"
                    isMandatory={error["TongueJackWheelSize"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["TongueJackWheelSize"] &&
                          errorDisplay("Tongue Jack Wheel Size")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TongueJackType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TongueJackType}
                    setValue={(val) =>
                      setForm({ ...form, TongueJackType: val })
                    }
                    label="Tongue Jack Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TongueWeight}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TongueWeight}
                    setValue={(val) => setForm({ ...form, TongueWeight: val })}
                    label="Tongue Weight"
                    isMandatory={error["TongueWeight"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["TongueWeight"] && errorDisplay("Tongue Weight")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TongueWeightRatio}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TongueWeightRatio}
                    setValue={(val) =>
                      setForm({ ...form, TongueWeightRatio: val })
                    }
                    label="Tongue Weight Ratio"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Tyres & Wheels
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TyreSize}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TyreSize}
                    setValue={(val) => setForm({ ...form, TyreSize: val })}
                    label="Tyre Size"
                    isMandatory={error["TyreSize"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["TyreSize"] && errorDisplay("Tyre Size")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TyreLoadRange}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TyreLoadRange}
                    setValue={(val) => setForm({ ...form, TyreLoadRange: val })}
                    label="Tyre Load Range"
                    isMandatory={error["TyreLoadRange"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["TyreLoadRange"] &&
                          errorDisplay("Tyre Load Range")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.TyreType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TyreType}
                    setValue={(val) => setForm({ ...form, TyreType: val })}
                    label="Tyre Type"
                    isMandatory={error["TyreType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["TyreType"] && errorDisplay("Tyre Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WheelType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WheelType}
                    setValue={(val) => setForm({ ...form, WheelType: val })}
                    label="Wheel Type"
                    isMandatory={error["WheelType"]}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["WheelType"] && errorDisplay("Wheel Type")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.WheelBoltPattern}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WheelBoltPattern}
                    setValue={(val) =>
                      setForm({ ...form, WheelBoltPattern: val })
                    }
                    label="Wheel Bolt Pattern"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.HubLubricationSystem}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.HubLubricationSystem}
                    setValue={(val) =>
                      setForm({ ...form, HubLubricationSystem: val })
                    }
                    label="Hub Lubrication System"
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10, color: "#1F75FE" }}>
                Regulatory Compliance
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="DOT Compliance"
                    setValue={(val) => setForm({ ...form, DOTCompliance: val })}
                    name="DOT Compliance"
                    id="DOTCompliance"
                    value={form.DOTCompliance}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="NATM Certification"
                    setValue={(val) =>
                      setForm({ ...form, NATMCertification: val })
                    }
                    name="NATM Certification"
                    id="NATMCertification"
                    value={form.NATMCertification}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="EU Type Approval"
                    setValue={(val) =>
                      setForm({ ...form, EUTypeApproval: val })
                    }
                    name="EU Type Approval"
                    id="EUTypeApproval"
                    value={form.EUTypeApproval}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="ADR Compliance"
                    setValue={(val) => setForm({ ...form, ADRCompliance: val })}
                    name="ADR Compliance"
                    id="ADRCompliance"
                    value={form.ADRCompliance}
                  />
                </Col>
              </Col>
            </Col>
          </Row>
        </Form>
        <div className="d-flex justify-content-center p-4 pt-5">
          <button
            type="button"
            className="btn btn-success p-3"
            style={{
              backgroundColor: "#971e28",
              color: "#fff",
              padding: "8px 32px",
              border: "0px none",
              borderRadius: 30,
              textTransform: "uppercase",
              marginBottom: 8,
              width: "50%",
              cursor: "pointer",
              transition: "all .5s ease",
            }}
            name="Trailers-submit"
            id="Trailers-submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </Container>
    </>
  );
};

export default TrailersAdvert;
