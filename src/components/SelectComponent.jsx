import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function SelectComponent({
  label,
  setValue,
  value,
  setOpenKey,
  openKey,
  type,
  options
}) {
  const trailersOptions = {
    MarisailID: {
      name: "Marisail ID",
      options: [
        "Ifor Williams",
        "Load Rite",
        "SeaTrail",
        "Karavan",
        "Venture",
        "EZ Loader",
        "Wesco",
        "Road King",
      ],
    },
    Make: {
      name: "Make",
      options: [
        "P5",
        "P6e",
        "GD85",
        "CT177",
        "BV85",
        "LT85",
        "LM146",
        "LM187",
        "TA510",
        "HBX511",
        "TT3621",
        "TB4021",
      ],
    },
    Model: {
      name: "Model",
      options: [
        "Basic",
        "Deluxe",
        "Premium",
        "Pro",
        "Standard",
        "Custom",
        "Heavy-Duty",
        "Super-Heavy-Duty",
      ],
    },
    Year: {
      name: "Year",
      options: ["2022", "2023", "2024", "2025"],
    },
    Type: {
      name: "Type",
      options: [
        "Single-axle",
        "Tandem-axle",
        "Triple-axle",
        "Enclosed",
        "Open",
        "Flatbed",
        "Utility",
        "Box",
        "Car Hauler",
        "Boat Trailer",
        "Equipment Trailer,",
      ],
    },
    GVWR: {
      name: "Gross Vehicle Weight Rating",
      subtitle: "(GVWR)",
      options: [
        "2,000 lbs",
        "3,500 lbs",
        "5,000 lbs",
        "7,000 lbs",
        "10,000 lbs",
      ],
    },
    LoadCapacity: {
      name: "Load Capacity",
      options: [
        "1,500 lbs",
        "2,500 lbs",
        "4,000 lbs",
        "6,000 lbs",
        "8,500 lbs",
      ],
    },
    Length: {
      name: "Length",
      options: ["12 ft", "14 ft", "16 ft", "18 ft", "20 ft", "24 ft"],
    },
    Width: {
      name: "Width",
      options: ["6 ft", "6.5 ft", "7 ft", "8 ft", "8.5 ft"],
    },
    FrameMaterial: {
      name: "Frame Material",
      options: [
        "Galvanized Steel",
        "Powder-Coated Steel",
        "Painted Steel",
        "Stainless Steel",
        "Standard Aluminum",
        "Anodized Aluminum",
        "Marine-Grade Aluminum",
        "Carbon Fibre Composite",
      ],
    },
    FrameCoating: {
      name: "Frame Coating",
      options: [
        "Galvanized",
        "Powder-Coated",
        "Painted",
        "Uncoated",
        "Zinc-Coated",
      ],
    },
    FrameCrossmemberType: {
      name: "Frame Crossmember Type",
      options: ["Box-Section", "I-Beam", "Channel", "Tubular"],
    },
    FrameWeldType: {
      name: "Frame Weld Type",
      options: ["MIG", "TIG", "Stick", "Spot", "Seam"],
    },
    MaximumAngleofApproach: {
      name: "Maximum Angle of Approach",
      options: ["15 degrees", "20 degrees", "25 degrees"],
    },
    FloorMaterial: {
      name: "Floor Material",
      options: [
        "Plywood",
        "Marine Plywood",
        "Aluminum Plank",
        "Steel Plank",
        "Composite Decking",
      ],
    },
    SidesMaterial: {
      name: "Sides Material",
      options: [
        "Steel Panels",
        "Aluminum Panels",
        "Composite Panels",
        "Plywood Panels",
      ],
    },
    RoofMaterial: {
      name: "Roof Material",
      options: ["Steel Sheet", "Aluminum Sheet", "Fibreglass", "Composite"],
    },
    GreasePoints: {
      name: "Grease Points",
      options: ["4 Points", "6 Points", "8 Points"],
    },
    BearingType: {
      name: "Bearing Type",
      options: ["Tapered", "Sealed", "Needle", "Roller"],
    },
    MaintenanceSchedule: {
      name: "Maintenance Schedule",
      options: ["Monthly", "Quarterly", "Annually"],
    },
    Storage: {
      name: "Storage",
      options: ["Side Compartments", "Under Deck", "Front Compartments"],
    },
    TieDownPoints: {
      name: "Tie-Down Points",
      options: ["4 Points", "6 Points", "8 Points", "12 Points"],
    },
    ToolBox: {
      name: "Tool Box",
      options: ["Front Mount", "Side Mount", "Under Deck"],
    },
    BumperType: {
      name: "Bumper Type",
      options: ["Rubber", "Steel", "Aluminum", "Polyurethane", "Composite"],
    },
    RampType: {
      name: "Ramp Type",
      options: ["Steel Mesh", "Aluminum", "Foldable", "Adjustable"],
    },
    WinchPost: {
      name: "Winch Post",
      options: ["Adjustable", "Fixed", "Foldable"],
    },
    Fenders: {
      name: "Fenders",
      options: ["Steel", "Aluminum", "Plastic"],
    },
    Color: {
      name: "Color",
      options: ["White", "Black", "Silver", "Blue", "Red", "Green"],
    },
    Decals: {
      name: "Decals",
      options: ["Manufacturer Logo", "Custom Graphics", "Reflective Stripes"],
    },
    StorageBox: {
      name: "Storage Box",
      options: ["Steel", "Aluminum", "Plastic"],
    },
    LightingPackage: {
      name: "Lighting Package",
      options: ["Basic", "Advanced", "Premium"],
    },
    SuspensionUpgrade: {
      name: "Suspension Upgrade",
      options: ["Heavy-Duty", "Air Ride", "Custom"],
    },
    AxleType: {
      name: "Axle Type",
      options: ["Leaf Spring", "Torsion", "Rubber Torsion", "Air Ride"],
    },
    AxleCapacity: {
      name: "Axle Capacity",
      options: [
        "2,000 lbs",
        "3,500 lbs",
        "5,000 lbs",
        "7,000 lbs",
        "10,000 lbs",
      ],
    },
    AxleSealType: {
      name: "Axle Seal Type",
      options: ["Single Lip", "Double Lip", "Triple Lip"],
    },
    AxleHubSize: {
      name: "Axle Hub Size",
      options: ["1.5 inches", "2 inches", "2.5 inches", "3 inches"],
    },
    AxlePosition: {
      name: "Axle Position",
      options: ["Fixed", "Adjustable", "Sliding"],
    },
    SuspensionType: {
      name: "Suspension Type",
      options: ["Leaf Spring", "Torsion", "Rubber Torsion", "Air Ride"],
    },
    SuspensionCapacity: {
      name: "Suspension Capacity",
      options: [
        "2,000 lbs",
        "3,500 lbs",
        "5,000 lbs",
        "7,000 lbs",
        "10,000 lbs",
      ],
    },
    SuspensionAdjustment: {
      name: "Suspension Adjustment",
      options: ["Adjustable", "Non-Adjustable"],
    },
    TyreSize: {
      name: "Tyre Size",
      options: [
        "13 inches",
        "14 inches",
        "15 inches",
        "16 inches",
        "17 inches",
      ],
    },
    TyreLoadRange: {
      name: "Tyre Load Range",
      options: ["Load Range B", "Load Range C", "Load Range D", "Load Range E"],
    },
    TyreType: {
      name: "Tyre Type",
      options: ["Radial", "Bias-Ply", "Tubeless", "Tube-Type"],
    },
    WheelType: {
      name: "Wheel Type",
      options: ["Steel, Aluminum", "Chrome - Plated", "Painted", "Galvanized"],
    },
    WheelBoltPattern: {
      name: "Wheel Bolt Pattern",
      options: ["4-lug", "5-lug", "6-lug", "8-lug"],
    },
    HubLubricationSystem: {
      name: "Hub Lubrication System",
      options: ["Grease", "Oil Bath", "Bearing Buddies"],
    },
    BrakeType: {
      name: "Brake Type",
      options: ["Disc, Drum", "Electric", "Hydraulic", "Surge"],
    },
    BrakeActuator: {
      name: "Brake Actuator",
      options: ["Electric", "Hydraulic", "Surge"],
    },
    BrakeLineMaterial: {
      name: "Brake Line Material",
      options: [
        "Steel",
        "Stainless Steel",
        "Rubber-Coated",
        "Braided Stainless Steel",
      ],
    },
    BrakeDrumDiameter: {
      name: "Brake Drum Diameter",
      options: ["10 inches", "12 inches", "14 inches"],
    },
    BrakeFluidType: {
      name: "Brake Fluid Type",
      options: ["DOT 3", "DOT 4", "DOT 5", "DOT 5.1"],
    },
    CouplerSize: {
      name: "Coupler Size",
      options: ["1-7/8 inches", "2 inches", "2-5/16 inches", "3 inches"],
    },
    CouplerType: {
      name: "Coupler Type",
      options: ["Standard", "Adjustable, Pintle", "Gooseneck"],
    },
    CouplerLockType: {
      name: "Coupler Lock Type",
      options: ["Padlock", "Pin Lock", "Ball Lock"],
    },
    HitchClass: {
      name: "Hitch Class",
      options: ["Class I", "Class II", "Class III", "Class IV", "Class V"],
    },
    HitchReceiverSize: {
      name: "Hitch Receiver Size",
      options: ["1-1/4 inches", "2 inches", "2-1/2 inches", "3 inches"],
    },
    SafetyChains: {
      name: "Safety Chains",
      options: [
        "Steel",
        "Stainless Steel",
        "Galvanized Steel",
        "Powder-Coated Steel",
      ],
    },
    WinchType: {
      name: "Winch Type",
      options: ["Manual", "Electric", "Hydraulic", "Hand-Crank"],
    },
    WinchCapacity: {
      name: "Winch Capacity",
      options: ["1,000 lbs", "2,000 lbs", "3,500 lbs", "5,000 lbs"],
    },
    WinchRopeLength: {
      name: "Winch Rope Length",
      options: ["15 ft", "25 ft", "30 ft", "50 ft", "75 ft"],
    },
    WinchDrumMaterial: {
      name: "Winch Drum Material",
      options: ["Steel", "Aluminum", "Composite"],
    },
    WinchGearRatio: {
      name: "Winch Gear Ratio",
      options: ["2"],
    },
    WinchRemoteControl: {
      name: "Winch Remote Control",
      options: ["Wired", "Wireless", "None"],
    },
    WinchBrakeType: {
      name: "Winch Brake Type",
      options: ["Friction", "Mechanical", "Hydraulic"],
    },
    WinchCableType: {
      name: "Winch Cable Type",
      options: ["Galvanized Steel", "Stainless Steel", "Synthetic"],
    },
    WinchStrapLength: {
      name: "Winch Strap Length",
      options: ["20 ft", "30 ft", "40 ft"],
    },
    WinchHandleLength: {
      name: "Winch Handle Length",
      options: ["8 inches", "10 inches", "12 inches"],
    },
    WinchMounting: {
      name: "Winch Mounting",
      options: ["Front Mount", "Rear Mount", "Side Mount", "Adjustable Mount"],
    },
    Lighting: {
      name: "Lighting",
      options: ["LED", "Incandescent", "Halogen", "Xenon"],
    },
    LightMountingPosition: {
      name: "Light Mounting Position",
      options: ["Side", "Rear", "Front", "Top"],
    },
    LightType: {
      name: "Light Type",
      options: ["Combination", "Tail, Brake", "Turn Signal"],
    },
    ElectricalConnectorType: {
      name: "Electrical Connector Type",
      options: ["4-pin flat", "5-pin flat", "6-pin round", "7-pin round"],
    },
    ElectricalWiringType: {
      name: "Electrical Wiring Type",
      options: ["Marine-Grade", "Standard", "Heavy-Duty", "Weatherproof"],
    },
    BatteryType: {
      name: "Battery Type",
      options: ["12V Deep Cycle", "12V Gel", "12V AGM", "12V Lithium"],
    },
    BatteryChargerType: {
      name: "Battery Charger Type",
      options: ["Trickle", "Smart", "Fast", "Solar"],
    },
    SpareTyreCarrier: {
      name: "Spare Tyre Carrier",
      options: ["Side Mount", "Rear Mount", "Under-Mount"],
    },
    SpareTyreSize: {
      name: "Spare Tyre Size",
      options: ["13 inches", "14 inches", "15 inches", "16 inches"],
    },
    SpareTyreMountingLocation: {
      name: "Spare Tyre Mounting Location",
      options: ["Side", "Rear", "Underneath"],
    },
    JackType: {
      name: "Jack Type",
      options: ["Swivel", "Fixed", "Drop-Leg", "Scissor"],
    },
    JackWheelType: {
      name: "Jack Wheel Type",
      options: ["Caster", "Polyurethane", "Solid Rubber"],
    },
    JackCapacity: {
      name: "Jack Capacity",
      options: ["1,000 lbs", "1,500 lbs", "2,000 lbs", "2,500 lbs"],
    },
    JackLiftHeight: {
      name: "Jack Lift Height",
      options: ["12 inches", "15 inches", "18 inches", "24 inches"],
    },
    LoadingSystem: {
      name: "Loading System",
      options: ["Bunks", "Rollers", "Combination", "Lift"],
    },
    Bunks: {
      name: "Bunks",
      options: ["Carpeted", "Non-Carpeted", "Adjustable", "Fixed"],
    },
    BunkMaterial: {
      name: "Bunk Material",
      options: ["Wood", "Composite", "Aluminum"],
    },
    BunkWidth: {
      name: "Bunk Width",
      options: ["4 inches", "6 inches", "8 inches"],
    },
    BunkHeightAdjustment: {
      name: "Bunk Height Adjustment",
      options: ["Adjustable", "Non-Adjustable"],
    },
    BunkMountingBracketMaterial: {
      name: "Bunk Mounting Bracket Material",
      options: ["Steel", "Aluminum", "Composite"],
    },
    Rollers: {
      name: "Rollers",
      options: ["Polyurethane", "Rubber", "HDPE", "Teflon"],
    },
    RollerMaterial: {
      name: "Roller Material",
      options: ["Polyurethane", "Rubber", "HDPE", "Teflon"],
    },
    RollerAxleDiameter: {
      name: "Roller Axle Diameter",
      options: ["1 inch", "1.25 inches", "1.5 inches"],
    },
    WheelLocks: {
      name: "Wheel Locks",
      options: ["Lug Locks", "Hub Locks", "Tyre Locks"],
    },
    LockType: {
      name: "Lock Type",
      options: ["Coupler Lock", "Wheel Lock", "Tongue Lock"],
    },
    AlarmSystem: {
      name: "Alarm System",
      options: ["Motion Sensor", "GPS Tracking", "Proximity Sensor"],
    },
    GPSTrackingDevice: {
      name: "GPS Tracking Device",
      options: ["Real-Time", "Passive", "Cellular", "Satellite"],
    },
    CorrosionProtection: {
      name: "Corrosion Protection",
      options: [
        "Galvanized Coating",
        "Zinc Plating",
        "Epoxy Coating",
        "Powder Coating",
      ],
    },
    RustInhibitors: {
      name: "Rust Inhibitors",
      options: ["Spray-On", "Paint-On", "Dip", "Electroplating"],
    },
    MaximumSpeedRating: {
      name: "Maximum Speed Rating",
      options: ["55 mph", "65 mph", "75 mph"],
    },
    TurningRadius: {
      name: "Turning Radius",
      options: ["15 ft", "20 ft", "25 ft"],
    },
    TongueMaterial: {
      name: "Tongue Material",
      options: [
        "Galvanized Steel",
        "Stainless Steel",
        "Standard Aluminum",
        "Anodized Aluminum",
      ],
    },
    TongueShape: {
      name: "Tongue Shape",
      options: ["A-frame", "Straight", "V-Shape", "Adjustable"],
    },
    TongueJackWheelSize: {
      name: "Tongue Jack Wheel Size",
      options: ["6 inches", "8 inches", "10 inches"],
    },
    TongueJackType: {
      name: "Tongue Jack Type",
      options: ["Bolt-On", "Weld-On", "Clamp-On"],
    },
    TongueWeight: {
      name: "Tongue Weight",
      options: ["100 lbs", "200 lbs", "300 lbs", "400 lbs"],
    },
    TongueWeightRatio: {
      name: "Tongue Weight Ratio",
      options: ["10%", "15%", "20%"],
    },
    OwnerManual: {
      name: "Owner’s Manual",
      options: ["Print", "Digital"],
    },
    Warranty: {
      name: "Warranty",
      options: ["1 Year", "2 Years", "5 Years"],
    },
  };
  
  let selectedComponent = trailersOptions;
  return (
    <Accordion
      activeKey={openKey}
      onSelect={(eventKey) => setOpenKey(eventKey)}
    >
      <Accordion.Item eventKey={label}>
        <Accordion.Header>{label}</Accordion.Header>
        <Accordion.Body>
          {options.map((item,index) => {
            return (
              <Form.Check
                type="radio"
                key={index}
                aria-label="radio 1"
                name={label}
                checked={item === value}
                onChange={() => setValue(item)}
                label={item}
              />
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

SelectComponent.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  setOpenKey: PropTypes.func.isRequired,
  openKey: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array.isRequired
};
export default SelectComponent;
