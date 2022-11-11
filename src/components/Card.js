import { Col } from "react-bootstrap";

export const Card = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="card-imgbx">
        <img src={imgUrl} />
        <div className="card-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
