import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import Header from '../common/header'
import RepoTile from '../common/repo-tile'
import './style.css'

class Result extends Component {

    render() {
        return (
            <div className='container'>
                <Header title='Repo Search Result' />
                <div className='repo-list'>
                    {this.props.repoList === 'notLoaded' && <div className='not-loaded'>Search for repositories above</div>}
                    {this.props.repoList === 'request' && <Loader
                        className='center-align'
                        type='TailSpin'
                        color='#00BFFF'
                        height='100'
                        width='100'
                    />}
                    {this.props.repoList === 'fail' &&
                        <div className='not-loaded'>Error in searching. Please check Internet connection and try again</div>}
                    {this.props.repoList.data && this.props.repoList.data.total_count === 0 &&
                        <div className='not-loaded'>No repo found. Please try with another keyword</div>
                    }
                    {this.props.repoList.data && this.props.repoList.data.total_count > 0 &&
                        <div className='repo-row'>
                            {this.props.repoList.data.items.map(item => (
                                <RepoTile repo={item} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Result

