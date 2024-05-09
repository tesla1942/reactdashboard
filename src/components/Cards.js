import React from 'react';
import { Card, CardHeader, CardBody } from 'react-bootstrap';

function CardComponent({ title, children }) { // Accept props for title and content
  return (
    <Card>
      <CardHeader as="h5">{title}</CardHeader>  {/* Set header as h5 */}
      <CardBody>
        {children}  {/* Render any content passed as children */}
      </CardBody>
    </Card>
  );
}

export default CardComponent;
