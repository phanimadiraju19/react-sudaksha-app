import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Star from "@material-ui/icons/Star";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from '@material-ui/core/styles';
import 'font-awesome/css/font-awesome.min.css';


/**
 * Functional component for displaying a course card
 * @param props properties passed by parent component to child component
 */

const useStyles = makeStyles({
    card:{
        boxShadow:20,
        width:350,     
    },
    media: {
        width:350,
      height: 150
    },
  });
  
const CourseCard = function (props) {
    const course = props.course;
    const classes = useStyles();


  return (
    <Card className={classes.card} >
    <CardActionArea>
    <CardMedia 
        className={classes.media}
        image={course.photo_URL}
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {course.course_name}
        </Typography>
        <br /><br />
        <Typography gutterBottom variant="body1" color="textSecondary" component="p">
            {course.course_description}
        </Typography>
        <br /><br />
        <div id="last-row">
            <Button variant="contained" color="inherit" id="left-button">
                <Star id="star-icon" />{course.customer_rating}({course.number_customers_rated})
              </Button>
            <Typography gutterBottom variant="body1" color="textSecondary" component="p" id="right-avg-price">
            <i className="fa fa-inr" aria-hidden="true"></i> {course.course_price}  for {course.course_days}
              </Typography>
        </div>
    </CardContent>
    </CardActionArea>
</Card>
  );
}

export default CourseCard;


