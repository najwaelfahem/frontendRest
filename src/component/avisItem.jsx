import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 export default function AvisItem(props) {
  const rate=props.rate;
  const comment = {
    bounce: {
      animation: 'Y 2s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }
  return (
    <div>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
        
        <Moment fromNow>{props.createdAt}</Moment>
            
        </Card.Title>
        <Card.Text>
          {/* {props.rate} */}
         {rate === 1 &&  <FontAwesomeIcon icon={faStar} />}
         {rate === 2  && <div><FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
          </div>}  
          
          {rate === 3  && <div><FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
          </div>}  
          {rate === 4  && <div><FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
          </div>}  
          {rate === 5  && <div><FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
          </div>}  
        </Card.Text>
        <Card.Text>
          
          <StyleRoot>
      <div  className="test" style={comment.bounce}>{props.comment}
      </div>
    </StyleRoot>
        </Card.Text>
        <Card.Text>
          {props.createdby.toUpperCase()}

        </Card.Text>
        </Card.Body>
    </Card>
    </div>

  )
}

