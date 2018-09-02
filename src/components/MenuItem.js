import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar, IconButton } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import CachedIcon from '@material-ui/icons/Cached';
import TextField from '@material-ui/core/TextField';
import firebase from '../config/constants';
import Comment from './Comment';
import './idk.css';

class MenuItem extends Component {
  classes = {};

  constructor(props) {
    super(props);

    this.classes = props.classes;

    this.state = {
      MenuId: props.uid,
      title: '',
      body:  '',
      price: '',
      commentDraft: ''
    };
  }

  

  userIsLogged() {
    // if this.state.currentUser is {} then...
    return Object.keys(this.state.currentUser).length !== 0
      || this.state.currentUser.constructor !== Object;
  }

  getActionIcons() {
    var icons = [];

    // only show delete option for the respective authors
    if (this.state.uid === this.state.currentUser.uid) {
      icons.push(
        <IconButton key='delete' onClick={this.handleDelete}>
          <DeleteIcon />
        </IconButton>
      );
    }
    // only show star option if the user is logged in
    if (this.userIsLogged()) {
      icons.push(
        <IconButton key='star' onClick={this.handleStars}>
          <StarIcon />
        </IconButton>
      );
      icons.push(
        <IconButton key='repost' onClick={this.handleRepost}>
          <CachedIcon />
        </IconButton>
      );
    }
    return (
      <div>
        {icons}
      </div>
    );
  }


  render() {
    
    return (
      <div className='row' >
        <Card className={this.classes.card}>
          <CardHeader
            //subheader='Retweeted by Michael'
          />
          <CardHeader
            avatar={
              <Avatar
                //alt="Remy Sharp"
                src={this.state.foodPic}
                className={this.classes.avatar}
              />
            }
            action={this.getActionIcons()}
            title={this.state.author}
            subheader={'Star count: ' + (this.state.stars ? this.countStars() : 0)}
          />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.state.title}
          </Typography>
          <Typography component="p">
            {this.state.body}
          </Typography>
          <Typography component="p">
            {this.state.price}
          </Typography>

          <br/>
          {comments}
          <br/>
          {this.getCommentField()}
        </CardContent>
        {this.getActionCards()}
      </Card>
      </div>
    );
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {

  }
}

export default MenuItem;