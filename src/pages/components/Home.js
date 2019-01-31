
import React, {Component} from 'react';
import {getSubRedditInfo} from '../apiCalls/ApiCalls';
import SideBar from './SideBar';
import ContentHeader from './ContentHeader';
import ContentCard from './ContentCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.triggerSearch = this.triggerSearch.bind(this);
    this.state = {

    }
  }

  componentDidMount() {

  }

  triggerSearch(searchTerm) {
    getSubRedditInfo(searchTerm)
      .then((response) => {
        if (response.data) {
        this.setState({ data: response.data.data, error: false}, () => {
          console.log(this.state);
        });
        } else {
          this.setState({ error: true });
        }
      })
      .catch((errMsg) => {
        this.setState({ error: true });
      });
  }

  render() {
    const {data} = this.state;
    return (
      <div>
        <div className="home">
          <SideBar/>
          <section className="contentSection col-12 col-md-12 col-sm-12">
            <ContentHeader triggerSearch={this.triggerSearch}/>
            <ContentCard cardData={data} />
          </section>
        </div>
      </div>)
  }
}
