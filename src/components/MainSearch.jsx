import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Job from "./Job";
import { fetchSearchResults } from "./redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.search.results);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchSearchResults(query));
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <Container
      fluid
      className="p-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      }}
    >
      <Row>
        <Col xs={10} className="mx-auto mt-3 mb-4">
          <h1
            className="text-light text-center"
            style={{
              color: "#FFFFFF",
            }}
          >
            Remote Jobs Search
          </h1>
        </Col>
        <Link to={"/favourites"} className="d-flex justify-content-center text-decoration-none">
          <Button variant="light" className="text-primary border-3 border fw-bold mb-5">
            Aziende preferite
          </Button>
        </Link>
        <Col xs={10} className="mx-auto">
          <Form className="border border-3 border-dark rounded-3" onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="border border-3 border-light rounded mt-4 mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
