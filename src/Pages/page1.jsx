/* need to move images to public folder...... now can get rid of all the imports and pull images from public folder */





import Card from 'react-bootstrap/Card';
import HairImage from './Photos/Hair.jpg'; // adjust the path as needed
import React from 'react';
export function Page1() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '80px' }}>
        <Card style={{ flex: 1, margin: '10px' }}>
          <Card.Img variant="top" src={HairImage}/>
          <Card.Body>
            <Card.Title>Hair Style 1</Card.Title>
            <Card.Text>
              Description of Hair Style 1
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">**add anything**</small>
          </Card.Footer>
        </Card>

        <Card style={{ flex: 1, margin: '10px' }}>
          <Card.Img variant="top" src={HairImage}/>
          <Card.Body>
            <Card.Title>Hair Style 2</Card.Title>
            <Card.Text>
              Description of Hair Style 2
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">**add anything**</small>
          </Card.Footer>
        </Card>

        <Card style={{ flex: 1, margin: '10px' }}>
          <Card.Img variant="top" src={HairImage}/>
          <Card.Body>
            <Card.Title>Hair Style 3</Card.Title>
            <Card.Text>
              Description of Hair Style 3
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">**add anything**</small>
          </Card.Footer>
        </Card>

      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '80px' }}>
        <Card style={{ flex: 1, margin: '10px' }}>
          <Card.Img variant="top" src={HairImage}/>
          <Card.Body>
            <Card.Title>Hair Style 4</Card.Title>
            <Card.Text>
              Description of Hair Style 1
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">**add anything**</small>
          </Card.Footer>
        </Card>

        <Card style={{ flex: 1, margin: '10px' }}>
          <Card.Img variant="top" src={HairImage}/>
          <Card.Body>
            <Card.Title>Hair Style 5</Card.Title>
            <Card.Text>
              Description of Hair Style 2
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">**add anything**</small>
          </Card.Footer>
        </Card>

        <Card style={{ flex: 1, margin: '10px' }}>
          <Card.Img variant="top" src={HairImage}/>
          <Card.Body>
            <Card.Title>Hair Style 3</Card.Title>
            <Card.Text>
              Description of Hair Style 6
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">**add anything**</small>
          </Card.Footer>
        </Card>

      </div>
    </>
  );
}

