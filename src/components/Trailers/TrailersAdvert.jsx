import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SelectComponent from "../SelectComponent";
import InputComponent from "../InputComponent";

const TrailersAdvert = () => {
  const [trailerOptions, setTrailerOptions] = useState([]);
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    MarisailID: "M-000001",
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
    const errors = {};
    Object.keys(requiredField).forEach((key) => {
      const value = form[key];
      if (requiredField[key] && String(value).trim() === "") {
        errors[key] = true;
        // console.log("001 Error Key.", requiredField[key]);
      }
    });
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!checkRequired()) {
        return console.log("Form has errors");
      }
      console.log("Form submitted", form);
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
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
                Identification
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  {/* <SelectComponent
                    label="Marisail Trailer ID"
                    value={form.MarisailID}
                    setValue={(val) => {
                      setForm({ ...form, MarisailID: val });
                    }}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    isMandatory={false}
                  /> */}
                  <InputComponent
                    label="Marisail Trailer ID"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    formType={"number"}
                    type="advertTrailer"
                    value={form.MarisailID}
                    isMandatory={true}
                    setValue={(e) =>
                      setForm({
                        ...form,
                        MarisailID: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Make}
                    value={form.manufacturer}
                    setValue={(val) => {
                      setForm({ ...form, manufacturer: val });
                    }}
                    label="Manufacturer"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    isMandatory={true}
                  />
                  <div className="ms-2">
                    <p>
                      <small>
                        {error["manufacturer"] && errorDisplay("manufacturer")}
                      </small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Make}
                    value={form.Make}
                    setValue={(val) => {
                      setForm({ ...form, Make: val });
                    }}
                    label="Make"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>General</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.Type}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Type}
                    setValue={(val) => setForm({ ...form, Type: val })}
                    label="Type"
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FrameCrossmemberType}
                    setValue={(val) =>
                      setForm({ ...form, FrameCrossmemberType: val })
                    }
                    label="Frame Crossmember Type"
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={false}
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
                Special Features
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.HydraulicTilt}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.HydraulicTilt}
                    setValue={(val) => setForm({ ...form, HydraulicTilt: val })}
                    label="Hydraulic Tilt"
                    isMandatory={true}
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
                  <SelectComponent
                    options={trailerOptions.HydraulicTilt}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.ExtendableTongue}
                    setValue={(val) => setForm({ ...form, ExtendableTongue: val })}
                    label="Extendable Tongue"
                    isMandatory={true}
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
                  <SelectComponent
                    options={trailerOptions.HydraulicTilt}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AdjustableDeckHeight}
                    setValue={(val) => setForm({ ...form, AdjustableDeckHeight: val })}
                    label="Adjustable Deck Height"
                    isMandatory={true}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.DetachableSidePanels}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.DetachableSidePanels}
                    setValue={(val) => setForm({ ...form, DetachableSidePanels: val })}
                    label="Detachable Side Panels"
                    isMandatory={true}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                  <SelectComponent
                    options={trailerOptions.SplashGuards}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SplashGuards}
                    setValue={(val) => setForm({ ...form, SplashGuards: val })}
                    label="Splash Guards"
                    isMandatory={true}
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
                    isMandatory={true}
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
                  <SelectComponent
                    options={trailerOptions.SideRails}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SideRails}
                    setValue={(val) => setForm({ ...form, SideRails: val })}
                    label="Side Rails"
                    isMandatory={true}
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
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                  <SelectComponent
                    options={trailerOptions.AxlePosition}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.DropAxleOption}
                    setValue={(val) => setForm({ ...form, DropAxleOption: val })}
                    label="Drop Axle Option"
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BrakeFluidType}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Brakes}
                    setValue={(val) =>
                      setForm({ ...form, Brakes: val })
                    }
                    label="Drop Axle Option"
                    isMandatory={false}
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={true}
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
                    isMandatory={false}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.BreakawaySystem}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BreakawaySystem}
                    setValue={(val) => setForm({ ...form, BreakawaySystem: val })}
                    label="Breakaway System"
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
                Accessories
              </h6>
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={true}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={true}
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
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={false}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>Tongue</h6>
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
                    isMandatory={false}
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
                    isMandatory={false}
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={true}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={true}
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
                    isMandatory={false}
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
                    isMandatory={false}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>
                Regulatory Compliance
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.DOTCompliance}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.DOTCompliance}
                    setValue={(val) =>
                      setForm({ ...form, DOTCompliance: val })
                    }
                    label="DOT Compliance"
                    isMandatory={false}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.NATMCertification}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.NATMCertification}
                    setValue={(val) =>
                      setForm({ ...form, NATMCertification: val })
                    }
                    label="NATM Certification"
                    isMandatory={false}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.EUTypeApproval}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.EUTypeApproval}
                    setValue={(val) =>
                      setForm({ ...form, EUTypeApproval: val })
                    }
                    label="EU Type Approval"
                    isMandatory={false}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions.ADRCompliance}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.ADRCompliance}
                    setValue={(val) =>
                      setForm({ ...form, ADRCompliance: val })
                    }
                    label="ADR Compliance"
                    isMandatory={false}
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
