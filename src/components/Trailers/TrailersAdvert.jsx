import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SelectComponent from "../SelectComponent";
import InputComponent from "../InputComponent";
import RadioOptions from "../RadioOptions";

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
      console.log("Form", form);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDistinctValues = async (
    trailerID,
    manufacturer,
    make,
    model,
    year,
    fetchColumn
  ) => {
    const URL = `http://localhost:3001/api/trailers/Trailers_ID/${fetchColumn}/distinct?marisail_trailer_id=${encodeURIComponent(
      trailerID
    )}&manufacturer=${encodeURIComponent(
      manufacturer
    )}&make=${encodeURIComponent(make)}&model=${encodeURIComponent(
      model
    )}&year=${encodeURIComponent(year)}`;
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      console.log("001 JSON--", toJson);

      // if (fetchColumn == "marisail_trailer_id") {
      //   setMarisailTrailerIdOptions(toJson.result);
      // } else if (fetchColumn == "manufacturer") {
      //   setManufacturerOptions(toJson.result);
      // } else if (fetchColumn == "make") {
      //   setMakeOptions(toJson.result);
      // } else if (fetchColumn == "model") {
      //   setModelOptions(toJson.result);
      // } else if (fetchColumn == "year") {
      //   setYearOptions(toJson.result);
      // }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSingleSelectOption = (category, option) => {
    setForm((prevOptions) => ({
      ...prevOptions,
      [category]: option,
    }));
  };

  useEffect(() => {
    // fetchDistinctValues(
    //   form.MarisailID,
    //   form.manufacturer,
    //   form.make,
    //   form.model,
    //   form.year,
    //   "make"
    // );
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
                  {/* <InputComponent
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
                  /> */}
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Manufacturer"
                    selectedOption={form.manufacturer}
                    category="manufacturer"
                    onSelect={handleSingleSelectOption}
                    tableName="Trailers_ID"
                    columnName="manufacturer"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Make"
                    selectedOption={form.Make}
                    category="Make"
                    onSelect={handleSingleSelectOption}
                    tableName="Trailers_ID"
                    columnName="make"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Make"] && errorDisplay("Make")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Model"
                    selectedOption={form.Model}
                    category="Model"
                    onSelect={handleSingleSelectOption}
                    tableName="Trailers_ID"
                    columnName="model"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Model"] && errorDisplay("Model")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Year"
                    selectedOption={form.Year}
                    category="Year"
                    onSelect={handleSingleSelectOption}
                    tableName="Trailers_ID"
                    columnName="year"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="WheelLocks"
                    selectedOption={form.WheelLocks}
                    category="WheelLocks"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Lock Type"
                    selectedOption={form.LockType}
                    category="Lock Type"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="security_lock"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Alarm System"
                    selectedOption={form.AlarmSystem}
                    category="Alarm System"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="alarm"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="GPS Tracking Device"
                    selectedOption={form.GPSTrackingDevice}
                    category="GPS Tracking Device"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="gps_tracking_device"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Type"
                    selectedOption={form.Type}
                    category="Type"
                    onSelect={handleSingleSelectOption}
                    tableName="Trailers_ID"
                    columnName="type"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Type"] && errorDisplay("Type")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="GVWR"
                    selectedOption={form.GVWR}
                    category="GVWR"
                    onSelect={handleSingleSelectOption}
                    tableName="Trailers_ID"
                    columnName="gvwr"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["GVWR"] && errorDisplay("GVWR")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Load Capacity"
                    selectedOption={form.GVWR}
                    category="LoadCapacity"
                    onSelect={handleSingleSelectOption}
                    tableName="Trailers_ID"
                    columnName="load_capacity"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Length"
                    selectedOption={form.Length}
                    category="Length"
                    onSelect={handleSingleSelectOption}
                    tableName="Trailers_ID"
                    columnName="length"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Length"] && errorDisplay("Length")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Width"
                    selectedOption={form.Width}
                    category="Width"
                    onSelect={handleSingleSelectOption}
                    tableName="Trailers_ID"
                    columnName="width"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Frame Material"
                    selectedOption={form.FrameMaterial}
                    category="FrameMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="frame_material"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Frame Coating"
                    selectedOption={form.FrameCoating}
                    category="FrameCoating"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="frame_coating"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Frame Crossmember Type"
                    selectedOption={form.FrameCrossmemberType}
                    category="FrameCrossmemberType"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="frame_crossmember"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="FrameWeld Type"
                    selectedOption={form.FrameWeldType}
                    category="FrameWeldType"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="frame_Weld"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Maximum Angle of Approach"
                    selectedOption={form.MaximumAngleofApproach}
                    category="MaximumAngleofApproach"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="maximum_approach"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Floor Material"
                    selectedOption={form.FloorMaterial}
                    category="FloorMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="floor_material"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Sides Material"
                    selectedOption={form.SidesMaterial}
                    category="SidesMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="sides_material"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Roof Material"
                    selectedOption={form.RoofMaterial}
                    category="RoofMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="roof_material"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Storage"
                    selectedOption={form.Storage}
                    category="Storage"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="storage"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Tie Down Points"
                    selectedOption={form.TieDownPoints}
                    category="TieDownPoints"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="tie_down_points"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Tool Box"
                    selectedOption={form.ToolBox}
                    category="ToolBox"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="tool_box"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Bumper Type"
                    selectedOption={form.BumperType}
                    category="BumperType"
                    onSelect={handleSingleSelectOption}
                    tableName="construction"
                    columnName="bumper"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Hydraulic Tilt"
                    selectedOption={form.HydraulicTilt}
                    category="HydraulicTilt"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="hydraulic_tilt"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Extendable Tongue"
                    selectedOption={form.ExtendableTongue}
                    category="ExtendableTongue"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="extendable_tongue"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Adjustable Deck Height"
                    selectedOption={form.AdjustableDeckHeight}
                    category="AdjustableDeckHeight"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="deck_height"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Detachable Side Panels"
                    selectedOption={form.DetachableSidePanels}
                    category="DetachableSidePanels"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="side_panels"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Ramp Type"
                    selectedOption={form.RampType}
                    category="RampType"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="ramp"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Winch Post"
                    selectedOption={form.WinchPost}
                    category="WinchPost"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="winch_post"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Splash Guards"
                    selectedOption={form.SplashGuards}
                    category="SplashGuards"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="splash_guards"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Fenders"
                    selectedOption={form.Fenders}
                    category="Fenders"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="fenders"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Side Rails"
                    selectedOption={form.SideRails}
                    category="SideRails"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="side _rails"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Color"
                    selectedOption={form.Color}
                    category="Color"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="color"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                  <div className="ms-2">
                    <p>
                      <small>{error["Color"] && errorDisplay("Color")}</small>
                    </p>
                  </div>
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Decals"
                    selectedOption={form.Decals}
                    category="Decals"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="decals"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Storage Box"
                    selectedOption={form.StorageBox}
                    category="StorageBox"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="storage_box"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Lighting Package"
                    selectedOption={form.LightingPackage}
                    category="LightingPackage"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="lighting_package"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Suspension Upgrade"
                    selectedOption={form.SuspensionUpgrade}
                    category="SuspensionUpgrade"
                    onSelect={handleSingleSelectOption}
                    tableName="features"
                    columnName="suspension_upgrade"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Axle Type"
                    selectedOption={form.AxleType}
                    category="AxleType"
                    onSelect={handleSingleSelectOption}
                    tableName="axles"
                    columnName="axle"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="AxleCapacity"
                    selectedOption={form.AxleCapacity}
                    category="AxleCapacity"
                    onSelect={handleSingleSelectOption}
                    tableName="axles"
                    columnName="axle_capacity"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Axle Seal Type"
                    selectedOption={form.AxleSealType}
                    category="AxleSealType"
                    onSelect={handleSingleSelectOption}
                    tableName="axles"
                    columnName="axle_seal"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Axle Hub Size"
                    selectedOption={form.AxleHubSize}
                    category="AxleHubSize"
                    onSelect={handleSingleSelectOption}
                    tableName="axles"
                    columnName="axle_hub"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Axle Position"
                    selectedOption={form.AxlePosition}
                    category="AxlePosition"
                    onSelect={handleSingleSelectOption}
                    tableName="axles"
                    columnName="axle_position"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Drop Axle Option"
                    selectedOption={form.DropAxleOption}
                    category="DropAxleOption"
                    onSelect={handleSingleSelectOption}
                    tableName="axles"
                    columnName="drop_axle_option"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Suspension Type"
                    selectedOption={form.SuspensionType}
                    category="SuspensionType"
                    onSelect={handleSingleSelectOption}
                    tableName="axles"
                    columnName="suspension"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Suspension Capacity"
                    selectedOption={form.SuspensionCapacity}
                    category="SuspensionCapacity"
                    onSelect={handleSingleSelectOption}
                    tableName="axles"
                    columnName="suspension_capacity"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Suspension Adjustment"
                    selectedOption={form.SuspensionAdjustment}
                    category="SuspensionAdjustment"
                    onSelect={handleSingleSelectOption}
                    tableName="axles"
                    columnName="suspension_adjustment"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Loading System"
                    selectedOption={form.LoadingSystem}
                    category="LoadingSystem"
                    onSelect={handleSingleSelectOption}
                    tableName="loading_transport_features"
                    columnName="loading"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Bunks"
                    selectedOption={form.Bunks}
                    category="Bunks"
                    onSelect={handleSingleSelectOption}
                    tableName="loading_transport_features"
                    columnName="bunks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Bunk Material"
                    selectedOption={form.BunkMaterial}
                    category="BunkMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="loading_transport_features"
                    columnName="bunk_material"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Bunk Width"
                    selectedOption={form.BunkWidth}
                    category="BunkWidth"
                    onSelect={handleSingleSelectOption}
                    tableName="loading_transport_features"
                    columnName="bunk_width"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Bunk Height Adjustment"
                    selectedOption={form.BunkHeightAdjustment}
                    category="BunkHeightAdjustment"
                    onSelect={handleSingleSelectOption}
                    tableName="loading_transport_features"
                    columnName="bunk_height_adjustment"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Bunk Mounting Bracket Material"
                    selectedOption={form.BunkMountingBracketMaterial}
                    category="BunkMountingBracketMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="loading_transport_features"
                    columnName="bunk_mounting_bracket_material"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Rollers"
                    selectedOption={form.Rollers}
                    category="Rollers"
                    onSelect={handleSingleSelectOption}
                    tableName="loading_transport_features"
                    columnName="rollers"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Roller Material"
                    selectedOption={form.RollerMaterial}
                    category="RollerMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="loading_transport_features"
                    columnName="roller_material"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Roller Axle Diameter"
                    selectedOption={form.RollerAxleDiameter}
                    category="RollerAxleDiameter"
                    onSelect={handleSingleSelectOption}
                    tableName="loading_transport_features"
                    columnName="roller_axle_diameter"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="BrakeType"
                    selectedOption={form.BrakeType}
                    category="BrakeType"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="brake"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Brake Actuator"
                    selectedOption={form.BrakeActuator}
                    category="BrakeActuator"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="brake_actuator"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Brake Line Material"
                    selectedOption={form.BrakeLineMaterial}
                    category="BrakeLineMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="brake_line"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Brake Drum Diameter"
                    selectedOption={form.BrakeDrumDiameter}
                    category="BrakeDrumDiameter"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="brake_drum"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Brake Fluid Type"
                    selectedOption={form.BrakeFluidType}
                    category="BrakeFluidType"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="brake_fluid"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Brakes"
                    selectedOption={form.Brakes}
                    category="Brakes"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="brakes"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Coupler Size"
                    selectedOption={form.CouplerSize}
                    category="CouplerSize"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="coupler_size"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Coupler Type"
                    selectedOption={form.CouplerType}
                    category="CouplerType"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="coupler_type"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Coupler Lock Type"
                    selectedOption={form.CouplerLockType}
                    category="CouplerLockType"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="coupler_type"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
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
                  <RadioOptions
                    title="Hitch Class"
                    selectedOption={form.HitchClass}
                    category="HitchClass"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="hitch_class"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Hitch Receiver Size"
                    selectedOption={form.HitchReceiverSize}
                    category="HitchReceiverSize"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="hitch_receiver"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Safety Chains"
                    selectedOption={form.SafetyChains}
                    category="SafetyChains"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="safety_chains"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Breakaway System"
                    selectedOption={form.BreakawaySystem}
                    category="BreakawaySystem"
                    onSelect={handleSingleSelectOption}
                    tableName="tyres_brakes"
                    columnName="breakaway"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Winch Type"
                    selectedOption={form.WinchType}
                    category="WinchType"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="WinchCapacity"
                    selectedOption={form.WinchCapacity}
                    category="WinchCapacity"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_capacity"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Winch Rope Length"
                    selectedOption={form.WinchRopeLength}
                    category="WinchRopeLength"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_rope_length"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Winch Drum Material"
                    selectedOption={form.WinchDrumMaterial}
                    category="WinchDrumMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_drum_material"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Winch Gear Ratio"
                    selectedOption={form.WinchGearRatio}
                    category="WinchGearRatio"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_gear_ratio"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Winch Remote Control"
                    selectedOption={form.WinchRemoteControl}
                    category="WinchRemoteControl"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_remote_control"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Winch Brake Type"
                    selectedOption={form.WinchBrakeType}
                    category="WinchBrakeType"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_brake"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Winch Cable Type"
                    selectedOption={form.WinchCableType}
                    category="WinchCableType"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_cable"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Winch Strap Length"
                    selectedOption={form.WinchStrapLength}
                    category="WinchStrapLength"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_strap_length"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Winch Handle Length"
                    selectedOption={form.WinchHandleLength}
                    category="WinchHandleLength"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_handle_length"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Winch Mounting"
                    selectedOption={form.WinchMounting}
                    category="WinchMounting"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="winch_mounting"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Lighting"
                    selectedOption={form.Lighting}
                    category="Lighting"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="lighting"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Light Mounting Position"
                    selectedOption={form.LightMountingPosition}
                    category="LightMountingPosition"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="light_mounting_position"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Light Type"
                    selectedOption={form.LightType}
                    category="LightType"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="light"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Electrical Connector Type"
                    selectedOption={form.ElectricalConnectorType}
                    category="ElectricalConnectorType"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Electrical Wiring Type"
                    selectedOption={form.ElectricalWiringType}
                    category="WheelLocks"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="BatteryType"
                    selectedOption={form.BatteryType}
                    category="BatteryType"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="battery"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Battery Charger Type"
                    selectedOption={form.BatteryChargerType}
                    category="BatteryChargerType"
                    onSelect={handleSingleSelectOption}
                    tableName="winches_lighting"
                    columnName="battery_charger"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Spare Tyre Carrier"
                    selectedOption={form.SpareTyreCarrier}
                    category="SpareTyreCarrier"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Spare Tyre Size"
                    selectedOption={form.SpareTyreSize}
                    category="SpareTyreSize"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Spare Tyre Mounting Location"
                    selectedOption={form.SpareTyreMountingLocation}
                    category="SpareTyreMountingLocation"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Jack Type"
                    selectedOption={form.JackType}
                    category="JackType"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Jack Wheel Type"
                    selectedOption={form.JackWheelType}
                    category="JackWheelType"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Jack Capacity"
                    selectedOption={form.JackCapacity}
                    category="JackCapacity"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Jack Lift Height"
                    selectedOption={form.JackLiftHeight}
                    category="JackLiftHeight"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="GreasePoints"
                    selectedOption={form.GreasePoints}
                    category="Grease Points"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Bearing Type"
                    selectedOption={form.BearingType}
                    category="BearingType"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Maintenance Schedule"
                    selectedOption={form.MaintenanceSchedule}
                    category="MaintenanceSchedule"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Corrosion Protection"
                    selectedOption={form.CorrosionProtection}
                    category="CorrosionProtection"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="RustInhibitors"
                    selectedOption={form.RustInhibitors}
                    category="Rust Inhibitors"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Maximum Speed Rating"
                    selectedOption={form.MaximumSpeedRating}
                    category="MaximumSpeedRating"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Turning Radius"
                    selectedOption={form.TurningRadius}
                    category="TurningRadius"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="OwnerManual"
                    selectedOption={form.OwnerManual}
                    category="OwnerManual"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Warranty"
                    selectedOption={form.Warranty}
                    category="Warranty"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
              </Col>
            </Col>
            <Col md={6} className="mt-4">
              <h6 style={{ marginLeft: "3%", color: "#1F75FE" }}>Tongue</h6>
              <Col md={12} className="mt-4 mr-3" style={{ width: "480px" }}>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Tongue Material"
                    selectedOption={form.TongueMaterial}
                    category="TongueMaterial"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Tongue Shape"
                    selectedOption={form.TongueShape}
                    category="TongueShape"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Tongue Jack Wheel Size"
                    selectedOption={form.TongueJackWheelSize}
                    category="TongueJackWheelSize"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Tongue Jack Type"
                    selectedOption={form.TongueJackType}
                    category="TongueJackType"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Tongue Weight"
                    selectedOption={form.TongueWeight}
                    category="TongueWeight"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Tongue Weight Ratio"
                    selectedOption={form.TongueWeightRatio}
                    category="TongueWeightRatio"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="TyreSize"
                    selectedOption={form.TyreSize}
                    category="TyreSize"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="TyreLoadRange"
                    selectedOption={form.TyreLoadRange}
                    category="TyreLoadRange"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Tyre Type"
                    selectedOption={form.TyreType}
                    category="TyreType"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="Wheel Type"
                    selectedOption={form.WheelType}
                    category="WheelType"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={true}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="WheelBoltPattern"
                    selectedOption={form.WheelBoltPattern}
                    category="WheelBoltPattern"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="Hub Lubrication System"
                    selectedOption={form.HubLubricationSystem}
                    category="HubLubricationSystem"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
                  <RadioOptions
                    title="DOT Compliance"
                    selectedOption={form.DOTCompliance}
                    category="DOTCompliance"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="NATM Certification"
                    selectedOption={form.NATMCertification}
                    category="NATMCertification"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="EU Type Approval"
                    selectedOption={form.EUTypeApproval}
                    category="EUTypeApproval"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                  />
                </Col>
                <Col xs={3} md={12} className="mb-2">
                  <RadioOptions
                    title="ADR Compliance"
                    selectedOption={form.ADRCompliance}
                    category="ADRCompliance"
                    onSelect={handleSingleSelectOption}
                    tableName="security_features"
                    columnName="wheel_locks"
                    isMandatory={false}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
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
