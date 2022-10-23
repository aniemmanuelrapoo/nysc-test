import * as React from 'react';
import { Col, Container, Row  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css';
import { BigPlayButton, Player } from 'video-react';

interface ICourseDetailsProps {
}

const CourseDetails: React.FunctionComponent<ICourseDetailsProps> = (props) => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={8} md={6} sm={12}>
            <h1 className="coruseDetailsText">Requirements and eligibility for NYSC</h1>
            <img className="courseDetaisImg" src="https://solverwp.com/demo/html/edumint/assets/img/course/9.png" alt='' />
            <br></br> <br></br>
            <p className="CoruseallDescription">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.  <br></br> <br></br>Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.  <br></br> <br></br>Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.
            </p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="widget_feature">
              <h4 className="widget-title text-center">Course Features</h4>
              <hr />
              <ul>
              <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> 1200 Corpers</li>

              <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span> 2 hours</li>

              <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> 8</li>

              <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>Categories:</span> Technology</li>

              <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span>Tags:</span> Android, JavaScript</li>

              <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span>Instructor:</span> Emmanuel Rapoo</li>

              </ul>
              <div className="price-wrap text-center">
              <h5>Instructors Contact</h5>
              <h5 className='price-contact'>08183225008</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


      <br></br><br></br>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className='mb-4'>
            <div className="widget_feature">
              <h1 className="coruseDetailsText"> Skills You Need  </h1>   
              <hr />
              <ul>
                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas</li>
                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />Ligula cur maecenass</li>
                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
              </ul>           
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className='mb-4'>
            <Player src="https://rr3---sn-q4fl6n6z.googlevideo.com/videoplayback?expire=1666573661&ei=_ZBVY83ILs6k0_wPkNypmAI&ip=154.21.21.136&id=o-AGBw9vMiI3cS1GPsqtvKDcNGkZuc7CcA7fj90yB3Mq4l&itag=22&source=youtube&requiressl=yes&mh=M-&mm=31%2C26&mn=sn-q4fl6n6z%2Csn-vgqsknze&ms=au%2Conr&mv=m&mvi=3&pl=26&initcwndbps=591250&spc=yR2vp0mxgEu72j0rJ0wMldlqI_96-hg&vprv=1&mime=video%2Fmp4&ns=KEuCvB2BQ9NpMZQAzNqb-EkI&cnr=14&ratebypass=yes&dur=143.151&lmt=1666119645685702&mt=1666551687&fvip=5&fexp=24001373%2C24007246&c=WEB&txp=5532434&n=QxadaIow0aONcA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgOO6uA5I6DKIT2151lDVLYW39yElANzsiHyIFGSXtQXMCIQDv8hfMutAt4s888J6TwYiJL-OaUn3yc8ffLHo2tBFVxg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgW-qPNYDUzVgW1Z_d3i2_uGw2YBvS6ScQ1UCj2WCaajICIFGf__bkYUOivPaP_qHiHKnpEbFeBSYvcoKRDlMnnkXw&title=CREED%20III%20%7C%20Official%20Trailer">
              <BigPlayButton position="center" />
            </Player>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseDetails;
