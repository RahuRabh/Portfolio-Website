import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, live }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <a href={link}><span onclick="hide(); return false">Code</span></a><br />
          <a href={live}><span onclick="hide(); return false">Live</span></a>
        </div>
      </div>
    </Col>
  )
}