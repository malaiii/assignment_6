import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class Boards extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      boards: []
    };
  }

  componentDidMount() {
    axios.get('/api/boardsList').then(result => this.setState({boards: result.data}));
  }

  render() {
    return (
      <Grid container spacing={16}>
        {this.state.boards.map(board => <Grid key={board.id} item xl={2}>
          <Link to={`/boards/${board.id}`}>
          
            <Card>
              <CardContent>
                <Typography variant="headline" component="h4"> {board.name} </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>)}
      </Grid>
    );
  }
}
