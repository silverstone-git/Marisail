import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SelectComponent from "../components/SelectComponent";
import InputComponent from "../components/InputComponent";
import CheckComponent from "../components/CheckComponent";
import "./trailers.css";

const Trailers = () => {
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
      setTrailerOptions(toJson.trailerIdData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    try {
      checkRequired();
      console.log("This is Form >>>>>>>>", form);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrailers();
  }, []);

  return (
    <>
      <Container className="mb-5">
        <Form>
          <Row>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Identification</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2 myAcc">
                  <SelectComponent
                    label="Marisail ID"
                    value={form.MarisailID}
                    setValue={(val) => {
                      setForm({ ...form, MarisailID: val });
                      fetchTrailerMake(val);
                    }}
                    header="Identification"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    options={trailerOptions}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    value={form.Make}
                    setValue={(val) => {
                      setForm({ ...form, Make: val });
                      fetchTrailersIdMake(form.MarisailID, val);
                    }}
                    label="Make"
                    header="Identification"
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    isMandatory={error["Make"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Model}
                    setValue={(val) => {
                      setForm({ ...form, Model: val });
                      fetchTrailerYear(form.MarisailID, form.Make, val);
                    }}
                    label="Model"
                    isMandatory={error["Model"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Year}
                    setValue={(val) => {
                      setForm({ ...form, Year: val });
                      fetchTrailerAll(
                        form.MarisailID,
                        form.Make,
                        form.Model,
                        val
                      );
                    }}
                    label="Year"
                    isMandatory={error["Year"]}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Security Features</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WheelLocks}
                    setValue={(val) => setForm({ ...form, WheelLocks: val })}
                    label="WheelLocks"
                    isMandatory={error["WheelLocks"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LockType}
                    setValue={(val) => setForm({ ...form, LockType: val })}
                    label="Lock Type"
                    isMandatory={error["LockType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AlarmSystem}
                    setValue={(val) => setForm({ ...form, AlarmSystem: val })}
                    label="Alarm System"
                    isMandatory={error["AlarmSystem"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.GPSTrackingDevice}
                    setValue={(val) =>
                      setForm({ ...form, GPSTrackingDevice: val })
                    }
                    label="GPS Tracking Device"
                    isMandatory={error["GPSTrackingDevice"]}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>General</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Type}
                    setValue={(val) => setForm({ ...form, Type: val })}
                    label="Type"
                    isMandatory={error["Type"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.GVWR}
                    setValue={(val) => setForm({ ...form, GVWR: val })}
                    label="GVWR"
                    isMandatory={error["GVWR"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LoadCapacity}
                    setValue={(val) => setForm({ ...form, LoadCapacity: val })}
                    label="Load Capacity"
                    isMandatory={error["LoadCapacity"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Length}
                    setValue={(val) => setForm({ ...form, Length: val })}
                    label="Length"
                    isMandatory={error["Length"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Width}
                    setValue={(val) => setForm({ ...form, Width: val })}
                    label="Width"
                    isMandatory={error["Width"]}
                  />
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
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Construction Materials</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FrameMaterial}
                    setValue={(val) => setForm({ ...form, FrameMaterial: val })}
                    label="Frame Material"
                    isMandatory={error["FrameMaterial"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FrameCoating}
                    setValue={(val) => setForm({ ...form, FrameCoating: val })}
                    label="Frame Coating"
                    isMandatory={error["FrameCoating"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FrameCrossmemberType}
                    setValue={(val) =>
                      setForm({ ...form, FrameCrossmemberType: val })
                    }
                    label="Frame Crossmember Type"
                    isMandatory={error["FrameCrossmemberType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FrameWeldType}
                    setValue={(val) => setForm({ ...form, FrameWeldType: val })}
                    label="FrameWeld Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.FloorMaterial}
                    setValue={(val) => setForm({ ...form, FloorMaterial: val })}
                    label="Floor Material"
                    isMandatory={error["FloorMaterial"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SidesMaterial}
                    setValue={(val) => setForm({ ...form, SidesMaterial: val })}
                    label="Sides Material"
                    isMandatory={error["SidesMaterial"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.RoofMaterial}
                    setValue={(val) => setForm({ ...form, RoofMaterial: val })}
                    label="Roof Material"
                    isMandatory={error["RoofMaterial"]}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>User Features</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Storage}
                    setValue={(val) => setForm({ ...form, Storage: val })}
                    label="Storage"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TieDownPoints}
                    setValue={(val) => setForm({ ...form, TieDownPoints: val })}
                    label="Tie Down Points"
                    isMandatory={error["TieDownPoints"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.ToolBox}
                    setValue={(val) => setForm({ ...form, ToolBox: val })}
                    label="Tool Box"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Special Features</h6>
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
                  />
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
                  />
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
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Additional Accessories</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.RampType}
                    setValue={(val) => setForm({ ...form, RampType: val })}
                    label="Ramp Type"
                    isMandatory={error["RampType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchPost}
                    setValue={(val) => setForm({ ...form, WinchPost: val })}
                    label="Winch Post"
                    isMandatory={error["WinchPost"]}
                  />
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
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Fenders}
                    setValue={(val) => setForm({ ...form, Fenders: val })}
                    label="Fenders"
                    isMandatory={error["Fenders"]}
                  />
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
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Customization Options</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Color}
                    setValue={(val) => setForm({ ...form, Color: val })}
                    label="Color"
                    isMandatory={error["Color"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Decals}
                    setValue={(val) => setForm({ ...form, Decals: val })}
                    label="Decals"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.StorageBox}
                    setValue={(val) => setForm({ ...form, StorageBox: val })}
                    label="Storage Box"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Axles & Suspension</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxleType}
                    setValue={(val) => setForm({ ...form, AxleType: val })}
                    label="Axle Type"
                    isMandatory={error["AxleType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxleCapacity}
                    setValue={(val) => setForm({ ...form, AxleCapacity: val })}
                    label="Axle Capacity"
                    isMandatory={error["AxleCapacity"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxleSealType}
                    setValue={(val) => setForm({ ...form, AxleSealType: val })}
                    label="Axle Seal Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxleHubSize}
                    setValue={(val) => setForm({ ...form, AxleHubSize: val })}
                    label="Axle Hub Size"
                    isMandatory={error["AxleHubSize"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.AxlePosition}
                    setValue={(val) => setForm({ ...form, AxlePosition: val })}
                    label="Axle Position"
                    isMandatory={error["AxlePosition"]}
                  />
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
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SuspensionType}
                    setValue={(val) =>
                      setForm({ ...form, SuspensionType: val })
                    }
                    label="Suspension Type"
                    isMandatory={error["SuspensionType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SuspensionCapacity}
                    setValue={(val) =>
                      setForm({ ...form, SuspensionCapacity: val })
                    }
                    label="Suspension Capacity"
                    isMandatory={error["SuspensionCapacity"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Loading & Transport Features</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LoadingSystem}
                    setValue={(val) => setForm({ ...form, LoadingSystem: val })}
                    label="Loading System"
                    isMandatory={error["LoadingSystem"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Bunks}
                    setValue={(val) => setForm({ ...form, Bunks: val })}
                    label="Bunks"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BunkMaterial}
                    setValue={(val) => setForm({ ...form, BunkMaterial: val })}
                    label="Bunk Material"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BunkWidth}
                    setValue={(val) => setForm({ ...form, BunkWidth: val })}
                    label="Bunk Width"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
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
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Rollers}
                    setValue={(val) => setForm({ ...form, Rollers: val })}
                    label="Rollers"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Brakes & Safety</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BrakeType}
                    setValue={(val) => setForm({ ...form, BrakeType: val })}
                    label="Brake Type"
                    isMandatory={error["BrakeType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BrakeActuator}
                    setValue={(val) => setForm({ ...form, BrakeActuator: val })}
                    label="Brake Actuator"
                    isMandatory={error["BrakeActuator"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
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
                    options={trailerOptions}
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
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.CouplerSize}
                    setValue={(val) => setForm({ ...form, CouplerSize: val })}
                    label="Coupler Size"
                    isMandatory={error["CouplerSize"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.CouplerType}
                    setValue={(val) => setForm({ ...form, CouplerType: val })}
                    label="Coupler Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.HitchClass}
                    setValue={(val) => setForm({ ...form, HitchClass: val })}
                    label="Hitch Class"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.HitchReceiverSize}
                    setValue={(val) =>
                      setForm({ ...form, HitchReceiverSize: val })
                    }
                    label="Hitch Receiver Size"
                    isMandatory={error["HitchReceiverSize"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Winch & Winch Accessories</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchType}
                    setValue={(val) => setForm({ ...form, WinchType: val })}
                    label="Winch Type"
                    isMandatory={error["WinchType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchCapacity}
                    setValue={(val) => setForm({ ...form, WinchCapacity: val })}
                    label="Winch Capacity"
                    isMandatory={error["WinchCapacity"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WinchRopeLength}
                    setValue={(val) =>
                      setForm({ ...form, WinchRopeLength: val })
                    }
                    label="Winch Rope Length"
                    isMandatory={error["WinchRopeLength"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
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
                    options={trailerOptions}
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
                    options={trailerOptions}
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
                    options={trailerOptions}
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
                    options={trailerOptions}
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
                    options={trailerOptions}
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
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Lighting & Electrical</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.Lighting}
                    setValue={(val) => setForm({ ...form, Lighting: val })}
                    label="Lighting"
                    isMandatory={error["Lighting"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.LightType}
                    setValue={(val) => setForm({ ...form, LightType: val })}
                    label="Light Type"
                    isMandatory={error["LightType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.ElectricalConnectorType}
                    setValue={(val) =>
                      setForm({ ...form, ElectricalConnectorType: val })
                    }
                    label="Electrical Connector Type"
                    isMandatory={error["ElectricalConnectorType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.ElectricalWiringType}
                    setValue={(val) =>
                      setForm({ ...form, ElectricalWiringType: val })
                    }
                    label="Electrical Wiring Type"
                    isMandatory={error["ElectricalWiringType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BatteryType}
                    setValue={(val) => setForm({ ...form, BatteryType: val })}
                    label="Battery Type"
                    isMandatory={error["BatteryType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BatteryChargerType}
                    setValue={(val) =>
                      setForm({ ...form, BatteryChargerType: val })
                    }
                    label="Battery Charger Type"
                    isMandatory={error["BatteryChargerType"]}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Accessories</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SpareTyreCarrier}
                    setValue={(val) =>
                      setForm({ ...form, SpareTyreCarrier: val })
                    }
                    label="Spare Tyre Carrier"
                    isMandatory={error["SpareTyreCarrier"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.SpareTyreSize}
                    setValue={(val) => setForm({ ...form, SpareTyreSize: val })}
                    label="Spare Tyre Size"
                    isMandatory={error["SpareTyreSize"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.JackType}
                    setValue={(val) => setForm({ ...form, JackType: val })}
                    label="Jack Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.JackWheelType}
                    setValue={(val) => setForm({ ...form, JackWheelType: val })}
                    label="Jack Wheel Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.JackCapacity}
                    setValue={(val) => setForm({ ...form, JackCapacity: val })}
                    label="Jack Capacity"
                    isMandatory={error["JackCapacity"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>
                Environmental & Corrosion Resistance
              </h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.CorrosionProtection}
                    setValue={(val) =>
                      setForm({ ...form, CorrosionProtection: val })
                    }
                    label="Corrosion Protection"
                    isMandatory={error["CorrosionProtection"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Maintenance Features</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.GreasePoints}
                    setValue={(val) => setForm({ ...form, GreasePoints: val })}
                    label="Grease Points"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.BearingType}
                    setValue={(val) => setForm({ ...form, BearingType: val })}
                    label="Bearing Type"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Performance & Handling</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.MaximumSpeedRating}
                    setValue={(val) =>
                      setForm({ ...form, MaximumSpeedRating: val })
                    }
                    label="Maximum Speed Rating"
                    isMandatory={error["MaximumSpeedRating"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TurningRadius}
                    setValue={(val) => setForm({ ...form, TurningRadius: val })}
                    label="Turning Radius"
                    isMandatory={error["TurningRadius"]}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: 10 }}>Documentation</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.OwnerManual}
                    setValue={(val) => setForm({ ...form, OwnerManual: val })}
                    label="Owner Manual"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Tongue</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TongueShape}
                    setValue={(val) => setForm({ ...form, TongueShape: val })}
                    label="Tongue Shape"
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TongueJackWheelSize}
                    setValue={(val) =>
                      setForm({ ...form, TongueJackWheelSize: val })
                    }
                    label="Tongue Jack Wheel Size"
                    isMandatory={error["TongueJackWheelSize"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TongueWeight}
                    setValue={(val) => setForm({ ...form, TongueWeight: val })}
                    label="Tongue Weight"
                    isMandatory={error["TongueWeight"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Tyres & Wheels</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TyreSize}
                    setValue={(val) => setForm({ ...form, TyreSize: val })}
                    label="Tyre Size"
                    isMandatory={error["TyreSize"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TyreLoadRange}
                    setValue={(val) => setForm({ ...form, TyreLoadRange: val })}
                    label="Tyre Load Range"
                    isMandatory={error["TyreLoadRange"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.TyreType}
                    setValue={(val) => setForm({ ...form, TyreType: val })}
                    label="Tyre Type"
                    isMandatory={error["TyreType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    value={form.WheelType}
                    setValue={(val) => setForm({ ...form, WheelType: val })}
                    label="Wheel Type"
                    isMandatory={error["WheelType"]}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <SelectComponent
                    options={trailerOptions}
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
                    options={trailerOptions}
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
              <h6 style={{ marginLeft: 10 }}>Regulatory Compliance</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <CheckComponent
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    label="DOT Compliance"
                    setValue={(val) => setForm({ ...form, DOTCompliance: val })}
                    name="DOT Compliance"
                    id="DOTCompliance"
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

export default Trailers;
