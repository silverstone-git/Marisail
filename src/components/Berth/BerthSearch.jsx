import { Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import DropdownWithCheckBoxes from "../DropdownWithCheckBoxes2";
import Loader from "../Loader";
import BerthCard from "../BerthCard";
import ResetBar from "../ResetBar";
import { varToScreen } from "./BerthInfo";
// import { number } from "prop-types";
const apiUrl = import.meta.env.VITE_BACKEND_URL;

export default function BerthSearch() {
  const [page, setPage] = useState(0);
  // const [lastpage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [allSelectedOptions, setAllSelectedOptions] = useState([]);
  const [siteDetails, setSiteDetails] = useState({
    siteDetails: [],
    termsAndConditions: [
      // ["Venture", 5],
      // ["Karavan", 5],
      // ["manufacturerr", 5],
      // ["manufacturerrr", 5],
      // ["manufacturerrrr", 5],
    ],
    type: [
      // ["P5", 5],
      // ["GD85", 5],
      // ["makeee", 5],
      // ["makeeee", 5],
      // ["makeeeee", 5],
    ],
    marinaName: [
      // ["Premium", 5],
      // ["Deluxe", 5],
      // ["Pro", 5],
    ],
    location: [],
    ownership: [],
    yearEstablished: [],
    operatingHours: [],
    seasonalOperation: [],
    languageServices: [],
  });

  const [generalInformation, setGeneralInformation] = useState({
    dockTypes: [],
    numberOfDocks: [],
    boatSlipSizes: [],
    numberOfBerthsAvailable: [],
    length: [],
    beam: [],
    draft: [],
    slipWidth: [],
    slipLength: [],
    mooringType: [],
    tideRange: [],
  });

  const [amenitiesAndServices, setAmenitiesAndServices] = useState({
    electricityAvailable: [],
    waterSupply: [],
    wifiAvailability: [],
    carParking: [],
  });

  const [familyFacilities, setFamilyFacilities] = useState({
    laundryFacilities: [],
    restaurantsAndCafes: [],
    restaurant: [],
    bar: [],
    shoppingFacilities: [],
    retailShops: [],
    hospitalityServices: [],
    clubhouseAccess: [],
    swimmingPool: [],
    fitnessCenter: [],
    marinaStore: [],
    chandlery: [],
    restroomAndShowers: [],
    laundryServices: [],
    gymFacilities: [],
    familyFriendlyAmenities: [],
    petFriendlyServices: [],
  });

  const [communityAndSocial, setCommunityAndSocial] = useState({
    yachtClubMembership: [],
  });

  const [services, setServices] = useState({
    docksideTrolley: [],
    fuelTypesAvailable: [],
    fuelDock: [],
    electricalHookupSpecifications: [],
  });

  const [repairAndMaintenance, setRepairAndMaintenance] = useState({
    boatLiftSpecifications: [],
  });

  const [accessibility, setAccessibility] = useState({
    handicapAccessibleSlips: [],
    proximityToHandicapParking: [],
    accessibleFacilities: [],
    assistanceServicesForDisabled: [],
    signageAndDirections: [],
    accessibleRestroomsAndShowers: [],
  });

  const [connectivityAndTransportation, setconnectivityAndTransportation] = useState({
    taxiServices: [],
  });

  const [environmentalConsiderations, setEnvironmentalConsiderations] = useState({
    wasteDisposal: [],
    waterHookupSpecifications: [],
  });

  const [securityAndSafety, setSecurityAndSafety] = useState({
   fireSafetyEquipment: [],
    firstAidKits: [],
    securityPatrol: [],
    cctvSurveillance: [],
  });

  const [financialInformation, setFinancialInformation] = useState({
    currency: [],
  });

  const [pricingAndLeaseTerms, setPricingAndLeaseTerms] = useState({
    pricePerAnnum: [],
    pricePerMonth: [],
    pricePerWeek: [],
    availability: [],
    annualLeaseRenewable: [],
    cancellationPolicy: [],
  });

  const [notDefined, setNotDefined] = useState({
    priceLabel: [],
    priceDrop: [],
    country: [],
    addressDetails: [],
    distance: [],
  });

  const filters = {
    siteDetails,
    generalInformation,
    amenitiesAndServices,
    familyFacilities,
    communityAndSocial,
    services,
    repairAndMaintenance,
    accessibility,
    connectivityAndTransportation,
    environmentalConsiderations,
    securityAndSafety,
    financialInformation,
    pricingAndLeaseTerms,
    notDefined,
  };

  const setStateFunctions = {
    siteDetails: setSiteDetails,
    generalInformation: setGeneralInformation,
    amenitiesAndServices: setAmenitiesAndServices,
    familyFacilities: setFamilyFacilities,
    communityAndSocial: setCommunityAndSocial,
    services: setServices,
    repairAndMaintenance: setRepairAndMaintenance,
    accessibility: setAccessibility,
    connectivityAndTransportation: setconnectivityAndTransportation,
    environmentalConsiderations: setEnvironmentalConsiderations,
    securityAndSafety: setSecurityAndSafety,
    financialInformation: setFinancialInformation,
    pricingAndLeaseTerms: setPricingAndLeaseTerms,
    notDefined: setNotDefined,
  };

  const lookUpTable = {};
  Object.keys(filters).forEach((key) => {
    Object.keys(filters[key]).forEach((key2) => {
      lookUpTable[key2] = key;
    });
  });

  // console.log(lookUpTable);

  function removeTag(tag) {
    setAllSelectedOptions((prev) => {
      delete prev[tag];
      return { ...prev };
    });
  }

  function resetTags() {
    setAllSelectedOptions({});
  }

  function setFilters(key, data) {
    const setStateFunction = setStateFunctions[key];
    console.log(key);
    console.log(data);
    if (setStateFunction) {
      setStateFunction(data);
    } else {
      console.error(`No setState function found for key: ${key}`);
    }

    console.log("Data fetched from API", filters);
  }

  const cacheKey = "trailersFilterData";
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const URL = apiUrl +"/search_berth/";

  // fetch all the count of the available columns
  var data;
  const fetchFilterData = async () => {
    for (const key of Object.keys(filters)) {
      console.log("filters", filters[key]);
      try {
        const response = await fetch(`${URL}berths`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tableName: key,
            filter: filters[key],
          }),
        });

        data = await response.json();
        // console.log(data.res);
        setFilters(key, data.res);
      } catch (err) {
        console.log(err);
      } finally {
        // console.log("done");
      }
    }

    // console.log("Data fetched from API", filters);
    // localStorage.setItem(cacheKey, JSON.stringify(filters));
  };

  useEffect(() => {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      setFilters(JSON.parse(cachedData));
      console.log("Data fetched from cache", JSON.parse(cachedData));
    } else {
      // Fetch data if not cached
      fetchFilterData();
    }

    console.log(filters);
  }, []);

  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    setLoading(true);
    let currInfo = {
      selectedOptions: allSelectedOptions,
      page: page,
    };
    const fetchTrailerData = async () => {
      try {
        const response = await fetch(`${URL}berthsData`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currInfo),
        });

        const data = await response.json();
        console.log(data);
        setTrailers(data.res[0]);
        console.log("trailers", trailers);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);

        console.log("done");
      }
    };

    fetchTrailerData();
  }, [allSelectedOptions, page]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Row>
            <h4
              className="py-3"
              // style={{ borderBottom: "2px solid #f5f5f5", width: "80%" }}
            >
              Search For Berth
            </h4>
          </Row>
          <Row>
            <ResetBar
              selectedTags={allSelectedOptions}
              removeTag={removeTag}
              resetTags={resetTags}
            />
          </Row>
          <Row>
            {Object.keys(filters).map((key) => (
              <fieldset
                // style={{ borderBottom: "2px solid #f5f5f5", width: "80%" }}
                key={key}
              >
                <legend className="fieldset-legend">
                  <h6
                    style={{
                      padding: "15px 0px 0px 0px",
                    }}
                  >
                    {varToScreen[key]}
                  </h6>
                </legend>
                {Object.keys(filters[key]).map((key2) => (
                  <Row key={key2} className="row-margin">
                    <Col md={12}>
                      <Form.Group>
                        <DropdownWithCheckBoxes
                          heading={key2}
                          title={varToScreen[key2]}
                          options={filters[key][key2]}
                          selectedOptions={allSelectedOptions}
                          setSelectedOptions={setAllSelectedOptions}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                ))}
              </fieldset>
            ))}
          </Row>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={12}>
              <h1
                style={{
                  fontSize: "28.8px",
                  fontWeight: "200",
                  padding: "20px",
                }}
              >
                Berths For Sale
              </h1>
            </Col>
          </Row>
          {loading ? (
            // <p>Loading...</p>
            <Loader />
          ) : (
            <Row>
              {trailers.length === 0 ? (
                <Col md={12}>
                  <p>No Results Found</p>
                </Col>
              ) : (
                trailers.map((trailer) => {
                  return (
                    <Col key={trailer} md={4}>
                      {/* <h1>{trailer.m}</h1> */}
                      <BerthCard {...trailer} />
                    </Col>
                  );
                })
              )}
            </Row>
          )}
          {/* {!loading ? <Pagination totalPages={pagination.totalPages} /> : <></>} */}

          <Row style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 0}
              >
                Previous
              </button>
              {/* Page {page} of {pagination.totalPages} */}
              <span>Page {page + 1}</span>
              {/* <button
                key={page}
                className="active"
                // onClick={() => updatePage(page)}
              >
                {page}
              </button> */}
              <button
                onClick={() => handlePageChange(page + 1)}
                // disabled={page === pagination.totalPages}
              >
                Next
              </button>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
