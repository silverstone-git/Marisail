import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SelectComponent from "../SelectComponent";
// import InputComponent from "../InputComponent";
// import CheckComponent from "../CheckComponent";
import "./engineAdvert.module.scss";

const EngineAdvert = () => {
  const [form, setForm] = useState({
    condition: "",
    usedCondition: "",
    seller: "",
    offeredBy: "",
    lastSurveyDate: "",
    brokerValuation: "",
    marisailVesselId: "",
    engineMake: "",
    engineClassification: "",
    certification: "",
    engineModel: "",
    manufacturerWarranty: "",
  });
  const [openKey, setOpenKey] = useState(null);

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col md={6}>
            <Card className="mt-4 shadow-sm">
              <Card.Header as="h6" className="card-header bg-transparent">
                Condition
              </Card.Header>
              <Card.Body className="pt-4">
                <Form>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      label="Condition"
                      value={form.condition}
                      setValue={(val) => setForm({ ...form, condition: val })}
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      value={form.usedCondition}
                      setValue={(val) =>
                        setForm({ ...form, usedCondition: val })
                      }
                      label="UsedCondition"
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.seller}
                      setValue={(val) => setForm({ ...form, seller: val })}
                      label="Seller"
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.offeredBy}
                      setValue={(val) => setForm({ ...form, offeredBy: val })}
                      label="offeredBy"
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.lastSurveyDate}
                      setValue={(val) => setForm({ ...form, lastSurveyDate: val })}
                      label="lastSurveyDate"
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.brokerValuation}
                      setValue={(val) => setForm({ ...form, brokerValuation: val })}
                      label="brokerValuation"
                    />
                  </Col>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mt-4 shadow-sm">
              <Card.Header as="h6" className="card-header bg-transparent">
                General
              </Card.Header>
              <Card.Body className="pt-4">
                <Form>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.marisailVesselId}
                      setValue={(val) => setForm({ ...form, marisailVesselId: val })}
                      label="marisailVesselId"
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineMake}
                      setValue={(val) => setForm({ ...form, engineMake: val })}
                      label="engineMake"
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineClassification}
                      setValue={(val) =>
                        setForm({ ...form, engineClassification: val })
                      }
                      label="engineClassification"
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.certification}
                      setValue={(val) => setForm({ ...form, certification: val })}
                      label="certification"
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineModel}
                      setValue={(val) => setForm({ ...form, engineModel: val })}
                      label="engineModel"
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.manufacturerWarranty}
                      setValue={(val) => setForm({ ...form, manufacturerWarranty: val })}
                      label="manufacturerWarranty"
                    />
                  </Col>
                  <Col xs={3} md={6} className="mb-2">
                    <SelectComponent
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                      value={form.engineModelYear}
                      setValue={(val) => setForm({ ...form, engineModelYear: val })}
                      label="engineModelYear"
                    />
                  </Col>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EngineAdvert;
