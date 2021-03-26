import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Attendance Record</Card.Title>
                <p className="card-category">15 Mar 2021 - 20 MAR 2021</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Roll No</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">MON</th>
                      <th className="border-0">TUE</th>
                      <th className="border-0">WED</th>
                      <th className="border-0">THU</th>
                      <th className="border-0">FRI</th>
                      <th className="border-0">SAT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>P</td>
                      <td>P</td>
                      <td>A</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>John Doe</td>
                      <td>P</td>
                      <td>A</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>John Doe</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>John Doe</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                      <td>A</td>
                      <td>P</td>
                      <td>P</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>John Doe</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                      <td>A</td>
                      <td>P</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>John Doe</td>
                      <td>A</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                      <td>P</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ul class="pager">
		    <li><a href="#">Previous</a></li>
		    <li><a href="#">Next</a></li>
		</ul>
        <Button
	        className="btn-fill pull-right"
	        type="submit"
	        variant="info"
      	>
        	Update Attendance
      	</Button>
      </Container>
    </>
  );
}

export default TableList;
