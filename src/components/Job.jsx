import { useDispatch } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button
          variant="success"
          className="w-100 mt-3"
          onClick={() => {
            dispatch({ type: "ADD_FAVOURITE", payload: data });
          }}
        >
          Aggiungi ai preferiti
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
